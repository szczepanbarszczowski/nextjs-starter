import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default (rootReducer, rootSaga, initialState={}) => {
  /* ------------- Assemble Middleware ------------- */
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]))

  // kick off root sagas
  let sagasManager //= sagaMiddleware.run(rootSaga)

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
    sagasManager = store.sagaTask
  }

  // run the rootSaga initially
  store.runSagaTask()

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}
