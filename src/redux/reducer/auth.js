import { createReducer } from '../../services/reduxHelpers'
import { authTypes } from '../actions/authActions'

/* ------------- Initial State ------------- */

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null
}

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [authTypes.GET_AUTH_ATTEMPT]: () => ({
    isLoading: true,
  }),
  [authTypes.GET_AUTH_ATTEMPT]: () => ({
    isLoading: false,
  }),
  [authTypes.GET_AUTH_ATTEMPT]: () => ({
    isLoading: false,
  }),
})
