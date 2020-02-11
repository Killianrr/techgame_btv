import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';




export default function App() {
  return (
    <View style={styles.container}>

    <Image source={require('../images/logo.png')} /> 
      <TextInput
      style={{ height: 40, width: 200, borderBottomColor: 'gray', borderBottomWidth: 1,margin: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Pseudo"}
    />

    <TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Nom"}
      
    />

<TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 10 }}
      onChangeText={text => onChangeText(text)}
      value={"Prénom"}
      
    />
        <Text style={{color: 'black', marginTop: 10, paddingRight: 80,marginBottom: 10 }}
              onPress={() => Linking.openURL('http://google.com')}>
          Date de naissance
        </Text>

<DatePicker
        style={{width: 200}}
        date={"17-01-2020"}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="1950-01-01"
        maxDate="17-01-2020"
        confirmBtnText="Ok"
        cancelBtnText="Annuler"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // source pour le truc de date : https://www.npmjs.com/package/react-native-datepicker
        }}

      />

<TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20, marginTop: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Mail"}
      
    />

<TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Mot de passe"}
      
    />

<TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      onChangeText={text => onChangeText(text)}
      value={"Confirmation du mot de passe"}
      
    />

    <Button  color="#24c11a"
          title="Valider"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        <Text style={{color: 'black', marginTop: 20 }}
              onPress={() => Linking.openURL('http://google.com')}>
          Retourner à l'identification
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
