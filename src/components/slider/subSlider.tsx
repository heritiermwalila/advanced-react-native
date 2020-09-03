import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import Button from '../button'

export interface SubSliderProps {
    subtitle: string;
    description: string;
    last?: boolean,
    onPress?: () => void
}

export default function SubSlider({subtitle, description, last, onPress}: SubSliderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button label={last ? "Let's get started": "next"} variant={last ? "primary" : "default"} {...{onPress}}/>
        </View>
    )
}
     
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 44,
        textAlign:'center'
    },
    subtitle: {
        fontSize: 24,
        color: '#0C0D34',
        lineHeight: 34,
        marginBottom:12,
    },
    description: {
        lineHeight: 24,
        color: '#0C0D34',
        fontSize: 16,
        textAlign:'center'
    }
})
