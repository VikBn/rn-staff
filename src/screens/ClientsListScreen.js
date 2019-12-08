import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ClientList} from "../components/client/ClientList";
import {loadClients} from "../store/actions/clientAction";
import {DATA} from "../data";

export const ClientListScreen = ({navigation}) => {
    const openProfileHandler = client => {
        navigation.navigate('ClientProfile', {
            clientId: client.id,
            firstName: client.firstName
        })
    };

    const openAddClientHandler = () => {
        navigation.navigate('AddClient')
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadClients())
    },[dispatch]);

    const allClients = useSelector(state => state.client.allClients);

    return <ClientList onAdd={openAddClientHandler} onOpen={openProfileHandler} data={allClients} />
};

ClientListScreen.navigationOptions = {
    headerTitle: 'Search for Clients'
};