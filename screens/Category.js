import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tiles = [
  {
    id: '1',
    title: 'Rectangular Tiles',
    image: require('../assets/feature1.png'), // Replace with actual image path
    discount: '5% OFF',
    type: 'rectangular'
  },
  {
    id: '2',
    title: 'Decorative Tiles',
    subcategories: [
      {
        id: '2-1',
        title: 'Semi Glossy Ceramic',
        by: 'Gedhar Trading Company',
        image: require("../assets/feature1.png") // Replace with actual image path
      },
      {
        id: '2-2',
        title: 'Designer Tiles With Alluminium Profiles',
        by: 'Ishika Tiles',
        image: require("../assets/feature1.png") // Replace with actual image path
      }
    ],
    type: 'decorative'
  }
];

const TileItem = ({ item }) => (
  <TouchableOpacity style={styles.tileItem}>
    <Image source={item.image} style={styles.tileImage} />
    {item.discount && <View style={styles.discountBadge}><Text style={styles.discountText}>{item.discount}</Text></View>}
    <Text style={styles.tileTitle}>{item.title}</Text>
    {item.by && <Text style={styles.tileBy}>by: {item.by}</Text>}
  </TouchableOpacity>
);

const Category = () => {
  return (
    <FlatList
      data={tiles}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.categoryTitle}>{item.title}</Text>
          {item.type === 'rectangular' ? (
            <View style={styles.tileContainer}>
              <TileItem item={item} />
            </View>
          ) : (
            item.subcategories.map(subItem => (
              <View key={subItem.id} style={styles.tileContainer}>
                <TileItem item={subItem} />
              </View>
            ))
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 20
  },
  tileItem: {
    width: '48%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 3
  },
  tileImage: {
    width: '100%',
    height: 100
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  discountText: {
    color: '#fff',
    fontSize: 12
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  tileBy: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 10,
    marginBottom: 10
  }
});

export default Category;