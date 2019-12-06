import React from 'react';
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from "react-native";

export const ClientItem = ({item, onOpen}) => {
    const {text, img} = item;
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
            <View style={styles.item}>
                <View style={styles.imageWrapper}>
                    <ImageBackground style={styles.image} source={{uri: img}}/>
                </View>
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        alignItems: 'center'
    },
    contentWrapper: {
        marginLeft: 8
    },
    imageWrapper: {
        paddingVertical: 10
    },
    image: {
        height: 30,
        width: 30,
        overflow: 'hidden',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    title: {
        fontFamily: 'averta-regular'
    }
});