import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const StoreScreen = () => {
    return (
        <View style={styles.center}>
            <Text>
                StoreScreen
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