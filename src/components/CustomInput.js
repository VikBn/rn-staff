import React, {PureComponent} from "react";
import {TextInput, View, StyleSheet} from 'react-native'
import { Input } from 'react-native-elements';

export const CustomInput = ({label, placeholder, value, onHandleChange}) => {
    // const [field, meta] = useTextField(label.toLowerCase());
    // const hasError = !!meta.error && !!meta.touched;
    return (
        <View style={styles.root}>
            <Input
                label={label}
                placeholder={placeholder}
                errorStyle={{ color: 'red' }}
                errorMessage='Enter a valid label'
                onChangeText={onHandleChange}
                value={value}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        width: '100%',
        alignSelf: 'center'
    },
    rootWrap: {

    }
});
