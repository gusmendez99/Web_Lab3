import * as types from  './baby.types';
import {v4 as uuidv4} from 'uuid';

export const addBaby = (firstName, lastName) => ({
    type: types.BABY_ADDED,
    payload:{
        id: uuidv4(),
        firstName,
        lastName
    }
});

export const selectBaby = id =>({
        type : types.BABY_SELECTED,
        payload: id
});