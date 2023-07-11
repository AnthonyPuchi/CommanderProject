import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderStart from '../components/HeaderStart';
import CategoryButtons from '../components/CategoryButtons';
import ImageGallery from '../components/ImageGallery';
import FooterButton from '../components/FooterButton';


const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleAddPress = () => {
    navigation.navigate('NewSaucer');
  };

  return (
    <View style={styles.container}>
      <HeaderStart />
      <CategoryButtons onPress={handleAddPress} />
      <ImageGallery />
      <FooterButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6BD39',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Home;
