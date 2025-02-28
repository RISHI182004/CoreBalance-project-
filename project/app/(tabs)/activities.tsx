import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const workouts = [
  {
    id: '1',
    title: 'Morning Flow Yoga',
    duration: '20 min',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    duration: '30 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Strength Training',
    duration: '45 min',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop'
  }
];

export default function ActivitiesScreen() {
  const handleStartWorkout = (title: string, duration: string, level: string) => {
    // In a real app, this would start the workout
    alert(`Starting ${title} workout (${duration}, ${level})`);
  };

  const handleCategoryPress = (category: string) => {
    // In a real app, this would filter workouts by category
    alert(`Viewing ${category} workouts`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Fitness Activities</Text>
        <Text style={styles.subtitle}>Find your perfect workout</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="flame-outline" size={24} color="#DC2626" />
          <Text style={styles.statValue}>324</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="time-outline" size={24} color="#2563EB" />
          <Text style={styles.statValue}>47</Text>
          <Text style={styles.statLabel}>Minutes</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="trophy-outline" size={24} color="#059669" />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Workouts</Text>
        {workouts.map((workout) => (
          <Pressable 
            key={workout.id} 
            style={styles.workoutCard}
            onPress={() => handleStartWorkout(workout.title, workout.duration, workout.level)}>
            <Image source={{ uri: workout.image }} style={styles.workoutImage} />
            <View style={styles.workoutInfo}>
              <View>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <Text style={styles.workoutMeta}>
                  {workout.duration} • {workout.level}
                </Text>
              </View>
              <Ionicons name="play-circle" size={32} color="#7C3AED" />
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesGrid}>
          {['Yoga', 'Cardio', 'Strength', 'Pilates', 'Meditation', 'Stretching'].map((category, index) => (
            <Pressable 
              key={index} 
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category)}>
              <Text style={styles.categoryText}>{category}</Text>
            </Pressable>
          ))}
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
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
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  workoutImage: {
    width: '100%',
    height: 200,
  },
  workoutInfo: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  workoutMeta: {
    fontSize: 14,
    color: '#64748B',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1E293B',
  },
});