import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Home from './screens/Home';
import ListSaucer from './screens/ListSaucer';
import Order from './screens/Order';
import NewSaucer from './screens/NewSaucer';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewSaucer" component={NewSaucer} />
        <Stack.Screen name="ListSaucer" component={ListSaucer} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

