import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Support from './Support';
import Category from './Category';

const Tab = createBottomTabNavigator();


function Profile () {
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
};
const Home = () => {
    return(
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarActiveTintColor:"#987952",
               
            }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({color})=>{
                return <Entypo name={"home"} size={25} color={color}/>;
            },
        }} />
        <Tab.Screen name="Categories" component={Category} options={{
            tabBarIcon:({color})=>{
                return <MaterialIcons name={"category"} size={25} color={color}/>;
            },
        }}  />
        <Tab.Screen name="Support" component={Support} options={{
            tabBarIcon:({color})=>{
                return <Entypo name={"message"} size={25} color={color}/>;
            },
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon:({color})=>{
                return <FontAwesome name={"user"} size={25} color={color}/>;
            },
        }} />
      </Tab.Navigator>
        
    )
};

export default Home;