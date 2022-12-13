import { compose, createStore, appllyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const middleWares = [logger]
const composeEnhancers = compose(appllyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, middleWares)
