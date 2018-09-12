import { combineReducers } from 'redux'
import rootSaga from '../sagas'
import configureStore from '../store'

import authReducer from './auth'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  auth: authReducer,
})

export default (initialState) => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga, initialState)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })

    })
  }
  return store
}
