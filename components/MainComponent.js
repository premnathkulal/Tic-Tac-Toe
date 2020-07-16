import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from './TictactoeComponent';

const Stack = createStackNavigator();

const  Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#512DA8'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen 
          name="Tic Tac Toe" 
          component={Game}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;