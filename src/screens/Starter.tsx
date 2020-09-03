import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Slider from '../components/slider';
import {useValue, onScrollEvent, interpolateColor} from 'react-native-redash'
import SubSlider from '../components/slider/subSlider';
import Animated, { multiply } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window')

const slides = [
    {title: 'Relax', color: '#BFEAF5', subtitle:"Find your outfits", description: "Confused about your outifs? Don't worry! Find the best outfits here"},
    {title: 'Playful', color: '#BEECC4', subtitle:"Hear it first, wear it first", description: "Hating clothes in your wardrobe? Explore hundrends of Outfit idea"},
    {title: 'Excentric', color: '#FFE4D9', subtitle:"Your style, your way", description: "Create  your individual and unique and look amazing everyday"},
    {title: 'Funky', color: '#FFDDDD', subtitle:"", description: ""},
]

export default function Starter(){
    const scroll = useRef<Animated.ScrollView>(null)
    const x = useValue(0)
    const onScroll = onScrollEvent({x})

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i)=>i*width),
        outputRange: slides.map(slide=>slide.color)
    })
    return <View style={styles.container}>
                <Animated.View style={[styles.sliderContainer, {backgroundColor}]}>
                    <Animated.ScrollView 
                        ref={scroll}
                        horizontal 
                        snapToInterval={width} 
                        decelerationRate="fast" 
                        showsHorizontalScrollIndicator={false} 
                        bounces={false}
                        scrollEventThrottle={1}
                        {...{onScroll}}
                        >
                            {
                                slides.map(({title}, index) => (<Slider key={index} {...{title}} right={!!(index % 2) }/>))
                            }
                        {/* <Slider label="Relax" />
                        <Slider label="Playful" right/>
                        <Slider label="Excentric"/>
                        <Slider label="Funky" right/> */}
                    </Animated.ScrollView>
                </Animated.View>
                <View style={styles.footer}>
                    <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}/>
                    <Animated.View style={[styles.footerContent, {width: width * slides.length, flex: 1, transform: [{translateX: multiply(x, -1)}]}]}>
                        {
                            slides.map(({subtitle, description}, index) => (<SubSlider key={index} {...{subtitle, description}} last={index === slides.length - 1} onPress={()=>{
                                scroll.current ? scroll.current.getNode().scrollTo({x: width * (index + 1), animated: true}) : null
                            }}/>))
                        }
                    </Animated.View>
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
    footerContent: {
        backgroundColor: 'white', 
        borderTopLeftRadius:75, 
        flexDirection: 'row',
        textAlign: 'center'
    }

})