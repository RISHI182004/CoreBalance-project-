import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import VideoPlayer from '../../../components/VideoPlayer';

const activities = {
  'core-flow': {
    title: 'Core Flow',
    duration: '15 mins',
    instructor: 'Sarah Wilson',
    level: 'Intermediate',
    calories: '120',
    description: 'A dynamic flow focusing on core strength and stability. This sequence combines traditional yoga poses with core-strengthening exercises.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    benefits: [
      'Improves core strength',
      'Enhances flexibility',
      'Better posture',
      'Reduces back pain'
    ],
    equipment: [
      'Yoga mat',
      'Comfortable clothing',
      'Water bottle'
    ]
  },
  'balance-meditation': {
    title: 'Balance Meditation',
    duration: '10 mins',
    instructor: 'Michael Chen',
    level: 'Beginner',
    calories: '30',
    description: 'A guided meditation session focusing on mental balance and clarity. Perfect for reducing stress and improving focus.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    benefits: [
      'Reduces stress',
      'Improves focus',
      'Better sleep',
      'Emotional balance'
    ],
    equipment: [
      'Quiet space',
      'Comfortable seating',
      'Optional: meditation cushion'
    ]
  },
  'reflection': {
    title: 'Reflection',
    duration: '5 mins',
    instructor: 'Emma Davis',
    level: 'All Levels',
    calories: '0',
    description: 'A guided journaling session to help you reflect on your day, set intentions, and maintain mindful awareness.',
    image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=1000&auto=format&fit=crop',
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    benefits: [
      'Mental clarity',
      'Self-awareness',
      'Stress reduction',
      'Goal setting'
    ],
    equipment: [
      'Journal',
      'Pen',
      'Quiet space'
    ]
  }
};

export default function ActivityScreen() {
  const { id } = useLocalSearchParams();
  const activity = activities[id as keyof typeof activities];

  if (!activity) {
    router.back();
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.headerGradient}
        pointerEvents="none"
      />
      <Pressable 
        style={styles.backButton} 
        onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      <Image source={{ uri: activity.image }} style={styles.coverImage} />

      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{activity.title}</Text>
            <Text style={styles.instructor}>with {activity.instructor}</Text>
          </View>
          <Pressable 
            style={styles.startButton}
            onPress={() => alert(`Starting ${activity.title}`)}>
            <Text style={styles.startButtonText}>Start Activity</Text>
          </Pressable>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={24} color="#7C3AED" />
            <Text style={styles.statValue}>{activity.duration}</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="fitness-outline" size={24} color="#7C3AED" />
            <Text style={styles.statValue}>{activity.level}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="flame-outline" size={24} color="#7C3AED" />
            <Text style={styles.statValue}>{activity.calories}</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About this Activity</Text>
          <Text style={styles.description}>{activity.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <VideoPlayer 
            uri={activity.video}
            poster={activity.image}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          <View style={styles.benefitsList}>
            {activity.benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Ionicons name="checkmark-circle" size={20} color="#7C3AED" />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Required Equipment</Text>
          <View style={styles.equipmentList}>
            {activity.equipment.map((item, index) => (
              <View key={index} style={styles.equipmentItem}>
                <Ionicons name="cube-outline" size={20} color="#7C3AED" />
                <Text style={styles.equipmentText}>{item}</Text>
              </View>
            ))}
          </View>
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
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 10,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 300,
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: -40,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 16,
    color: '#64748B',
  },
  startButton: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitText: {
    fontSize: 16,
    color: '#1E293B',
  },
  equipmentList: {
    gap: 12,
  },
  equipmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  equipmentText: {
    fontSize: 16,
    color: '#1E293B',
  },
});