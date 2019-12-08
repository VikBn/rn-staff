import React from 'react';
import { View, Text, StyleSheet, Button, FlatList} from "react-native";
import { ClientItem } from "./ClientItem";
import { EmptyComponent } from '../EmptyComponent';

export const ClientList = ({data, onOpen, onAdd}) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                ListEmptyComponent={
                    <EmptyComponent title="There are no Clients yet.." />
                }
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => {
                    return <ClientItem key={item.id} item={item} onOpen={ onOpen } />
                }}
            />
            <View>
                <Button style={styles.buttonAdd} onPress={onAdd} title='Add Client'/>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    buttonAdd: {
        marginTop: 16
    }
});