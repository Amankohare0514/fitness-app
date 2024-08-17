import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const screenWidth = Dimensions.get('window').width;

const subCategories = [
    { title: 'Abs', subtitle: '20 min | 7 exercises', imageSource: require('@/assets/subcategory/abs.jpg') },
    { title: 'Chest', subtitle: '25 min | 6 exercises', imageSource: require('@/assets/subcategory/chest.jpg') },
    { title: 'Arm', subtitle: '15 min | 5 exercises', imageSource: require('@/assets/subcategory/arm.jpg') },
    { title: 'Leg', subtitle: '30 min | 8 exercises', imageSource: require('@/assets/subcategory/leg.png') },
    { title: 'Shoulder', subtitle: '20 min | 6 exercises', imageSource: require('@/assets/subcategory/shoulder.jpg') },
    { title: 'Back', subtitle: '35 min | 7 exercises', imageSource: require('@/assets/subcategory/back.jpeg')},
];

const SubCategoryCard = ({ title, subtitle, imageSource }: { title: string, subtitle: string, imageSource: any }) => (
    <TouchableOpacity style={styles.card}>
        <ImageBackground source={imageSource} style={styles.cardImage} resizeMode="cover">
            <View style={styles.textContainer}>
                <ThemedText style={styles.cardTitle}>{title}</ThemedText>
                <ThemedText style={styles.cardSubtitle}>{subtitle}</ThemedText>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

const SubCategory = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Beginner Exercises</ThemedText>
            {subCategories.map((subCategory) => (
                <SubCategoryCard key={subCategory.title} {...subCategory} />
            ))}
        </ThemedView>
    );
};

export default SubCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    card: {
        marginBottom: 20,
        borderRadius: 12,
        overflow: 'hidden',
        height: 120, // Increased height to accommodate both title and subtitle
        marginHorizontal: 8,
    },
    cardImage: {
        width: screenWidth - 32,
        height: '100%',
        justifyContent: 'flex-end', // Pushes content to the bottom
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        padding: 10,
        borderRadius: 5,
        width: '100%', // Make sure it stretches the full width of the card
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF',
        textAlign: 'center',
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FFF',
        textAlign: 'center',
        marginTop: 5,
    },
});
