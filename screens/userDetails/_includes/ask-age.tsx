import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useUserContext } from '@/store/store';

const AskAge = () => {
  const { age, setAge } = useUserContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How old are you?</Text>
      <Text style={styles.subtitle}>This help us create your personalized plan.</Text>
      <Slider
        style={styles.slider}
        minimumValue={8}
        maximumValue={100}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#1E90FF"
        value={age}
        onValueChange={(value) => setAge(value)}
        step={1}
      />
      <Text style={styles.ageText}>{age} years</Text>
    </View>
  );
};

export default AskAge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
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
  slider: {
    width: '100%',
    height: 70,
    marginVertical: 30,
    backgroundColor: 'transparent',
  },
  ageText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});
