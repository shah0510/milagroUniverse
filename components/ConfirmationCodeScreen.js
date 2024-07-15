import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';

const ConfirmationCodeScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    } else if (index === 3) {
      inputs.current[index].blur();
      Keyboard.dismiss();
    }

    // Log the code to the terminal only when all 4 digits are entered
    if (newCode.join('').length === 4) {
      console.log(newCode.join(''));
    }
  };

  const handleNextPress = () => {
    if (code.join('').length === 4) {
      Alert.alert('Code Entered', `You entered: ${code.join('')}`);
    } else {
      Alert.alert('Invalid Code', 'Please enter a 4-digit code.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter confirmation code</Text>
      <Text style={styles.subHeader}>A 4-digit code was sent to{'\n'}lucasscott3@email.com</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleCodeChange(text, index)}
            value={digit}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => Alert.alert('Back Pressed')}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 50,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 200,
  },
  codeInput: {
    width: 45,
    height: 45,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    margin: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  backButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 200,
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 200,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmationCodeScreen;
