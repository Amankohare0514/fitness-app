import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: 'https://www.hdwallpaper.nu/wp-content/uploads/2017/02/fitness-16.jpg' }} 
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Best Workout's</Text>
          <Text style={styles.seeMore}>See More</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center', 
    marginTop: 20,
  },
  imageBackground: {
    width: '100%',
    height: 180,
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
