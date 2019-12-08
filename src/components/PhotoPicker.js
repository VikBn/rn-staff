import React, { useState } from 'react';
import {Button, Image, StyleSheet, Alert, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askForPermission() {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    );
    if(status !== 'granted') {
        Alert.alert('Error', `You don't give a permission to create a photo`)
        return false;
    }
    return true;
}

export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await askForPermission();

        console.log('img');

        if(!hasPermissions) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        });

        console.log(img);

        setImage(img.uri);
        onPick(img.uri)
    };

    return (
        <View style={styles.wrapper}>
            <Button title='Add a Photo' onPress={takePhoto} />
            {image && <Image style={styles.image} source={{uri: image}} /> }
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: 160,
        height: 160
    }
});