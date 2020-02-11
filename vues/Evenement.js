import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={require('../images/logo.png')} /> 
    


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
