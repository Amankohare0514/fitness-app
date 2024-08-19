import { useUserContext } from "@/store/store";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Wheely  from "react-native-wheely";

const AskHeight = () => {
  const {heightCm, setHeightCm} = useUserContext();
  const [unit, setUnit] = useState("cm"); 

  console.log(typeof heightCm)

  const convertHeightToFeet = (cm: number) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}' ${inches}"`;
  };

  const toggleUnit = () => {
    if (unit === "cm") {
      setUnit("ft");
    } else {
      setUnit("cm");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your height</Text>
      <Text style={styles.subtitle}>This help us create your personalized plan.</Text>
      <Wheely
        selectedIndex={heightCm}
        onChange={(value) => setHeightCm(value)}
        options={Array.from({ length: 200 }, (_, i) => (i + 100).toString())}
      />
      <Text style={styles.selectedHeight}>
        {unit === "cm" ? `${heightCm} cm` : convertHeightToFeet(heightCm)}
      </Text>
      <TouchableOpacity style={styles.switchButton} onPress={toggleUnit}>
        <Text style={styles.switchButtonText}>
          Switch to {unit === "cm" ? "Feet" : "Centimeters"}
        </Text>
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
  selectedHeight: {
    fontSize: 26,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  switchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  switchButtonText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
  },
});

export default AskHeight;
