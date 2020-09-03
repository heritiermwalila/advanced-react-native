import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Text, View, StyleSheet } from 'react-native'

export interface ButtonProps {
    variant: "default" | "primary";
    label: string;
    onPress?: () => void
}

function Button({label, variant, onPress}: ButtonProps) {

    const backgroundColor = variant == 'primary' ? "#2cb9b0": 'rgba(12, 13, 52, .05)'
    const color = variant == 'primary' ? 'white': '#333'
    return (
        <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
                <Text style={[styles.label, {color}]}>{label }</Text>
        </RectButton>
    )
}

Button.defaultProps = {variant: "default"}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40 
    },
    label: {
        fontSize: 15,
    }
})

export default Button
