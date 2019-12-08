import {ADD_CLIENTS, LOAD_CLIENTS} from "../types";

const initialState = {
    allClients: []
};

export const clientReducer = (state = initialState, action) => {
    // console.log('action',action)
    // console.log('action.type',action.type)
    // console.log('action.payload',action.payload)
    switch (action.type) {
        case LOAD_CLIENTS:
            return {
                ...state,
                allClients: action.payload
            };
        case ADD_CLIENTS:
            return {
                ...state,
                allClients: [{ ...action.payload}, ...state.allClients]
            };
        default:
            return state;
    }
};