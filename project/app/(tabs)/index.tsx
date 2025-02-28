import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

export default function TodayScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleMoodSelection = (mood: string) => {
    setSelectedMood(mood);
    // In a real app, save this to the backend
  };

  const handleActivityPress = (activity: string, duration: string, id: string) => {
    setSelectedActivity(activity);
    router.push(`/activities/${id}`);
  };

  const handleChallengePress = () => {
    // In a real app, this would start the challenge
    alert('Starting daily challenge: Find Your Balance');
  };

  const handleStreakPress = () => {
    // In a real app, this would show streak details
    alert('Viewing streak details');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.appName}>CoreBalance</Text>
        <Text style={styles.greeting}>Good morning, Sarah</Text>
        <Text style={styles.date}>Monday, January 22</Text>
      </View>

      <View style={styles.moodCard}>
        <Text style={styles.moodTitle}>How are you feeling today?</Text>
        <View style={styles.moodGrid}>
          {[
            { emoji: '😊', mood: 'Happy' },
            { emoji: '😌', mood: 'Relaxed' },
            { emoji: '😐', mood: 'Neutral' },
            { emoji: '😔', mood: 'Sad' },
            { emoji: '😫', mood: 'Stressed' }
          ].map((item, index) => (
            <Pressable 
              key={index} 
              style={[
                styles.moodItem,
                selectedMood === item.mood && styles.selectedMoodItem
              ]}
              onPress={() => handleMoodSelection(item.mood)}>
              <Text style={styles.emoji}>{item.emoji}</Text>
              {selectedMood === item.mood && (
                <Text style={styles.moodLabel}>{item.mood}</Text>
              )}
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Activities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activitiesScroll}>
          <Pressable 
            onPress={() => handleActivityPress('Core Flow', '15 mins', 'core-flow')}
            style={({ pressed }) => [
              styles.activityCardWrapper,
              pressed && styles.pressed
            ]}>
            <LinearGradient
              colors={['#7C3AED', '#6D28D9']}
              style={[
                styles.activityCard,
                selectedActivity === 'Core Flow' && styles.selectedActivityCard
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Ionicons name="body-outline" size={24} color="white" />
              <Text style={styles.activityTitle}>Core Flow</Text>
              <Text style={styles.activityTime}>15 mins</Text>
              {selectedActivity === 'Core Flow' && (
                <View style={styles.activeIndicator}>
                  <Ionicons name="play-circle" size={20} color="white" />
                  <Text style={styles.activeText}>Active</Text>
                </View>
              )}
            </LinearGradient>
          </Pressable>

          <Pressable 
            onPress={() => handleActivityPress('Balance Meditation', '10 mins', 'balance-meditation')}
            style={({ pressed }) => [
              styles.activityCardWrapper,
              pressed && styles.pressed
            ]}>
            <LinearGradient
              colors={['#2563EB', '#1D4ED8']}
              style={[
                styles.activityCard,
                selectedActivity === 'Balance Meditation' && styles.selectedActivityCard
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Ionicons name="meditate-outline" size={24} color="white" />
              <Text style={styles.activityTitle}>Balance Meditation</Text>
              <Text style={styles.activityTime}>10 mins</Text>
              {selectedActivity === 'Balance Meditation' && (
                <View style={styles.activeIndicator}>
                  <Ionicons name="play-circle" size={20} color="white" />
                  <Text style={styles.activeText}>Active</Text>
                </View>
              )}
            </LinearGradient>
          </Pressable>

          <Pressable 
            onPress={() => handleActivityPress('Reflection', '5 mins', 'reflection')}
            style={({ pressed }) => [
              styles.activityCardWrapper,
              pressed && styles.pressed
            ]}>
            <LinearGradient
              colors={['#059669', '#047857']}
              style={[
                styles.activityCard,
                selectedActivity === 'Reflection' && styles.selectedActivityCard
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Ionicons name="journal-outline" size={24} color="white" />
              <Text style={styles.activityTitle}>Reflection</Text>
              <Text style={styles.activityTime}>5 mins</Text>
              {selectedActivity === 'Reflection' && (
                <View style={styles.activeIndicator}>
                  <Ionicons name="play-circle" size={20} color="white" />
                  <Text style={styles.activeText}>Active</Text>
                </View>
              )}
            </LinearGradient>
          </Pressable>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Challenge</Text>
        <Pressable 
          style={({ pressed }) => [
            styles.challengeCard,
            pressed && styles.pressed
          ]} 
          onPress={handleChallengePress}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=500&auto=format&fit=crop' }}
            style={styles.challengeImage}
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Find Your Balance</Text>
            <Text style={styles.challengeDescription}>Take 5 minutes today to practice mindful breathing and center yourself.</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Wellness Streak</Text>
        <Pressable 
          style={({ pressed }) => [
            styles.streakCard,
            pressed && styles.pressed
          ]} 
          onPress={handleStreakPress}>
          <View style={styles.streakInfo}>
            <Text style={styles.streakCount}>7</Text>
            <Text style={styles.streakLabel}>days</Text>
          </View>
          <Text style={styles.streakMessage}>Your journey to balance is going strong!</Text>
        </Pressable>
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
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#7C3AED',
    marginBottom: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1E293B',
  },
  date: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 4,
  },
  moodCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  moodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  moodGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMoodItem: {
    backgroundColor: '#F3E8FF',
    transform: [{ scale: 1.1 }],
  },
  emoji: {
    fontSize: 24,
  },
  moodLabel: {
    fontSize: 12,
    color: '#7C3AED',
    marginTop: 4,
    textAlign: 'center',
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
  activitiesScroll: {
    marginLeft: -20,
    paddingLeft: 20,
  },
  activityCardWrapper: {
    marginRight: 16,
  },
  activityCard: {
    width: 140,
    height: 160,
    borderRadius: 16,
    padding: 16,
  },
  selectedActivityCard: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  activityTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 'auto',
  },
  activityTime: {
    color: '#fff',
    opacity: 0.8,
    marginTop: 4,
  },
  activeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 4,
    borderRadius: 12,
  },
  activeText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 12,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  challengeImage: {
    width: '100%',
    height: 200,
  },
  challengeContent: {
    padding: 16,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  challengeDescription: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  streakCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  streakInfo: {
    alignItems: 'center',
    marginRight: 20,
  },
  streakCount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#7C3AED',
  },
  streakLabel: {
    fontSize: 16,
    color: '#64748B',
  },
  streakMessage: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});