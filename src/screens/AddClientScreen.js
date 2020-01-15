import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard, Alert, SafeAreaView
} from 'react-native';
import {CustomInput} from '../components/CustomInput'
import { useDispatch } from 'react-redux';
import { addClient } from '../store/actions/clientAction';
import { PhotoPicker } from "../components/PhotoPicker";

// const MyTextInput = ({ label, ...props}) => {
//     const [field, meta] = useTextField(label.toLowerCase());
//     const hasError = !!meta.error && !!meta.touched;
//
//     return (
//         <>
//             <TextInput error={hasError} label={label} {...field} {...props} />
//             <HelperText type='error' visible={hasError}>
//                 {meta.error}
//             </HelperText>
//         </>
//     )
// };

const useFormik = props => {
    const [values, setValues] = useState(props.initialValues || {});
    const imgRef = useRef();

    const photoPickHandler = uri => {
        imgRef.current = uri;
        setValues(prevValues => ({...prevValues, img: imgRef.current}))
    };

    const handleChange = name => text => {
        setValues(prevValues => ({...prevValues, [name]: text}))
    };

    const handleSubmit = async () => {
        return props.onSubmit(values)
    };

    return { values, setValues, handleChange, handleSubmit, photoPickHandler }
};


export const AddClientScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            img: '',
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: async values => {
            await Alert.alert(JSON.stringify({values,}));
            dispatch(addClient(values));
            navigation.navigate('Main')
        }
    });

    const stuff = formik;

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>
                            Client Profile Details
                        </Text>
                        <PhotoPicker onPick={formik.photoPickHandler} />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={formik.handleChange('firstName')}
                            placeholder='Enter First Name'
                            value={formik.values.firstName}
                        />
                        <TextInput
                            style={styles.textInput}
                            label='Last Name'
                            onChangeText={formik.handleChange('lastName')}
                            placeholder='Enter Last Name'
                            returnKeyType='next'
                            value={formik.values.lastName}
                        />
                        {/*<TextInput*/}
                        {/*    style={styles.textInput}*/}
                        {/*    label='Email Address'*/}
                        {/*    onChangeText={formik.handleChange('email')}*/}
                        {/*    placeholder='Enter Email Address'*/}
                        {/*    keyboardType='email-address'*/}
                        {/*    textContentType='emailAddress'*/}
                        {/*    returnKeyType='next'*/}
                        {/*    value={formik.values.email}*/}
                        {/*/>*/}
                        <CustomInput
                            label='Email Address'
                            placeholder='Enter Email Address'
                            onHandleChange={formik.handleChange('email')}
                            value={formik.values.email}
                        />
                        <Button
                            title='Create Account'
                            onPress={formik.handleSubmit}
                            disabled={!formik.values.firstName}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
    )
};

AddClientScreen.navigationOptions = {
    headerTitle: 'Add New Client',
    tabBarVisible: false
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
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    }
});