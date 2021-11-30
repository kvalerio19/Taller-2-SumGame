import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';


export default RandomNumber =({id, number, isSelected, onSelected})=> {

    const handlePress = ()=> {
        console.log(number);
        onSelected(id);
    }

    return(
    <TouchableOpacity onPress={handlePress}>
    <Text style={[styles.random, isSelected && styles.selected]}>{number}</Text>
    </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    random: {
        backgroundColor: '#999',
        width: 100,
        minHeight: 45,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',

    },

    selected:{
        opacity: 0.3,
    },
});