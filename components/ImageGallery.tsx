import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ImageGallery: React.FC = () => {
  const images = [
    { source: require('../assets/carne.jpg'), name: 'Platillo 1' },
    { source: require('../assets/carne2.jpg'), name: 'Platillo 2' },
    { source: require('../assets/carne3.jpg'), name: 'Platillo 3' },
    { source: require('../assets/carne4.jpg'), name: 'Platillo 4' },
    { source: require('../assets/carne5.jpg'), name: 'Platillo 5' },
    { source: require('../assets/carne6.jpg'), name: 'Platillo 6' },
    { source: require('../assets/carne7.jpg'), name: 'Platillo 7' },
    { source: require('../assets/carne8.jpg'), name: 'Platillo 8' },
    { source: require('../assets/carne9.jpg'), name: 'Platillo 9' },
    { source: require('../assets/carne10.jpg'), name: 'Platillo 10' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {images.slice(0, 5).map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={image.source} />
            <Text style={styles.imageText}>{image.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {images.slice(5).map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={image.source} />
            <Text style={styles.imageText}>{image.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 40,
  },
  imageText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ImageGallery;
