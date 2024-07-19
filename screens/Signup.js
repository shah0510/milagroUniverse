import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Checkbox, Text, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0a84ff',
  },
};

const Signup = ( {navigation} ) => {
  const [checked, setChecked] = useState(false);
  const [registerAs, setRegisterAs] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleChangeRegisterAs = (value) => {
    setRegisterAs(value);
  };

  const handleCancelPress = () => {
    console.log('Cancel button pressed!');
  };

  const handleNextPress = () => {
    console.log('Next button pressed!');
    const data = {
      registerAs,
      firstName,
      lastName,
      email,
      mobileNumber,
    };

    fetch('url-daal-yaha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('Response:', responseJson);
        // Handle the response as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.view}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text>Create an account to get started</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.textinput}>Register as a</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={registerAs}
              onValueChange={(itemValue) => handleChangeRegisterAs(itemValue)}
              mode="dropdown"
              style={styles.picker}
              itemStyle={styles.pickeritem}
            >
              <Picker.Item label="Select here" value="" />
              <Picker.Item label="Dealer" value="dealer" />
              <Picker.Item label="Salesperson" value="salesperson" />
              <Picker.Item label="Architect" value="architect" />
              <Picker.Item label="Builder" value="builder" />
            </Picker>
          </View>

          <Text style={styles.textinput}>First name</Text>
          <TextInput
            mode="outlined"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.textinput}>Last name</Text>
          <TextInput
            mode="outlined"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.textinput}>Email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="you@example.com"
            mode="outlined"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.textinput}>Mobile Number</Text>
          <TextInput
            keyboardType="phone-pad"
            mode="outlined"
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.tnc}>
              I’ve read and agree with the <Text style={styles.link}>Terms and Conditions</Text> and the <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button mode="text" onPress={handleCancelPress} style={styles.cancelButton}>
              Cancel
            </Button>
            <Button mode="contained" onPress={()=>navigation.navigate("CodeScreen")} style={styles.nextButton} disabled={!checked}>
              Next
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.3,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
    height: 45,
  },
  textinput: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'column',
    marginBottom: 15,
    borderWidth: 0.8,
    borderRadius: 5,
  },
  picker: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    color: '#000',
  },
  pickeritem: {
    height: 20,
  },
  checkboxContainer: {
    borderColor: '#0a84ff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 40,
  },
  link: {
    color: '#0a84ff',
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 10,
  },
  tnc: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nextButton: {
    flex: 1,
    borderRadius: 5,
  },
});

export default Signup;