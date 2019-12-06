import {ADD_CLIENTS, LOAD_CLIENTS} from '../types'
import {DATA} from "../../data";

export const loadClients = () => {
    return {
        type: LOAD_CLIENTS,
        payload: DATA
    }
};

export const addClient = client => {
    client.id = Date.now().toString();

    return {
        type: ADD_CLIENTS,
        payload: client
    }
};