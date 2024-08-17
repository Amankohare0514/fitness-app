import { View, Text, StyleSheet, ScrollView, Image, ImageProps } from "react-native";
import React from 'react';
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";

const workouts = [
  {
    imageSource: require('@/assets/workouts/lower.png'),
    title: 'Lower Body Workout',
    rating: 4.5, 
  },
  {
    imageSource: require('@/assets/workouts/upper.png'),
    title: 'Upper Body Workout',
    rating: 4,
  },
  {
    imageSource: require('@/assets/workouts/arm.png'),
    title: 'Arm Workout',
    rating: 3.5,
  },
  {
    imageSource: require('@/assets/workouts/leg.png'),
    title: 'Leg Workout',
    rating: 4.8,
  },
  {
    imageSource: require('@/assets/workouts/yoga.png'),
    title: 'Yoga',
    rating: 5,
  },
];

const Card = ({ imageSource, title, rating }: { imageSource: ImageProps, title: string,  rating: number }) => (
  <ThemedView style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.cardImage} resizeMode="cover" />
    </View>
    <ThemedView style={styles.cardContent}>
      <ThemedText style={styles.cardTitle}>{title}</ThemedText>
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Ionicons
            key={index}
            name={index < Math.floor(rating) ? "star" : "star-outline"}
            size={16}
            color="#FFD700"
          />
        ))}
        <ThemedText style={styles.ratingText}>{rating.toFixed(1)}</ThemedText>
      </View>
    </ThemedView>
  </ThemedView>
);

const Workouts = () => {
  return (
    <ThemedView style={styles.containerSec}>
      <ThemedText style={styles.title}>Featured Workouts</ThemedText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {workouts.map((workout) => (
          <Card key={workout.title} {...workout} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  containerSec: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  card: {
    marginBottom: 10,
    width: 200,
    borderRadius: 15,
    marginHorizontal: 8,
    backgroundColor: "#FFF",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 3,
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 10,
    backgroundColor: '#FFFEFE',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2A2A2A",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#7A7A7A",
  },
});
