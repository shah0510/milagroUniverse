import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import data from "../data/data.json";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState(data.products)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Ionicons name="menu" size={24} color="#987952" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
        <Ionicons name="search" size={24} color="#987952" style={styles.search}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Favorite pressed')}>
        <FontAwesome name="heart" size={24} color="#987952" style={styles.fav}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
        <FontAwesome name="shopping-cart" size={24} color="#987952" style={styles.cart}/>
      </TouchableOpacity>

      </View>
      {/* Discount Banner */}
      <View style={styles.container}>
      <ImageBackground
        source={require("../assets/feature1.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.text}>Discounts up to 15% to all</Text>
      </ImageBackground>
    </View>
      
      {/* Featured Product */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Featured Product</Text>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.productContainer}>
          <Image source={require("../assets/feature1.png")} style={styles.Banner}/>
          </TouchableOpacity>


          <TouchableOpacity style={styles.productContainer}>
          <Image source={require("../assets/feature1.png")} style={styles.Banner}/>
          </TouchableOpacity>
          {/* Add more products similarly */}
        </ScrollView>
      </View>

      {/* Bulk Deals and Promotions */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bulk Deals and Promotions</Text>
        <TouchableOpacity style={styles.bulkDealContainer}>
          <Image style={styles.bulkDealImage} source={require("../assets/sale.png")} />
          <View>
            <Text style={styles.bulkDealName}>Semi Glossy Ceramic</Text>
            <Text style={styles.bulkDealCompany}>by Gedhar Trading Company</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}  style={styles.bulkDealContainer}>
          <Image style={styles.bulkDealImage} source={require("../assets/sale.png")} />
          <View>
            <Text style={styles.bulkDealName}>Designer Tiles With Alluminium Profiles</Text>
            <Text style={styles.bulkDealCompany}>by Ishika Tiles</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#111111',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'black'
  },
  search: {
    paddingLeft: 245,
    marginRight: 10
  },
  fav:{
    paddingRight: 10
  },
  cart: {
    marginRight: 25
  },
  bannerContainer: {
    backgroundColor: '#444',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
  },
  sectionContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 10,
    paddingLeft: 6
  },
  productContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  productDesigner: {
    color: '#aaa',
    fontSize: 14,
  },
  bulkDealContainer: {
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  bulkDealImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  bulkDealName: {
    color: '#fff',
    fontSize: 16,
  },
  bulkDealCompany: {
    color: '#aaa',
    fontSize: 14,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#222',
    borderTopWidth: 1,
    borderColor: '#333',
  },
  navItem: {
    color: '#fff',
    fontSize: 16,
  },
  imageBackground: {
    width: '100%',
    height: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold', // Optional: to add a semi-transparent background to the text
    padding: 10,
  },

});

export default HomeScreen;
