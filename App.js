import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome, CodeScreen, CompanyDeets, ForgotPass, ForgotOtp, ChangePasswordScreen } from "./screens";

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
         <stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{
            headerShown:false
          }}
        />
        <stack.Screen
          name="CompanyDeets"
          component={CompanyDeets}
          options={{
            headerShown:false
          }}
        />
        <stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{
            headerShown:false
          }}
        />
        <stack.Screen
          name="ForgotOtp"
          component={ForgotOtp}
          options={{
            headerShown:false
          }}
        />
         <stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{
            headerShown:false
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}