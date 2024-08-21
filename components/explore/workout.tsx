import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { workouts } from "@/components/homeitems/workoutData";
import { Ionicons } from '@expo/vector-icons';
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
        <View style={styles.container}>
            <Text style={styles.title}>Workout's</Text>
            <Swiper
                showsButtons={false}
                loop={false}
                autoplay={true}
                dot={<View />}
                activeDot={<View />}
            >
                {workouts.map((workout, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <View style={styles.card}>
                            <Image source={workout.imageSource} style={styles.image} />
                            <Text style={styles.title}>{workout.title}</Text>
                            <View style={styles.ratingContainer}>
                               <Text>rating  {renderStars(workout.rating)}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    cardContainer: {
        flex: 1,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: width - 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 150,
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
