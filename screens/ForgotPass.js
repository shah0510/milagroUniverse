// src/screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
  // Use the correct path

const ForgotPass = ( {navigation} ) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (!email) {
      alert('Please enter a valid email or user ID');
      return;
    }
    // Handle password reset logic
    console.log('Password reset request sent for:', email);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
                <Image
                  source={require("../assets/login.jpg")}
                  style={{
                    height: 390,
                    width: 390,
                    borderRadius: 0,
                    top: 0,
                    transform: [
                        { translateX: 0},
                        { translateY: 0},
                    ]
                  }}
                />
            </View>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Forgot Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your User ID or Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("CodeScreen")}>
          <Text style={styles.buttonText}>Send Request</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350, // Adjust height as needed
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20, // Add margin to separate from the image
  },
  header: {
    fontSize: 23,
    marginBottom: 20,
    textAlign: 'center',
    marginRight: 100,
  },
  input: {
    width: '100%',
    padding: 16, // Adjust padding for more space inside the input
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff', // Ensure input box has a white background
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 20,
  },
});

export default ForgotPass;