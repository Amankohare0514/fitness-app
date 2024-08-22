import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Modal, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import useUser from '@/hooks/auth/useUser';
import { router } from 'expo-router';

const ProfileData = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { user } = useUser()
  const displayName = user?.name || 'Update your name';

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header section with menu and user icon */}
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={toggleModal}>
          <Ionicons name="menu" size={30} color="#333" />
        </TouchableOpacity>
        {user?.avatar?.url ? (
          <Image source={{ uri: user?.avatar?.url }} style={styles.profileImage} />
        ) : (
          <MaterialIcons name="account-circle" size={30} color="#333" />
        )}
      </ThemedView>

      {/* Greeting section */}
      <ThemedView style={styles.greetingContainer}>
        <ThemedText style={styles.greetingText}>
          Hi, {displayName} <MaterialIcons name="waving-hand" size={32} color="orange"  style={styles.waveicon} />
        </ThemedText>
      </ThemedView>

      {/* Search bar with icon */}
      <ThemedView style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </ThemedView>

      {/* Modal for menu */}
      <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <ThemedView style={styles.modalOverlay}>
        <ThemedView style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>

          <Image
            source={require('@/assets/images/icon.png')} 
            style={styles.fitnessImage}
          />

          <ThemedText style={styles.modalTitle}>Welcome to Your Fitness Journey</ThemedText>

          <ThemedText style={styles.modalText}>
            💪 **Fitness Tip:** Consistency is key! Set small, achievable goals and gradually increase your intensity.
          </ThemedText>

          <ThemedText style={styles.modalText}>
            🏋️ **Workout Plan:** Start with a 10-minute warm-up, followed by strength training exercises like squats and push-ups, and finish with a cool-down stretch.
          </ThemedText>

          <ThemedText style={styles.modalText}>
            🍎 **Nutrition:** Remember, abs are made in the kitchen! Focus on a balanced diet rich in protein, healthy fats, and complex carbs.
          </ThemedText>

          <ThemedText style={styles.motivationalQuote}>
            "The only bad workout is the one that didn't happen."
          </ThemedText>

          <TouchableOpacity style={styles.ctaButton} onPress={() =>router.push('/explore')}>
            <ThemedText style={styles.ctaButtonText}>Start Your Plan Now</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 50,
  },
  waveicon: {
    marginLeft: 10,
    transform: [{ scaleX: -1 }],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 0.4,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 36,
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'left',
    marginBottom: 10,
    width: '100%',
  },
  motivationalQuote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#2e86de',
    textAlign: 'center',
    marginVertical: 20,
  },
  fitnessImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  ctaButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 4,
  },
  ctaButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileData;
