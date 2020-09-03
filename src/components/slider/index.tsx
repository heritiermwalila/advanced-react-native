import React from 'react'
import { View, Text, Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export const SLIDE_HEIGHT = 0.61 * height

export interface SliderProps {
    title: string;
    subtitle?: string;
    description?: string;
    right?: boolean;
}


export default function Slider({title, subtitle, description, right}: SliderProps){
    return <View style={styles.container}>
                <View style={{...styles.titleContainer, transform: [
                                {translateY: (SLIDE_HEIGHT - 100) / 2},
                                {translateX: right ? width / 2 - 50 : -width / 2 + 50},
                                {rotate: right ? '-90deg' : '90deg'}
                            ]}}
                >
                <Text style={styles.title}>{title}</Text>
                    
                </View>
            </View>
}

const styles = StyleSheet.create({
    container: {
        width: width
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        
    },
    title:{
        fontSize: 80,
        fontWeight: 'bold',
        lineHeight: 80,
        color: '#333'
    }
})