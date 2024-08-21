import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { YogaData } from './YodaData';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
const { width } = Dimensions.get('window');

const YogaTypes = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Explore Types of Yoga</ThemedText>
            <Swiper
                showsButtons={false}
                loop={false}
                autoplay={true}
                style={styles.swiper}
                dot={<ThemedView />}
                activeDot={<ThemedView />}
            >
                {YogaData.map((yoga, index) => (
                    <ThemedView key={index} style={styles.cardContainer}>
                        <ThemedView style={styles.card}>
                            <Image source={yoga.imageSource} style={styles.image} />
                            <ThemedText style={styles.title1}>{yoga.title}</ThemedText>
                            <ThemedText style={styles.subtitle}>{yoga.description}</ThemedText>
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
        height: 360,
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
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '500',
        marginHorizontal: 8,
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});

export default YogaTypes;
