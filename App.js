import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import Progress from './pages/Progress';
import ProjectDetails from './pages/ProjectDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Progress">
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ headerShown: false }}
          initialParams={{ searchText: '' }}
        />
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} options={{ headerShown: false }}/>
        {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },
  dropbtn: {
    paddingHorizontal: 16,
  },
  dropbtnText: {
    color: 'black', // Change text color to black
  },
  dropdownContent: {
    position: 'absolute',
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
