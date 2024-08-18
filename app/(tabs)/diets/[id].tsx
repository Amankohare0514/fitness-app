import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const DietDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <ThemedView>
      <ThemedText>{id}</ThemedText>
    </ThemedView>
  );
};

export default DietDetails;

const styles = StyleSheet.create({});
