import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome } from "./screens";

const stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='Welcome'
      >
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown:false
          }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false
          }}
        />
        <stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown:false
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}