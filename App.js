

import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header'
import TodoItem from './Component/TodoItem';
import AddToDo from './Component/AddToDo';


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

    setTodos((prevTodos) => {
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
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
