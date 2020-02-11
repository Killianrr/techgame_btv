import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';




export default function App() {
  return (
    <View style={styles.container}>
    
    <Image style={{width: 300, height: 300, marginBottom:50}} source={require('../images/logo_profil.jpg')} />


    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black', marginTop: 8,marginRight:10 }}>
            Nom :
      </Text>

      <TextInput
        style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
        onChangeText={text => onChangeText(text)}
        value={"Moreira"}
      /> 
    </View>


    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black', marginTop: 8,marginRight:10 }}>
            Prenom :
      </Text>

      <TextInput
        style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
        onChangeText={text => onChangeText(text)}
        value={"Nicolas"}
      /> 
    </View>


    
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black', marginTop: 8,marginRight:10 }}>
            Mail :
      </Text>

      <TextInput
        style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
        onChangeText={text => onChangeText(text)}
        value={"nico.moreira@hotmail.fr"}
      /> 
    </View>

    
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black', marginTop: 8,marginRight:10 }}>
            Mot de passe :
      </Text>

      <TextInput
        style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 50 }}
        onChangeText={text => onChangeText(text)}
        value={"**********"}
      /> 
    </View>


    <Button  color="#24c11a"
          title="Modifier"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
       




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
  inputWrap: {
    borderColor: "red",
  },
});
