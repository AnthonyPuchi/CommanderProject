import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import CategoryButtons from '../components/CategoryButtons';
import ImageGallery from '../components/ImageGallery';

const Order: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderStart />
      <View style={styles.orderContent}>
        <View style={styles.orderCategoryContainer}>
          <CategoryButtons />
        </View>
        <View style={styles.imageGalleryContainer}>
          <ImageGallery />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6BD39',
  },
  orderContent: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 50,
    marginLeft: 500,
  },
  orderCategoryContainer: {
    paddingVertical: 5,
  },
  imageGalleryContainer: {
    flex: 1,
    marginTop: 10,
  },
});

export default Order;
