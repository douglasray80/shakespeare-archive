import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducer'

const middlewares = [thunk]
const enhancers = []

const devToolsExtension = window.devToolsExtension
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension())
}

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)
const store = createStore(rootReducer, persistedState, composedEnhancers)

store.subscribe(() => {
  localStorage.setItem('APP_STATE', JSON.stringify(store.getState()))
})

export default store
