import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';


export default class PrimeiroProjeto extends Component{


  apertouBotao(){
    Alert.alert('Você apertou ')
  }

  render(){

      return(

        <View style={{padding:30}}>
          <TextInput style={styles.input} placeholder='Qual seu nome?'></TextInput>

          <Button title='Aperte aqui' onPress={this.apertouBotao}></Button>
          <Text style={styles.texto}>{this.state.texto}</Text>
        </View>
      );
  }
}



const styles = StyleSheet.create({
  input:{
    height:40,
    borderWidth:1,
    norderColor:'#000000',
    padding:10
  },
  texto:{
    fontSize: 20,
    padding: 20
  }
});
