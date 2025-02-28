import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const meditations = [
  {
    id: '1',
    title: 'Calm Mind',
    duration: '10 min',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Peaceful Sleep',
    duration: '20 min',
    image: 'https://images.unsplash.com/photo-1515894203077-2ce86d11e840?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Stress Relief',
    duration: '15 min',
    image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=500&auto=format&fit=crop'
  }
];

export default function MindfulnessScreen() {
  const handleStartMeditation = (title: string, duration: string) => {
    // In a real app, this would start the meditation session
    alert(`Starting ${title} meditation for ${duration}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#7C3AED', '#6D28D9']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text style={styles.title}>Mindfulness</Text>
        <Text style={styles.subtitle}>Find your inner peace</Text>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Meditation</Text>
        <View style={styles.featuredCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500&auto=format&fit=crop' }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>Morning Gratitude</Text>
            <Text style={styles.featuredDescription}>Start your day with positivity and thankfulness</Text>
            <Pressable 
              style={styles.startButton}
              onPress={() => handleStartMeditation('Morning Gratitude', '5 min')}>
              <Text style={styles.startButtonText}>Start • 5 min</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        {meditations.map((meditation) => (
          <Pressable 
            key={meditation.id} 
            style={styles.meditationCard}
            onPress={() => handleStartMeditation(meditation.title, meditation.duration)}>
            <Image source={{ uri: meditation.image }} style={styles.meditationImage} />
            <View style={styles.meditationInfo}>
              <View>
                <Text style={styles.meditationTitle}>{meditation.title}</Text>
                <Text style={styles.meditationDuration}>{meditation.duration}</Text>
              </View>
              <Ionicons name="play-circle" size={32} color="#7C3AED" />
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Practices</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickPracticesScroll}>
          <Pressable 
            style={styles.quickPracticeCard}
            onPress={() => handleStartMeditation('Breathing Exercise', '3 min')}>
            <Ionicons name="leaf-outline" size={24} color="#7C3AED" />
            <Text style={styles.quickPracticeTitle}>Breathing</Text>
            <Text style={styles.quickPracticeDuration}>3 min</Text>
          </Pressable>
          <Pressable 
            style={styles.quickPracticeCard}
            onPress={() => handleStartMeditation('Body Scan', '5 min')}>
            <Ionicons name="body-outline" size={24} color="#7C3AED" />
            <Text style={styles.quickPracticeTitle}>Body Scan</Text>
            <Text style={styles.quickPracticeDuration}>5 min</Text>
          </Pressable>
          <Pressable 
            style={styles.quickPracticeCard}
            onPress={() => handleStartMeditation('Loving Kindness', '4 min')}>
            <Ionicons name="heart-outline" size={24} color="#7C3AED" />
            <Text style={styles.quickPracticeTitle}>Loving Kindness</Text>
            <Text style={styles.quickPracticeDuration}>4 min</Text>
          </Pressable>
        </ScrollView>
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
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
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
  featuredCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#7C3AED',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  meditationCard: {
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
  meditationImage: {
    width: '100%',
    height: 160,
  },
  meditationInfo: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  meditationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  meditationDuration: {
    fontSize: 14,
    color: '#64748B',
  },
  quickPracticesScroll: {
    marginLeft: -20,
    paddingLeft: 20,
  },
  quickPracticeCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  quickPracticeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginTop: 12,
    marginBottom: 4,
  },
  quickPracticeDuration: {
    fontSize: 14,
    color: '#64748B',
  },
});