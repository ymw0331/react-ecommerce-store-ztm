import { compose, createStore, appllyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const middleWares = 

export const store = createStore(rootReducer)
