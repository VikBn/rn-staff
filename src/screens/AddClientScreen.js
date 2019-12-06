import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addClient } from '../store/actions/clientAction';

export const AddClientScreen = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const saveHandler = () => {
        const client = {

        };

        dispatch(addClient(client))
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        Client Profile Details
                    </Text>
                    <Image
                        style={{width: 150, height: 150, marginBottom: 10}}
                        source={{
                            uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjY4p6knqHmAhXPfZoKHco_ClUQjRx6BAgBEAQ&url=http%3A%2F%2Fstella.od.ua%2Ffitness&psig=AOvVaw3sxB1o9OtinkzvXIi6GdNf&ust=1575728982920701'
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setText}
                        placeholder='Enter First Name'
                        value={text}
                    />
                    <Button title='Create Account' onPress={saveHandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
};

AddClientScreen.navigationOptions = {
    headerTitle: 'Add New Client'
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'averta-regular',
        color: 'gray',
        marginVertical: 10
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    textInput: {
        padding: 10,
        marginBottom: 10
    }
});