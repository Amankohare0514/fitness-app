import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useUserContext } from '@/store/store';

const AskActivityLevel = () => {
  const { activityLevel, setActivityLevel } = useUserContext();

  const levels = [
    'Sedentary',
    'Lightly active',
    'Moderately active',
    'Very active',
    'Super active',
  ] as const;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your activity level:</Text>
      <Text style={styles.subtitle}>This help us create your personalized plan.</Text>
      {levels.map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.button,
            activityLevel === level && styles.selectedButton,
          ]}
          onPress={() => setActivityLevel(level)}
        >
          <Text
            style={[
              styles.buttonText,
              activityLevel === level && styles.selectedButtonText,
            ]}
          >
            {level}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 15,
    borderWidth: 0.2,
    borderColor: 'gray',
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  selectedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AskActivityLevel;
