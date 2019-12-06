import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const MainScheduleScreen = ({navigation}) => {
    const goToStaff = () => {
        navigation.navigate('Client')
    };

    return (
        <View style={styles.center}>
            <Text>
                MainScheduleScreen
            </Text>
        </View>
    )
};

MainScheduleScreen.navigationOptions = {
    headerTitle: 'Schedule'
};

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
});