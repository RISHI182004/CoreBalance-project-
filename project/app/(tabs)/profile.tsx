import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'settings':
        alert('Opening Settings...');
        break;
      case 'notifications':
        alert('Opening Notifications...');
        break;
      case 'help':
        alert('Opening Help Center...');
        break;
      case 'share':
        alert('Opening Share Options...');
        break;
    }
  };

  const handleAchievementPress = (title: string) => {
    alert(`Viewing details for achievement: ${title}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Pressable onPress={() => alert('Change profile picture')}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' }}
              style={styles.profileImage}
            />
          </Pressable>
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.bio}>Balance seeker | Wellness enthusiast</Text>
        </View>

        <View style={styles.statsContainer}>
          <Pressable style={styles.statItem} onPress={() => alert('View workout history')}>
            <Text style={styles.statValue}>47</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </Pressable>
          <View style={styles.statDivider} />
          <Pressable style={styles.statItem} onPress={() => alert('View activity time')}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </Pressable>
          <View style={styles.statDivider} />
          <Pressable style={styles.statItem} onPress={() => alert('View streak details')}>
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>Streak</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementsScroll}>
          <Pressable 
            style={styles.achievementCard}
            onPress={() => handleAchievementPress('7 Day Streak')}>
            <View style={[styles.achievementIcon, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="flame" size={24} color="#D97706" />
            </View>
            <Text style={styles.achievementTitle}>7 Day Streak</Text>
            <Text style={styles.achievementDesc}>Completed activities for 7 days</Text>
          </Pressable>
          <Pressable 
            style={styles.achievementCard}
            onPress={() => handleAchievementPress('Early Bird')}>
            <View style={[styles.achievementIcon, { backgroundColor: '#DBEAFE' }]}>
              <Ionicons name="medal" size={24} color="#2563EB" />
            </View>
            <Text style={styles.achievementTitle}>Early Bird</Text>
            <Text style={styles.achievementDesc}>5 morning workouts completed</Text>
          </Pressable>
          <Pressable 
            style={styles.achievementCard}
            onPress={() => handleAchievementPress('Balance Master')}>
            <View style={[styles.achievementIcon, { backgroundColor: '#F3E8FF' }]}>
              <Ionicons name="leaf" size={24} color="#7C3AED" />
            </View>
            <Text style={styles.achievementTitle}>Balance Master</Text>
            <Text style={styles.achievementDesc}>Completed all daily goals</Text>
          </Pressable>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <Pressable 
            style={styles.actionButton}
            onPress={() => handleQuickAction('settings')}>
            <Ionicons name="settings-outline" size={24} color="#1E293B" />
            <Text style={styles.actionText}>Settings</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => handleQuickAction('notifications')}>
            <Ionicons name="notifications-outline" size={24} color="#1E293B" />
            <Text style={styles.actionText}>Notifications</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => handleQuickAction('help')}>
            <Ionicons name="help-circle-outline" size={24} color="#1E293B" />
            <Text style={styles.actionText}>Help</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => handleQuickAction('share')}>
            <Ionicons name="share-social-outline" size={24} color="#1E293B" />
            <Text style={styles.actionText}>Share</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  bio: {
    fontSize: 16,
    color: '#64748B',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7C3AED',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E2E8F0',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  achievementsScroll: {
    marginLeft: -20,
    paddingLeft: 20,
  },
  achievementCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  achievementDesc: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
    marginTop: 8,
  },
});