import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, Image, ScrollView, View } from "react-native";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

interface DietDetailItem {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  cookingMinutes: number;
  healthScore: number;
  pricePerServing: number;
  preparationMinutes: number;
  nutrition: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
    }[];
    carbohydrates: string;
    protein: string;
    fat: string;
    calories: string;
  };
}

const DietDetails: React.FC = () => {
  const [diet, setDiet] = useState<DietDetailItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    fetchDietDetails();
  }, []);

  const fetchDietDetails = async () => {
    try {
      const response = await axios.get<DietDetailItem>(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            apiKey: "bceeb025d5534b488f8b2ed3c00a95a6",
            includeNutrition: true,
          },
        }
      );

      const nutrients = response.data.nutrition.nutrients;
      const protein = nutrients.find((nutrient) => nutrient.name === "Protein")?.amount || 0;
      const calories = nutrients.find((nutrient) => nutrient.name === "Calories")?.amount || 0;
      const fat = nutrients.find((nutrient) => nutrient.name === "Fat")?.amount || 0;
      const carbs = nutrients.find((nutrient) => nutrient.name === "Carbohydrates")?.amount || 0;

      setDiet({
        ...response.data,
        nutrition: {
          protein: `${protein}g`,
          calories: `${calories}`,
          fat: `${fat}g`,
          carbohydrates: `${carbs}g`,
        },
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching diet details:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!diet) {
    return <ThemedText>No details available</ThemedText>;
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <Image source={{ uri: diet.image }} style={styles.image} />
      </ThemedView>
      <ThemedText style={styles.title}>{diet.title}</ThemedText>
      <ThemedView style={styles.nutritionContainer}>
        <View style={styles.nutritionItem}>
          <Ionicons name="time-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Ready In Minutes: {diet.readyInMinutes}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <Ionicons name="restaurant-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Cooking Minutes: {diet.cookingMinutes}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <Ionicons name="hourglass-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Preparation Minutes: {diet.preparationMinutes}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <Ionicons name="pricetag-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Price Per Serving: {diet.pricePerServing}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <MaterialCommunityIcons name="heart-pulse" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Health Score: {diet.healthScore}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <Ionicons name="nutrition-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Protein: {diet.nutrition.protein}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <Ionicons name="flame-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Calories: {diet.nutrition.calories}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <MaterialCommunityIcons name="oil" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Fat: {diet.nutrition.fat}
          </ThemedText>
        </View>
        <View style={styles.nutritionItem}>
          <Ionicons name="leaf-outline" size={22} color="#666" />
          <ThemedText style={styles.nutritionText}>
            Carbs: {diet.nutrition.carbohydrates}
          </ThemedText>
        </View>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  nutritionContainer: {
    marginTop: 10,
    marginBottom: 22,
  },
  nutritionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  nutritionText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default DietDetails;
