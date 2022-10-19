import {View, Text, StyleSheet} from 'react-native';

const RandomSaying = () => {
  return  (
    <View style={styles.TextContainer}>
        <Text style={styles.text}>"Habits are the compound interest of self-improvement."</Text>
        <Text style={styles.text}>- James Clear</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    TextContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.4,
        position: 'relative',
        top: 225
    },
    text: {
        fontSize: 16,
        color: '#83D5B2'
    }
});

export default RandomSaying