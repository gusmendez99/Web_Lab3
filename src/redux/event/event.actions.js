import * as types from  './event.types';

export const addEvent = (id, type, description, date) => ({
    type: types.EVENT_ADDED,
    payload:{
        id,
        type,
        description,
        date
    }
});