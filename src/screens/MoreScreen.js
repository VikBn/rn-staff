import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MoreScreen = () => {
    return (
        <View style={styles.center}>
            <Text>
                MoreScreen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
});