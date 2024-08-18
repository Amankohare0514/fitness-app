import React, { useState, useEffect } from "react";
import {
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the type for a single diet item
interface DietItem {
  id: number;
  title: string;
  image: string;
  nutrition: {
    protein: string;
    calories: string;
  };
}

// Define the type for the response from the API
interface DietResponse {
  results: DietItem[];
}

const Diet: React.FC = () => {
  const [diets, setDiets] = useState<DietItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    fetchDiets();
  }, []);

  const fetchDiets = async () => {
    try {
      const response = await axios.get<DietResponse>(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: "bceeb025d5534b488f8b2ed3c00a95a6",
            query: searchQuery,
            addRecipeNutrition: true,
          },
        }
      );
      setDiets(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching diets:", error);
      setLoading(false);
    }
  };

  const renderDietCard = ({ item }: { item: DietItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/diets/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <ThemedView style={styles.textContainer}>
        <ThemedText style={styles.title}>{item.title}</ThemedText>
        <ThemedView style={styles.infoContainer}>
          <ThemedText style={styles.infoText}>
            Protein: {item.nutrition.protein}g
          </ThemedText>
          <ThemedText style={styles.infoText}>
            Calories: {item.nutrition.calories}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );

  const handleSearch = () => {
    setLoading(true);
    fetchDiets();
  };

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search diets..."
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          value={searchQuery}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={diets}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={renderDietCard}
          />
        )}
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 14,
    color: "#666",
  },
});

export default Diet;
