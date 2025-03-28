import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { workouts } from "@/components/homeitems/workoutData";
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
const { width } = Dimensions.get('window');

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Ionicons
                key={i}
                name={i <= rating ? 'star' : 'star-outline'}
                size={16}
                color="#FFD700"
                style={styles.star}
            />
        );
    }
    return stars;
};

const ExploreWorkout = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Workout's</ThemedText>
            <Swiper
                showsButtons={false}
                loop={false}
                style={styles.swiper}
                autoplay={true}
                dot={<ThemedView />}
                activeDot={<ThemedView />}
            >
                {workouts.map((workout, index) => (
                    <ThemedView key={index} style={styles.cardContainer}>
                        <ThemedView style={styles.card}>
                            <Image source={workout.imageSource} style={styles.image} />
                            <ThemedText style={styles.title1}>{workout.title}</ThemedText>
                            <ThemedView style={styles.ratingContainer}>
                               <ThemedText>rating  {renderStars(workout.rating)}</ThemedText>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>
                ))}
            </Swiper>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    swiper: {
        height: 320,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    title1: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16,
    },
    cardContainer: {
        flex: 1,
    },
    card: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: width - 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    star: {
        marginHorizontal: 2,
    },
});

export default ExploreWorkout;
