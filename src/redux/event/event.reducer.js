import * as types from './event.types'
import omit from 'lodash/omit'

import { EVENT_TYPES } from './event.data'

const event = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id] : action.payload
            };
        }
        case types.EVENT_DELETED: {
            return omit(state, action.payload);
        }
        default:
            return state;
    }
};

export default event;

export const getEvent = (state, id) => state[id];
export const getEventTypes = () => EVENT_TYPES;