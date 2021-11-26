import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


const target = 10 + Math.floor(40* Math.random());



export default Game = ({randomNumbersCount})=>{
 const randomNumbers = Array.from({length: randomNumbersCount})
 .map(()=> 1 + Math.floor(10 * Math.random()));
 const target = randomNumbers.slice(0, randomNumbersCount - 2)
 .reduce((acc, cur)=> acc+cur,0);

    return(
    <View>
        <Text style={styles.target}>{target}</Text>
        {randomNumbers.map((randomNumber, index)=> (
        <Text key={index}>{randomNumber}</Text>
        ))}
    </View>
    );
    };


const styles = StyleSheet.create({
    target:{
        fontSize: 40,
        backgroundColor: '#aaa',
        textAlign: 'center',
    }
});