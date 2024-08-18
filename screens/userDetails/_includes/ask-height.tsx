import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Wheely  from "react-native-wheely";

const AskHeight = () => {
  const [height, setHeight] = useState(170); // Default height in cm
  const [unit, setUnit] = useState("cm"); // Default unit

  const convertHeightToFeet = (cm: number) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}' ${inches}"`;
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
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
      <Text style={styles.label}>Select your height:</Text>
      <Wheely
        selectedIndex={height}
        onChange={handleHeightChange}
        options={Array.from({ length: 200 }, (_, i) => i + 100)}
      />
      <Text style={styles.selectedHeight}>
        {unit === "cm" ? `${height} cm` : convertHeightToFeet(height)}
      </Text>
      <Button
        title={`Switch to ${unit === "cm" ? "Feet" : "Centimeters"}`}
        onPress={toggleUnit}
      />
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
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
  selectedHeight: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default AskHeight;
