import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchDiets();
  }, []);

  const fetchDiets = async () => {
    try {
      const response = await axios.get<DietResponse>(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: 'bceeb025d5534b488f8b2ed3c00a95a6', 
          query: searchQuery,
          addRecipeNutrition: true,
        },
      });
      setDiets(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching diets:', error);
      setLoading(false);
    }
  };

  const renderDietCard = ({ item }: { item: DietItem }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Protein: {item.nutrition.protein}g</Text>
          <Text style={styles.infoText}>Calories: {item.nutrition.calories}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = () => {
    setLoading(true);
    fetchDiets();
  };

  return (
    <View style={styles.container}>
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
          renderItem={renderDietCard}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});

export default Diet;
