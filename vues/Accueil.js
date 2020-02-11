import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
    
  return (
      
    <View style={styles.container}>
    <Image source={require('../images/logo.png')} /> 
    

      <TextInput
      style={{ height: 40, width: 200, borderBottomColor: 'gray', borderBottomWidth: 1,margin: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Identifiant"}
    />
    

    <TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Mot de passe"}
      
    />


    <Button  color="#24c11a"
          title="Se Connecter"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        <Text style={{color: 'black', marginTop: 20 }}
              onPress={() => Linking.openURL('http://google.com')}>
          Mot de passe oublié
        </Text>

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
