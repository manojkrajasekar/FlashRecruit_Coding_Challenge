import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import { Contacts } from '../state/reducers/contacts.reducer';

const store = createStore(
    combineReducers({
        contacts: Contacts
    })
    , applyMiddleware(createLogger(), thunk));

console.log(store.getState());
export default store;