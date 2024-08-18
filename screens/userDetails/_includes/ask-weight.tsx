import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Wheely from "react-native-wheely";

const AskWeight = () => {
  const [weight, setWeight] = useState(70); // Default weight in kg

  // Generate the options array for kilograms
  const options = Array.from({ length: 300 }, (_, i) => i + 30); // Range from 30 kg to 329 kg

  const handleWeightChange = (index: number) => {
    setWeight(options[index]); // Update the weight based on selected index
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your weight</Text>
      <Text style={styles.subtitle}>This help us create your personalized plan.</Text>
      <Wheely
        selectedIndex={options.indexOf(weight)}
        onChange={handleWeightChange}
        options={options}
      />
      <Text style={styles.selectedWeight}>{`${weight} kg`}</Text>
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
  selectedWeight: {
    fontSize: 26,
    marginVertical: 20,
    fontWeight: 'bold',
  },
});

export default AskWeight;
