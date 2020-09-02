import React from 'react'
import { View, Text, Dimensions } from "react-native";

const {width} = Dimensions.get('window')

export interface SliderProps {
    label: string;
    right?: boolean;
}


export default function Slider({label, right}: SliderProps){
    return <View style={{width}}>
                <Text>{label}</Text>
            </View>
}