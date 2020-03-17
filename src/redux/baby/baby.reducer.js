import { combineReducers } from 'redux';

import * as types from './baby.types';


const order = (state = [], action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            return [...state, action.payload.id];   
        }
        default: {
            return state;
        }
    }
}

const byId = (state = {}, action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id] : action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const selectBaby = (state = null, action) => {
    switch(action.type){
        case types.BABY_SELECTED: {
            return action.payload;
        }
        default:{
            return state
        }
    }
}



const baby = combineReducers({
    byId,
    order,
    selectBaby
});

export default baby;

export const getBaby = (state, id) => state.byId[id];
export const getBabies = state => state.order.map(
    id => getBaby (state, id)
).filter(baby => baby != null)
export const getSelectedBaby = state => state.selectBaby
