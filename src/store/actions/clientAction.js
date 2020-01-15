import {ADD_CLIENTS, LOAD_CLIENTS} from '../types'
import * as FileSystem from 'expo-file-system';
import {DB} from "../../db";

export const loadClients = () => {
    return {
        type: LOAD_CLIENTS,
            payload: []
    }
    // return async dispatch => {
    //     const posts = await DB.getClients();
    //     dispatch({
    //         type: LOAD_CLIENTS,
    //         payload: posts
    //     })
    // }
};

export const addClient = client => {
// export const addClient = client => async dispatch => {

   // try {
   //      await FileSystem.moveAsync({
   //          to: newPath,
   //          from: client.img
   //      })
   // } catch (e) {
   //     console.log('Error:', e)
   // }
   //
   //  const payload = { ...client, img: newPath};
   //  payload.id = await DB.createClient(payload);

    client.id = Date.now().toString();
    return {
        type: ADD_CLIENTS,
        payload: client
    }

    // dispatch({
    //     type: ADD_CLIENTS,
    //     payload: client
    // })
};