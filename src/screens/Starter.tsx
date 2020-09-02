import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '../components/slider';
import {useValue, onScrollEvent, interpolateColor} from 'react-native-redash'

const {width, height} = Dimensions.get('window')

const slides = [
    {label: 'Relax', color: '#BFEAF5'},
    {label: 'Playful', color: '#BEECC4'},
    {label: 'Excentric', color: '#FFE4D9'},
    {label: 'Funky', color: '#FFDDDD'},
]

export default function Starter(){
    const x = useState(new Animated.Value(0))[0]
    const onScroll = (e:any) => {
        x.setValue(e.nativeEvent.contentOffset.x)
        
    }
    const backgroundColor = x.interpolate({
        inputRange: slides.map((_, i)=>i*width),
        outputRange: slides.map(slide=>slide.color)
    })
    return <View style={styles.container}>
                <Animated.View style={[styles.sliderContainer, {backgroundColor}]}>
                    <Animated.ScrollView 
                        horizontal 
                        snapToInterval={width} 
                        decelerationRate="fast" 
                        showsHorizontalScrollIndicator={false} 
                        bounces={false}
                        {...{onScroll}}
                        >
                        <Slider label="Relax" />
                        <Slider label="Playful" right/>
                        <Slider label="Excentric"/>
                        <Slider label="Funky" right/>
                    </Animated.ScrollView>
                </Animated.View>
                <View style={styles.footer}>
                    <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}/>
                    <View style={{backgroundColor: 'white', borderTopLeftRadius:75, flex: 1}}>

                    </View>
                </View>
            </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    sliderContainer: {
        height: 0.61 * height,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    },

})