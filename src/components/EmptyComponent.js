import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const EmptyComponent = ({ title }) => (
    <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    emptyText: {
        fontFamily: 'averta-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});