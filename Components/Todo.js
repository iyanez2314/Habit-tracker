import {View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable} from 'react-native';
import { useState } from 'react';

const Todo = (props) => {
    return (
        <View style={styles.todoItems}>
                <View style={styles.itemsLeft}>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>
                        <Text style={styles.todoText}>{props.text}</Text>
                </View>
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
    circular: {
        width: 12,
        height: 12,
        borderColor: '#F5F5F5',
        borderWidth: 2,
        borderRadius: 5
    }
})



