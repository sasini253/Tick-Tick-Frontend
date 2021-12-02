import React from 'react';
import { StyleSheet, Text, TextInput, View,FlatList } from 'react-native';

export default function Header(){

    return(
        <View style ={styles.header}>

            <Text style = {styles.title}>My Todos</Text>
        </View>


    )

}

const styles = StyleSheet.create({

    header: {
        height: 80,
        width:420,
        paddingTop: 30,
        backgroundColor: 'coral'
    },

     title:{
  textAlign: 'center',
  color:'ffff',
  fontSize:20,
  fontWeight:'bold'

     }

});