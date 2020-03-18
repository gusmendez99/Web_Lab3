import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import babies, * as babySelectors from './baby/baby.reducer';
import events, * as eventSelectors from './event/event.reducer';
import babyEvents, * as babyEventsSelectors from './baby-event/baby-event.reducer';

const rootReducer = combineReducers({
    babies,
    events,
    babyEvents
})

const persistConfig = {
    key: 'root',
    storage
  }

export default persistReducer( persistConfig, rootReducer);


export const getBaby = (state, id) => babySelectors.getBaby(state.babies, id);
export const getBabies = state => babySelectors.getBabies(state.babies);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.babies);

export const getEvent = (state, id) => eventSelectors.getEvent(state.events, id)
export const getEventTypes = () => eventSelectors.getEventTypes();

export const getBabyEvents = (state, babyId) => babyEventsSelectors.getBabyEvents(state.babyEvents, babyId);