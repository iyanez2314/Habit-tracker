import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Button} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EditIcon from 'react-native-vector-icons/MaterialIcons';

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
        setIsOpacity(true);
    };
    
    return (
        <View style={styles.todoItems}>
                <View style={styles.itemsLeft}>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>
                    {
                        isEditing ? (
                            <TextInput
                            style={styles.todoText}
                            onChangeText={(text) => setEditedTodo(text)}
                            defaultValue={text}
                             />
                        ) : (
                            <Pressable style={styles.todoText} onPress={toggleStrikeThrough}>
                            <Text style={[styles.text, {textDecorationLine: isOpacity ? 'line-through' : 'none'}]}>{editedTodo.length > 0 ? editedTodo : props.text }</Text>
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
        backgroundColor: '#3D7C98',
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
        backgroundColor: '#F5F5F5',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    todoText: {
        maxWidth: '80%',
        color: 'white'
    },
    text: {
       color: 'white'
    }
})



