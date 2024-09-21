import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const categories = [
    { name: 'Yoga', icon: 'fitness-center' },
    { name: 'Gym', icon: 'self-improvement' },
    { name: 'Swimming', icon: 'pool' },
    { name: 'Running', icon: 'directions-run' },
];

const Categories: React.FC = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.headerContainer}>
                <ThemedText style={styles.title}>Categories</ThemedText>
            </ThemedView>
            <ThemedView style={styles.categoryContainer}>
                {categories.map((category) => (
                    <View key={category.name} style={styles.category}>
                        <MaterialIcons name={category.icon} size={30} color="blue" style={styles.icon} />
                        <ThemedText style={styles.text}>{category.name}</ThemedText>
                    </View>
                ))}
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllContainer: {
        padding: 10,
    },
    seeAllText: {
        fontSize: 14,
        color: 'red',
        fontWeight: '500',
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    category: {
        alignItems: 'center',
        margin: 10,
    },
    icon: {
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#F5F4F4',
        padding: 10,
        backgroundColor: '#F5F4F4',
    },
    text: {
        marginTop: 5,
         color: 'gray'
    },
});

export default Categories;
