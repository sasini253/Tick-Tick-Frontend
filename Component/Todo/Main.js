
import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View ,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './Component/Header'
import TodoItem from './Component/TodoItem';
import AddToDo from './Component/AddToDo';
import Sandbox from './Component/Sandbox';


export default function App() {

  const[todos,setTodos] = useState([
      {text:'Buy coffee',key:'1'},
      {text:'Create an app',key:'2'},
      {text:'Play on the switch',key:'3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {

      return prevTodos.filter(todo => todo.key!= key);
    });
  }
  const submitHandler = (text) =>{
    if(text.length >3){
          
      setTodos((prevTodos) => {
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ];
      });
    }   else{
      Alert.alert('OOPS!' , 'Todo must be over 3 characters long ')
    }    
  }

  return (
    //<Sandbox></Sandbox>
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
       console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <Header />
      <View styles={styles.content}>
         <AddToDo submitHandler={submitHandler}/>
        <View styles={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  ontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
