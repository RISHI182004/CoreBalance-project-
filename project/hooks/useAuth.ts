import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { AuthError, User } from '@supabase/supabase-js';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkSession: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,

  checkSession: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      set({ 
        isAuthenticated: !!session,
        user: session?.user || null
      });
    } catch (error) {
      console.error('Session check error:', error);
      set({ isAuthenticated: false, user: null });
    }
  },

  signIn: async (email, password) => {
    set({ isLoading: true });
    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        if (error instanceof AuthError) {
          switch (error.status) {
            case 400:
              throw new Error('Invalid email or password');
            case 429:
              throw new Error('Too many attempts. Please try again later.');
            default:
              throw new Error('Failed to sign in. Please try again.');
          }
        }
        throw error;
      }

      if (!data.session) {
        throw new Error('No session created. Please try again.');
      }

      set({ 
        isAuthenticated: true, 
        user: data.user 
      });
    } catch (error: any) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (email, password, name) => {
    set({ isLoading: true });
    try {
      if (!email || !password || !name) {
        throw new Error('Please fill in all fields');
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: { 
            full_name: name.trim(),
            avatar_url: null,
          },
        },
      });
      
      if (error) {
        if (error instanceof AuthError) {
          switch (error.status) {
            case 400:
              if (error.message.includes('already registered')) {
                throw new Error('This email is already registered');
              }
              throw new Error('Invalid signup details');
            case 422:
              throw new Error('Password must be at least 6 characters');
            default:
              throw new Error('Failed to create account. Please try again.');
          }
        }
        throw error;
      }

      if (!data.session) {
        throw new Error('Account created but session not established. Please log in.');
      }

      set({ 
        isAuthenticated: true, 
        user: data.user 
      });
    } catch (error: any) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    set({ isLoading: true });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ isAuthenticated: false, user: null });
    } catch (error) {
      console.error('Sign out error:', error);
      throw new Error('Failed to sign out. Please try again.');
    } finally {
      set({ isLoading: false });
    }
  },
}));