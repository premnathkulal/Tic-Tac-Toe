import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const  Instructions = () => {
  return (
    <View>
        <Text style={styles.textHeading}>RULES FOR TIC-TAC-TOE</Text>
        <Text style={styles.text} >1. The game is played on a grid that's 3 squares by 3 squares.</Text>
        <Text style={styles.text} >2. You are X, your friend (or the computer (This feature coming soon) is O. Players take turns putting their marks in empty squares.</Text>
        <Text style={styles.text} >3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</Text>
        <Text style={styles.text} >4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textHeading: {
        color: "blue",
        fontSize: 28, 
        fontWeight: "bold", 
        paddingStart: 20, 
        paddingTop: 50
    },
    text:{
        color: "black", 
        fontSize: 18, 
        paddingStart: 12, 
        paddingTop: 10
    }
});

export default Instructions;