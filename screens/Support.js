import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Support = () => {
  return (
    <LinearGradient 
    colors={["#575757", "#000000"]}
    style={styles.container}
    >
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CONTACT US</Text>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'data:image/png;base64,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' }} style={styles.icon} />
        <Text style={styles.description}>
         Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => { /* Chat with us action */ }}>
          <Text style={styles.buttonText}>CHAT WITH US</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'https://i.pinimg.com/originals/11/08/d0/1108d0d4cb84d632e0aca9e860eaf5e8.jpg' }} style={styles.icon} />
        <Text style={styles.description}>
          You can text us at 800-309-2622 — or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('sms:8003092622'); }}>
          <Text style={styles.buttonText}>TEXT US</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'https://i.pinimg.com/originals/63/1e/09/631e09b5d41cb13333638361034fcdc2.jpg' }} style={styles.icon} />
        <Text style={styles.description}>
          To send us a private or direct message, like @Open Fashion on 
          <Text style={styles.link} onPress={() => Linking.openURL('https://facebook.com')}> Facebook </Text>
          or follow us on 
          <Text style={styles.link} onPress={() => Linking.openURL('https://twitter.com')}> Twitter</Text>.
          We'll get back to you ASAP. Please include your name, order number, and email address for a faster response!
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
          <Image source={{ uri: 'https://i.pinimg.com/originals/63/1e/09/631e09b5d41cb13333638361034fcdc2.jpg' }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS315FvjyNsx7bKnwagzi8CUCj3JYWcEFKB6g&s' }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
          <Image source={{ uri: 'https://i.pinimg.com/736x/67/88/ed/6788eda16c75b6a918aca39013c64316.jpg' }} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerLink} onPress={() => { /* Navigate to About */ }}>About</Text>
        <Text style={styles.footerLink} onPress={() => { /* Navigate to Contact */ }}>Contact</Text>
        <Text style={styles.footerLink} onPress={() => { /* Navigate to Blog */ }}>Blog</Text>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 80,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '200'
  },
  section: {
    marginVertical: 25,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingVertical: 20,
    marginTop: 120,
  },
  footerLink: {
    color: '#987952',
    fontSize: 16,
    marginBottom: 60,
  },
});

export default Support;