import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Button, Text, IconButton } from 'react-native-paper';
import { Feather, Entypo } from '@expo/vector-icons';
import axios from 'axios';

const ModalReq = ({ visible, onDismiss }) => {
  const [orderId, setOrderId] = useState('');
  const [selectedEmoticon, setSelectedEmoticon] = useState('');

  useEffect(() => {
    if (visible) {
      const fetchOrderId = async () => {
        try {
          const response = await axios.get('https://your-api-endpoint.com/order');
          setOrderId(response.data.orderId);
          console.log('Fetched Order ID:', response.data.orderId); // Log the fetched order ID
        } catch (error) {
          console.error('Failed to fetch order ID:', error);
        }
      };

      fetchOrderId();
    }
  }, [visible]);

  const handleEmoticonPress = (emoticon) => {
    if (selectedEmoticon === emoticon) {
      setSelectedEmoticon('');
    } else {
      setSelectedEmoticon(emoticon);
      console.log('Selected emoticon:', emoticon);
    }
  };

  const handleSubmit = async () => {
    console.log('Submitting data...');
    console.log('Order ID:', orderId);
    console.log('Selected Emoticon:', selectedEmoticon);

    try {
      const response = await axios.post('https://your-api-endpoint.com/submit', {
        orderId,
        emoticon: selectedEmoticon,
      });
      console.log('Submission response:', response.data); 
      onDismiss(); 
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
        <View style={styles.closeButtonContainer}>
          <IconButton icon="close" size={24} onPress={onDismiss} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>REQUEST SENT</Text>
          <Feather name="check-circle" size={60} color="#A8715A" />
          <Text style={styles.subText}>We will call you back!</Text>
          <Text style={styles.orderId}>Order ID: {orderId || 'Loading...'}</Text>
          <View style={styles.underline} />
          <Text style={styles.subText2}>Rate your purchase</Text>
          <View style={styles.iconsContainer}>
            <Entypo
              name="emoji-sad"
              size={30}
              onPress={() => handleEmoticonPress('sad')}
              style={[styles.iconButton, selectedEmoticon === 'sad' && styles.selectedEmoticon]}
            />
            <Entypo
              name="emoji-neutral"
              size={30}
              onPress={() => handleEmoticonPress('neutral')}
              style={[styles.iconButton, selectedEmoticon === 'neutral' && styles.selectedEmoticon]}
            />
            <Entypo
              name="emoji-happy"
              size={30}
              onPress={() => handleEmoticonPress('happy')}
              style={[styles.iconButton, selectedEmoticon === 'happy' && styles.selectedEmoticon]}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
              SUBMIT
            </Button>
            <Button mode="outlined" onPress={onDismiss} style={styles.homeButton}>
              GO BACK
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    maxHeight: 474,
    width: 343,
    alignSelf: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
  },
  subText2: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  underline: {
    width: '40%',
    height: 1,
    backgroundColor: '#C89E79',
    marginTop: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: 15,
  },
  iconButton: {
    borderRadius: 50,
    color: 'black',
  },
  selectedEmoticon: {
    color: '#C89E79', 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  submitButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#C89E79',
    borderRadius: 8,
  },
  homeButton: {
    flex: 1,
    marginLeft: 10,
    borderColor: '#C89E79',
    borderRadius: 8,
  },
});

export default ModalReq;
