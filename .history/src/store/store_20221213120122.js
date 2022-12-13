import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  console.log('type:', action.type)
  console.log('payload:', action.payload)
  console.log('currentState:', store.getState())
  next(action)
  console.log('next state: ', store.getState())
}

const persistConfig = {
  key: 'root', //persist starting from roor level
  storage,
  blacklist: ['user']
}


const middleWares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
