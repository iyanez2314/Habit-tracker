import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const HiddenItemsWithActions = (props) => {
    const { data, rowMap, onCloseRow, onDeleteRow, onPressItem } = props;

    

    return(
        <View style={styles.actionsContainer}>
            <View style={styles.btnContainer}>
                {/* <TouchableOpacity style={styles.closeBtn} onPress={onCloseRow}>
                    <Icon style={styles.closeIcon} name="return-up-back" size={17} color='#fff'/>
                </TouchableOpacity> */}
            <TouchableOpacity style={styles.deleteBtn} onPress={onDeleteRow}>
                <Icon style={styles.deleteIcon} name="trash-outline" size={17} color='#fff'/>
            </TouchableOpacity>
            </View>
        </View>
    )
};

export default HiddenItemsWithActions;

const styles = StyleSheet.create({
    actionsContainer: {
        backgroundColor: '#A8DFF1',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 8
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    deleteIcon: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
        
    },
    closeIcon: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});