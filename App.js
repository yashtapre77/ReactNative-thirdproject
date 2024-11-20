import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import AsteroidSearchScreen from './screens/AsteroidSearchScreen.js';
import AsteroidDetailsScreen from './screens/AsteroidDetailsScreen';
import { styles } from './styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0A0A0F',
            },
            headerTintColor: '#00FF9D',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Search" 
            component={AsteroidSearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Details" 
            component={AsteroidDetailsScreen}
            options={{
              title: 'Asteroid Details',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;