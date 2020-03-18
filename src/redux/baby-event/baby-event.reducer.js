import { pull } from 'lodash';  
import * as types from "./baby-event.types";

const babyEvents = (state = {}, action) => {
  switch (action.type) {
    case types.BABY_EVENT_ADDED: {
      if (state[action.payload.babyId]) {
        return {
          ...state,
          [action.payload.babyId]: [
            ...state[action.payload.babyId],
            action.payload.eventId
          ]
        };
      } else {
        return {
          ...state,
          [action.payload.babyId]: [action.payload.eventId]
        };
      }
    }
    case types.BABY_EVENT_DELETED: {
      if((state[action.payload.babyId].length) === 1){
        return {
            ...state,
            [action.payload.babyId]: []
        };    
      }
      else{
          return {
              ...state,
              [action.payload.babyId]: state[action.payload.babyId].filter(b => b !== action.payload.eventId),
          };
      }
    }
    default: {
      return state;
    }
  }
};

export default babyEvents;

export const getBabyEvents = (state, babyId) => state[babyId] ? state[babyId] : [];
