import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Modal, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

interface ProfileDataProps {
  user?: {
    name: string;
    profileImg?: string;
  };
}

const ProfileData: React.FC<ProfileDataProps> = ({ user }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const displayName = user?.name || 'Aman';

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
        {user?.profileImg ? (
          <Image source={{ uri: user.profileImg }} style={styles.profileImage} />
        ) : (
          <MaterialIcons name="account-circle" size={30} color="#333" />
        )}
      </ThemedView>

      {/* Greeting section */}
      <ThemedView style={styles.greetingContainer}>
        <ThemedText style={styles.greetingText}>
          Hi, {displayName}  
          <MaterialIcons name="waving-hand" size={34} color="orange" style={styles.waveIcon} />
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
            <ThemedText style={styles.modalText}>This is the modal content</ThemedText>
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
  waveIcon: {
    marginLeft: 10,
    transform: [{ scaleX: -1 }],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 0.2,
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
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
    fontSize: 18,
    color: '#333',
  },
});

export default ProfileData;
