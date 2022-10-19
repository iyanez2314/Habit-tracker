import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Button} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import Checkmark from 'react-native-vector-icons/Ionicons';

const Todo = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState('');
    const [isOpacity, setIsOpacity] = useState(false);
    const {text, setEditTodo, todoItems} = props;

    function UpdatedItem(){
        setIsEditing(false);
    };

    function editPressed(){
        setIsEditing(true);
    };

    function toggleStrikeThrough(){
        setIsOpacity(!isOpacity);
    };

    
    return (
        <View style={styles.todoItems}>
                <View style={styles.itemsLeft}>
                    <Pressable style={styles.square} onPress={toggleStrikeThrough}>
                        {
                            isOpacity ? (
                                <Checkmark style={styles.Checkmark} name="ios-checkmark" color='#EA7351' size={25}/>
                            ) : (
                                <Checkmark style={[styles.Checkmark, {display: 'none'}]} name="ios-checkmark" color='#EA7351'/>
                            )
                        }
                    </Pressable>
                    {
                        isEditing ? (
                            <TextInput
                            style={styles.updatingTodoText}
                            onChangeText={(text) => setEditedTodo(text)}
                            defaultValue={ editedTodo !== text ? editedTodo : text }
                             />
                        ) : (
                            <Pressable style={styles.todoText} onPress={toggleStrikeThrough}>
                                <Text style={[styles.text, {textDecorationLine: isOpacity ? 'line-through' : 'none', textDecorationColor: '#EA7351'}]}>{editedTodo.length > 0 ? editedTodo : text }</Text>
                            </Pressable>
                            
                        )
                    }
                </View>

                {
                           isEditing ? (
                        <View style={styles.editButtons}>
                            <Pressable onPress={UpdatedItem}>
                                <Icon style={styles.deleteIcon} name="ios-save-outline" size={17} color='#fff'/>
                            </Pressable>
                        </View>
                           ) : (
                        <View style={styles.editButtons}>      
                            <Pressable onPress={editPressed}>
                                <EditIcon name='mode-edit' size={17} color='#fff' />
                            </Pressable>
                        </View> 
                           )
                       }
        </View>
    
    )
}
export default Todo;

const styles = StyleSheet.create({
    todoItems:{
        backgroundColor: '#F8CA6D',
        padding: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 15,
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    todoText: {
        maxWidth: '80%',
        color: 'white',
    },
    text: {
       color: 'white',
       fontSize: 16
    },
    Checkmark: {
        paddingRight: 6,
    },
    updatingTodoText: {
        maxWidth: '80%',
        color: '#83D5B2',
        fontSize: 16,
        backgroundColor: '#A8DFF1',
        width: '80%',
        color: 'white'
    }
})



