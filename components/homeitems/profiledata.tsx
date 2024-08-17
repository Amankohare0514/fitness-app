import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface ProfileDataProps {
  user?: {
    name: string;
    profileImg?: string;
  };
}

const ProfileData: React.FC<ProfileDataProps> = ({ user }) => {
  const displayName = user?.name || 'Aman';
  const displayMessage = user ? `Welcome back, ${user.name}!` : "Let's check your activity";

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {user?.profileImg ? (
          <Image source={{ uri: user.profileImg }} style={styles.profileImage} />
        ) : (
          <MaterialIcons name="account-circle" size={50} color="#888" />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Hello, {displayName}</Text>
          <Text style={styles.descriptionText}>{displayMessage}</Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={30} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileData;
