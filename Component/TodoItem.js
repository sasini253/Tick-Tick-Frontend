import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem ({item}){


    return(
  
  <TouchableOpacity>
      <Text style={style.item}>{item.text}</Text>
  </TouchableOpacity>

    )
}

 const style =StyleSheet.create({

    item:{
   padding:16,
   marginTop:16,
   boredColor:'#bbb',
   borderWidth:1,
   borderStyle:'dashed',
   borderRadius:10


    }

 })
