import * as types from  './baby-event.types';

export const addBabyEvent = (babyId, eventId) => ({
    type: types.BABY_EVENT_ADDED,
    payload:{
        babyId,
        eventId
    }
});

export const deleteBabyEvent = (babyId, eventId) => ({
    type: types.BABY_EVENT_DELETED,
    payload: {
        babyId,
        eventId
    }
})