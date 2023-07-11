import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterButton: React.FC = () => {
  const navigation = useNavigation();

  const handleList = () => {
    navigation.navigate('ListSaucer');
  };

  const handleNewOrder = () => {
    navigation.navigate('Order');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleList}>
        <Text style={styles.buttonText}>Listar platillos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainerRight} onPress={handleNewOrder}>
        <Text style={styles.buttonText}>New Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonContainerRight: {
    backgroundColor: '#f4511e',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FooterButton;
