import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RandomNumber from './RandomNumber';


const target = 10 + Math.floor(40* Math.random());



export default Game = ({randomNumbersCount})=>{
 const randomNumbers = Array.from({length: randomNumbersCount})
 .map(()=> 1 + Math.floor(10 * Math.random()));
 const target = randomNumbers.slice(0, randomNumbersCount - 2)
 .reduce((acc, cur)=> acc+cur,0);

    return(
    <View>
        <Text style={styles.target}>{target}</Text>
        <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index)=> (
        <RandomNumber key={index} number={randomNumber}/>
        ))}
        </View>
    </View>
    );
    };


const styles = StyleSheet.create({
    target:{
        fontSize: 40,
        backgroundColor: '#aaa',
        textAlign: 'center',
    },
    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",

    },
    
});