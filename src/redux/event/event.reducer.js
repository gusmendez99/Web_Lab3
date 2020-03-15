import * as types from './event.types'

const event = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id] : action.payload
            };
        }
        default:
            return state;
    }
};

export default event;

export const getEvent = (state, id) => state[id];