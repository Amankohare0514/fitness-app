import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const challenges = [
    { id: '1', name: 'Plank Challenge', icon: 'fitness-center', color: '#FAE179' },
    { id: '2', name: 'Sprint Challenge', icon: 'directions-run', color: '#BBDEFB' },
    { id: '3', name: 'Squat Challenge', icon: 'directions-walk', color: '#E0E0E0' },
    { id: '4', name: 'Pushup Challenge', icon: 'push-pin', color: '#FFE0B2' },
    { id: '5', name: 'Jumping Jacks', icon: 'sports-gymnastics', color: '#C8E6C9' },
    { id: '6', name: 'Lunges Challenge', icon: 'accessibility', color: '#D1C4E9' },
];

const Challenge: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Challenges</Text>
            <View style={styles.categoryContainer}>
                {challenges.map((challenge) => (
                    <View key={challenge.id} style={[styles.category, { backgroundColor: challenge.color }]}>
                        <MaterialIcons name={challenge.icon} size={60} color="rgba(255, 255, 255, 0.7)" style={styles.iconBackground} />
                        <Text style={styles.text}>{challenge.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    category: {
        width: '30%',
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        position: 'relative',
    },
    iconBackground: {
        position: 'absolute',
        top: '10%',
        left: '40%',
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        zIndex: 1,
        top: 20,
        right: 0,
        left: 0,   
    },
});

export default Challenge;
