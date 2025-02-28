import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const questions = [
  {
    id: 1,
    question: 'What are your primary wellness goals?',
    options: [
      { id: 'stress', label: 'Reduce Stress', icon: '🧘‍♀️' },
      { id: 'fitness', label: 'Improve Fitness', icon: '💪' },
      { id: 'sleep', label: 'Better Sleep', icon: '😴' },
      { id: 'mental', label: 'Mental Clarity', icon: '🧠' },
    ],
  },
  {
    id: 2,
    question: 'How often do you exercise?',
    options: [
      { id: 'rarely', label: 'Rarely', icon: '🌱' },
      { id: 'sometimes', label: '1-2 times/week', icon: '🌿' },
      { id: 'regular', label: '3-4 times/week', icon: '🌳' },
      { id: 'frequent', label: '5+ times/week', icon: '🎯' },
    ],
  },
  {
    id: 3,
    question: 'How would you rate your stress level?',
    options: [
      { id: 'low', label: 'Low', icon: '😊' },
      { id: 'moderate', label: 'Moderate', icon: '😐' },
      { id: 'high', label: 'High', icon: '😓' },
      { id: 'very-high', label: 'Very High', icon: '😰' },
    ],
  },
  {
    id: 4,
    question: 'What activities interest you most?',
    options: [
      { id: 'yoga', label: 'Yoga', icon: '🧘‍♀️' },
      { id: 'meditation', label: 'Meditation', icon: '🪷' },
      { id: 'hiit', label: 'HIIT', icon: '🏃‍♀️' },
      { id: 'strength', label: 'Strength Training', icon: '🏋️‍♀️' },
    ],
  },
];

export default function QuestionnaireScreen() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleComplete = () => {
    if (Object.keys(answers).length === questions.length) {
      // In a real app, save answers to user profile
      router.replace('/(tabs)');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#7C3AED', '#6D28D9']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Personalize Your Journey</Text>
        <Text style={styles.subtitle}>Help us create your perfect wellness plan</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>

        <ScrollView style={styles.questionnaire}>
          <View style={styles.questionCard}>
            <Text style={styles.questionNumber}>
              Question {currentQuestion + 1} of {questions.length}
            </Text>
            <Text style={styles.question}>
              {questions[currentQuestion].question}
            </Text>
            <View style={styles.options}>
              {questions[currentQuestion].options.map((option) => (
                <Pressable
                  key={option.id}
                  style={[
                    styles.option,
                    answers[questions[currentQuestion].id] === option.id && styles.selectedOption,
                  ]}
                  onPress={() => handleAnswer(questions[currentQuestion].id, option.id)}>
                  <Text style={styles.optionEmoji}>{option.icon}</Text>
                  <Text
                    style={[
                      styles.optionText,
                      answers[questions[currentQuestion].id] === option.id && styles.selectedOptionText,
                    ]}>
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>

        {currentQuestion === questions.length - 1 && (
          <Pressable 
            style={[
              styles.button,
              Object.keys(answers).length !== questions.length && styles.buttonDisabled
            ]}
            onPress={handleComplete}
            disabled={Object.keys(answers).length !== questions.length}>
            <Text style={styles.buttonText}>Complete</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginTop: -20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#7C3AED',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    transition: 'width 0.3s ease-in-out',
  },
  questionnaire: {
    flex: 1,
  },
  questionCard: {
    padding: 24,
  },
  questionNumber: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  question: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 24,
  },
  options: {
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    borderWidth: 2,
    borderColor: '#F1F5F9',
  },
  selectedOption: {
    backgroundColor: '#F3E8FF',
    borderColor: '#7C3AED',
  },
  optionEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#1E293B',
  },
  selectedOptionText: {
    color: '#7C3AED',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#7C3AED',
    margin: 24,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});