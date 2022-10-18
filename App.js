import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native';
import  Todo  from './Components/Todo';
import HiddenItemsWithActions from './Components/HiddenItemsWithActions';
import { SwipeListView } from 'react-native-swipe-list-view';


export default function App() {
  const [todo , setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);
  const [editTodo, setEditTodo] = useState('');

  function todoInputHandler(){
    setTodoItems((currentTodo) => [
      ...currentTodo,
      { text: todo, key: Math.random().toString() }
    ]);
    setTodo(null);
  };

  function closeRow(rowMap, rowKey){
    if(rowMap[rowKey]){
      rowMap[rowKey].closeRow();
    }
  };

  function deleteRow(rowMap, rowKey){
    closeRow(rowMap, rowKey);
    const newData = [...todoItems];
    const prevIndex = todoItems.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setTodoItems(newData);
  };

  return (
    <View style={styles.container}>   
      <View style={styles.todoListContainer}>

      <View style={styles.todoInputContainer}>
          <TextInput style={styles.input} placeholder='Type here...' value={todo} onChangeText={todo => setTodo(todo)} onSubmitEditing={() => todoInputHandler()} />
          <Pressable onPress={() => todoInputHandler()}>
            <View style={styles.addTodoContainer}>
              <Text style={styles.addIcon}>+</Text>
            </View>
          </Pressable>
      </View>

        <View style={styles.todoListItems}>
          <SwipeListView data={todoItems} renderItem={(data, rowMap) => (
            <Todo text={data.item.text} setEditTodo={setEditTodo} todoItems={todoItems} key={data.item.key}/>
          )} renderHiddenItem={(data, rowMap) => {
            return (
              <HiddenItemsWithActions
              data={data}
              rowMap={rowMap}
              onCloseRow={() => closeRow(rowMap, data.item.key)}
              onDeleteRow={() => deleteRow(rowMap, data.item.key)}
             />
            )
          }}
            leftOpenValue={100}
            rightOpenValue={-70}
            stopLeftSwipe={1}
          />
        </View>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  todoListContainer: {
    paddingTop: 150,
    paddingHorizontal: 20
  },
  todoListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  todoListTitle:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#CBC3E3'
  },
  todoListCounter: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    color: '#CBC3E3',
    alignItems: 'center'
  },
  todoListItems: {
    marginTop: 30
  },
  todoInputContainer:{
    position: 'absolute',
    top: 65,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 60,
    width: 230,
    borderColor: '#A8DFF1',
    borderWidth: 1,
  },
  addTodoContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A8DFF1',
    borderWidth: 1,
  },
  addIcon: {
    color: '#A8DFF1',
    fontSize: 24
  }
});
