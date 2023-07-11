import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import TableSaucer from '../components/TableSaucer';

const ListSaucer: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderStart />
      <TableSaucer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6BD39',
  },
});

export default ListSaucer;
