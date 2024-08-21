import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useUserContext } from "@/store/store";
import axios from "axios";
import { useRouter } from "expo-router";
import useUser from "@/hooks/auth/useUser";

const AskActivityLevel = () => {
  const router = useRouter();
  const { user } = useUser();
  console.log(user?._id);
  const { activityLevel, setActivityLevel, age, weightKg, heightCm, gender } =
    useUserContext();
  console.log({ activityLevel, age, weightKg, heightCm, gender });

  const levels = [
    "Sedentary",
    "Lightly active",
    "Moderately active",
    "Very active",
    "Super active",
  ] as const;

  const handleSubmitChangeToApi = async () => {
    try {
      const response = await fetch(
        "https://fitness-app-server-qno7.onrender.com/api/v1/update-user-details",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?._id,
            age: age,
            gender: gender,
            weightKg: weightKg,
            heightCm: heightCm,
            activityLevel: activityLevel,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
       router.push("/(tabs)");
    } catch (error) {
      console.log(error);
       Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your activity level:</Text>
      <Text style={styles.subtitle}>
        This helps us create your personalized plan.
      </Text>
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
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmitChangeToApi}
      >
        <Text style={styles.submitButtonText}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    paddingVertical: 15,
    borderWidth: 0.2,
    borderColor: "gray",
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
  },
  selectedButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  submitButton: {
    position: "absolute",
    bottom: 27,
    right: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default AskActivityLevel;
