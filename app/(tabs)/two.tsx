import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>LOGO</Text>

      {/* Health Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://via.placeholder.com/80' }} // Replace with your image URI
          />
          <Text style={styles.profileName}>Full Name</Text>
          <Text style={styles.menuIcon}>⋮</Text>
        </View>
        <Text style={styles.profileDetails}>
          <Text style={styles.label}>Age:</Text> 64{'\n'}
          <Text style={styles.label}>Gender:</Text> Female{'\n'}
          <Text style={styles.label}>Relevant Health Issues:</Text> Previous fall history, farsightedness, weak legs.
        </Text>
      </View>

      {/* Your Circle */}
      <Text style={styles.sectionTitle}>Your Circle</Text>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Image
            style={styles.circleImage}
            source={{ uri: 'https://via.placeholder.com/60' }} // Replace with your image URI
          />
          <Text style={styles.circleName}>Name 1</Text>
        </View>
        <View style={styles.circle}>
          <Image
            style={styles.circleImage}
            source={{ uri: 'https://via.placeholder.com/60' }} // Replace with your image URI
          />
          <Text style={styles.circleName}>Name 2</Text>
        </View>
        <View style={styles.circle}>
          <Image
            style={styles.circleImage}
            source={{ uri: 'https://via.placeholder.com/60' }} // Replace with your image URI
          />
          <Text style={styles.circleName}>Name 3</Text>
        </View>
      </View>
      <View style={styles.progressBar} />

      {/* Bottom Navigation */}
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Add To Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  menuIcon: {
    fontSize: 18,
  },
  profileDetails: {
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  circle: {
    alignItems: 'center',
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  circleName: {
    fontSize: 12,
  },
  progressBar: {
    width: '100%',
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    marginBottom: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
