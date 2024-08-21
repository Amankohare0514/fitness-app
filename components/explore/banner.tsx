import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const Banner = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <ImageBackground
          source={{ uri: 'https://www.hdwallpaper.nu/wp-content/uploads/2017/02/fitness-16.jpg' }}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <ThemedView style={styles.bannerContent}>
            <ThemedText style={styles.bannerTitle}>Best Workout's</ThemedText>
            <ThemedText style={styles.seeMore}>See More</ThemedText>
          </ThemedView>
        </ImageBackground>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  card: {
    marginTop: 10,
    width: '90%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
    alignSelf: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 220,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 10,
  },
  bannerContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 5,
  },
  seeMore: {
    color: '#42a5f5',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Banner;
