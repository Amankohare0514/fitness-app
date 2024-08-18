import { useUserContext } from "@/store/store";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AskGender = () => {
  
  const {gender, setGender} = useUserContext()

  const handleGenderSelection = (gender: "Male" | "Female") => {
    setGender(gender);
  };

  console.log(gender)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          gender === "Male" && styles.selectedButton,
        ]}
        onPress={() => handleGenderSelection("Male")}
      >
        <Text
          style={[
            styles.buttonText,
            gender === "Male" && styles.selectedButtonText,
          ]}
        >
          Male
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          gender === "Female" && styles.selectedButton,
        ]}
        onPress={() => handleGenderSelection("Female")}
      >
        <Text
          style={[
            styles.buttonText,
            gender === "Female" && styles.selectedButtonText,
          ]}
        >
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  button: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#d0d0d0",
  },
  selectedButton: {
    backgroundColor: "#4a90e2",
    borderColor: "#2a70c2",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectedButtonText: {
    color: "#fff",
  },
});

export default AskGender;
