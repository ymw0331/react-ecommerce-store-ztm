import { compose, createStore, appllyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const middleWares = [logger]
const composedares))

export const store = createStore(rootReducer, undefined, middleWares)
