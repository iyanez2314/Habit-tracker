<Text>What is the plan for today?</Text>
      <View style={styles.textInputContainer}>
        <TextInput 
          placeholder='Walk the dog, Go to the post office, Go for a run..'
          onChangeText={todoInputHandler}
        />
        <Button title='add new todo' onPress={addTodoHandler}/>
      </View>
      
      <View style={styles.todoContainer}>
      {todoList.map((todo) => <Text style={styles.todoItems} key={todo.id}>{todo.text}</Text>)}
      </View>


const [enteredTodos, setTodos] = useState(''); // We will initialize a empty string since the todo at this time is empty
const [todoList, setTodoList] = useState([]); // This todoList will hold all the todos we need to get done;

 function todoInputHandler(enteredTodo){ // This will fetch what the user has input into the text area
  setTodos(enteredTodo); // here we are setting the value of what we are receiving in the TextInput tag and saving it to our state
 };

 function addTodoHandler(){ // This will be fired when the user has input a new todo
  setTodoList((currentTodo) => [
    ...currentTodo, // we use the spread operator keep all the todos we might have already in the array
    {text: enteredTodos, id: Math.random().toString()} // here we are saving the currentTodo we have and saving it into an object.
  ]);
 };

 // <Pressable onPress={() => deleteTodoHandler(itemData.index)}>
              //   <Todo  text={itemData.item} />
              // </Pressable>