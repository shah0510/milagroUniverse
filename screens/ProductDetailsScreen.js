// ProductDetailScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { CartContext } from './CartContext';

const ProductDetailScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const product = {
      name: 'Marble & Stone Tiles',
      price: 88.39,
      quantity,
    };
    addToCart(product);
    navigation.navigate('Cart');
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/login.jpg")} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Marble & Stone Tiles</Text>
        <Text style={styles.price}>₹88.39 /Sq. Ft.</Text>
        <View style={styles.ratingContainer}>
          {[...Array(4)].map((_, index) => (
            <Icon key={index} name="star" size={20} color="#FFD700" />
          ))}
          <Icon name="star-o" size={20} color="#FFD700" />
        </View>
        <Text style={styles.sku}>SKU: MYT-F-6001200-Code18817L</Text>
        <Text style={styles.description}>
          Introducing Marble Vitrified Tile in Cream hue - perfect for adding character to Living Room, Bedroom, Kitchen.
          These tiles are 1600×800 mm in size, and feature a Glossy finish
        </Text>
        <View style={styles.specsContainer}>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Tile Size</Text>
            <Text style={styles.specValue}>600×1200mm</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Thickness</Text>
            <Text style={styles.specValue}>8</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Sq. ft. of coverage per Box</Text>
            <Text style={styles.specValue}>23.25</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Tile Use</Text>
            <Text style={styles.specValue}>8</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>No. of pcs/box</Text>
            <Text style={styles.specValue}>3</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Color</Text>
            <Text style={styles.specValue}>Gray</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Layout</Text>
            <View style={styles.layout}>
              {/* Replace with your layout images */}
              <Image source={require("../assets/login.jpg")} style={styles.layoutImage} />
              <Image source={require("../assets/login.jpg")} style={styles.layoutImage} />
            </View>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Application</Text>
            <Text style={styles.specValue}>Living Room, Bedroom, Kitchen</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Finish</Text>
            <Text style={styles.specValue}>Glossy</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Base Material</Text>
            <Text style={styles.specValue}>Vitrified</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Length</Text>
            <Text style={styles.specValue}>1600 mm</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Indoor Outdoor</Text>
            <Text style={styles.specValue}>Indoor</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Surface</Text>
            <Text style={styles.specValue}>Floor</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Look</Text>
            <Text style={styles.specValue}>Marble</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Catalogue</Text>
            <Text style={styles.specValue}>View</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.wishlistButton}>
            <Text style={styles.buttonText}>Add to Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 20,
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff",
  },
  price: {
    fontSize: 18,
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  sku: {
    fontSize: 14,
    color: '#888',
    
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: "#fff",
  },
  specsContainer: {
    marginVertical: 10,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    
  },
  specLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#fff",
  },
  specValue: {
    fontSize: 14,
    color: '#fff',
  },
  layout: {
    flexDirection: 'row',
  },
  layoutImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#EEDABC',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "#fff",
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  wishlistButton: {
    backgroundColor: '#EEDABC',
    padding: 10,
    borderRadius: 5,
    width: "48%"
    
  },
  cartButton: {
    backgroundColor: '#EEDABC',
    padding: 10,
    borderRadius: 5,
    width: "48%"
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#1A1A1A "
  },
});

export default ProductDetailScreen;
