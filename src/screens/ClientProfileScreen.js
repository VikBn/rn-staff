import React from 'react';
import { useSelector } from 'react-redux';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const ClientProfileScreen = ({navigation}) => {
    const clientId = navigation.getParam('clientId');
    const client = useSelector(state => state.client.allClients.find(item => item.id === clientId))

    return (
        <ScrollView>
            <View style={styles.center}>
                <View style={styles.imageWrapper}>
                    <Image source={{uri: client.img}} style={styles.image} />
                </View>
                <Text style={styles.subtitle}>
                    Personal Info
                </Text>
                <Text>
                    {client.lastName}
                </Text>
            </View>
        </ScrollView>
    )
};

ClientProfileScreen.navigationOptions = ({navigation}) => {
    const firstName = navigation.getParam('firstName');

    return {
        headerTitle: firstName,
        headerRight: <HeaderButtons title='Menu' HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Menu'
                iconName='md-menu'
                onPress={() => console.log('press menu')}
            />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    imageWrapper: {

    },
    imageBack: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: 164,
        height: 164,
        overflow: 'hidden',
        borderBottomLeftRadius: 80,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80
    },
    subtitle: {
        marginVertical: 16,
        fontFamily: 'averta-light'
    }
});