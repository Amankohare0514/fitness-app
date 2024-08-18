import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUserContext } from '@/store/store';

const AskGender = () => {
  const { gender, setGender } = useUserContext();

  const handleGenderSelection = (selectedGender: "Male" | "Female") => {
    setGender(selectedGender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender</Text>
      <Text style={styles.subtitle}>This help us create your personalized plan.</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            gender === "Male" && styles.selectedOption,
          ]}
          onPress={() => handleGenderSelection("Male")}
        >
          <Ionicons 
            name="male" 
            size={24} 
            color={gender === "Male" ? "#fff" : "#4a4a4a"} 
            style={styles.icon}
          />
          <Text
            style={[
              styles.optionText,
              gender === "Male" && styles.selectedOptionText,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            gender === "Female" && styles.selectedOption,
          ]}
          onPress={() => handleGenderSelection("Female")}
        >
          <Ionicons 
            name="female" 
            size={24} 
            color={gender === "Female" ? "#fff" : "#4a4a4a"} 
            style={styles.icon}
          />
          <Text
            style={[
              styles.optionText,
              gender === "Female" && styles.selectedOptionText,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: '500',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 0.7,
    borderColor: '#d0d0d0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'blue',
    borderColor: '#2a70c2',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  selectedOptionText: {
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
});

export default AskGender;
