import { StyleSheet, Image, Button, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Display an image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL or local image
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Add buttons for Log In and Register */}
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => console.log('Log In pressed')} />
        <View style={styles.spacer} />
        <Button title="Register" onPress={() => console.log('Register pressed')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
  },
  spacer: {
    height: 10, // Add spacing between the buttons
  },
});
