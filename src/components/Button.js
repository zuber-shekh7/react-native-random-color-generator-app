import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const Button = ({title, btnColor, btnTextColor, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, {backgroundColor:btnColor, color:btnTextColor}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        color: "red",
        padding:20,
        fontSize: 24,
        borderRadius: 20,
        backgroundColor: "#000",
        borderColor: "#000",
        fontWeight: "bold",
        width: 200
    }
})

export default Button
