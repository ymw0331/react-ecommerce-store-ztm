import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root', //persist starting from roor level
  storage,
  blacklist: ['user'] //block user persist to avoid conflic with local storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// if not in developmnet, dont show logger
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
)

const thunkMiddleware = (store) => (next) => (action) => {
if(type)
}

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)