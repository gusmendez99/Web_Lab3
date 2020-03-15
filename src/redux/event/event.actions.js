import * as types from  './event.types';
import {v4 as uuidv4} from 'uuid';

import { EVENT_TYPES } from './event.data'

export const addEvent = (typeId, description, date) => ({
    type: types.EVENT_ADDED,
    payload:{
        id: uuidv4(),
        type: EVENT_TYPES[typeId] ,
        description,
        date
    }
});