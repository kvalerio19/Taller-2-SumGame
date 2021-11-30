import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default RandomNumber =({number})=> (
    <Text style={styles.random}>{number}</Text>
);


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
});