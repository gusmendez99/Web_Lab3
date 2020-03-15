import { omit } from "lodash";

import * as types from "./baby-event.types";

const eventsToBaby = (state = {}, action) => {
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
      return {
        ...state,
        [action.payload.babyId]: omit(
          action.payload.babyId,
          action.payload.eventId
        )
      };
    }
    default: {
      return state;
    }
  }
};

export default eventsToBaby;

export const getBabyEvents = (state, babyId) => state[babyId];
