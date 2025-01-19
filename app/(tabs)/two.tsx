import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Falltech</Text>

      {/* Health Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://t3.ftcdn.net/jpg/00/56/14/04/360_F_56140454_q4nbUmTCcC1ovIJrOL1SxJuaYXwvSz68.jpg' }} // Replace with your image URI
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
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjXVcm_oNNg_Xsajfk8PEsGUat7_4I_Ui3Q&s' }} // Replace with your image URI
          />
          <Text style={styles.circleName}>Name 1</Text>
        </View>
        <View style={styles.circle}>
          <Image
            style={styles.circleImage}
            source={{ uri: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bbe02990-7d16-4c23-9a65-c19d1aefc452/6985d80b-bdfc-4093-b463-ba69dde62f6b.png' }} // Replace with your image URI
          />
          <Text style={styles.circleName}>Name 2</Text>
        </View>
        <View style={styles.circle}>
          <Image
            style={styles.circleImage}
            source={{ uri: 'https://media.istockphoto.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?s=612x612&w=0&k=20&c=f0EqWiUuID5VB_NxBUEDn92W2HLENR15CFFPzr-I4XE=' }} // Replace with your image URI
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
