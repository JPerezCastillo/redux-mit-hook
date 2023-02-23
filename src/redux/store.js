import {combineReducers,applyMiddleware,legacy_createStore as createSore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import pokeReducer from './pokereducer';


// store macht eine zusammenfasung (einführt) von action und reduce
const rootReducer = combineReducers({
    pokemones:pokeReducer,
})

//createSore hat nicht funktionert deswegen nach dok benutze ich legacy_createSore

export default function generateStore() {

  const store = createSore(rootReducer,composeWithDevTools(
         applyMiddleware(thunk) ) )
//  thunk arbeite mit dem Promise
    return store;
}