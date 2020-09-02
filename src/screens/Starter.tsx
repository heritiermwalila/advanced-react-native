import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '../components/slider';

const {width, height} = Dimensions.get('window')

export default function Starter(){
    return <View style={styles.container}>
                <View style={styles.sliderContainer}>
                    <ScrollView horizontal snapToInterval={width} decelerationRate="fast" showsHorizontalScrollIndicator={false} bounces={false}>
                        <Slider label="Relax" />
                        <Slider label="Playful" right/>
                        <Slider label="Excentric"/>
                        <Slider label="Funky" right/>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}}/>
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
        backgroundColor: 'cyan',
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    },

})