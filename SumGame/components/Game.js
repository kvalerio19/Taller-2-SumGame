import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


const target = 10 + Math.floor(40* Math.random());

export default Game = ({randomNumbersCount})=>(
    <View>
        <Text style={styles.target}>{target}</Text>
    </View>
);


const styles = StyleSheet.create({
    target:{
        fontSize: 40,
        backgroundColor: '#aaa',
        textAlign: 'center',
    }
});