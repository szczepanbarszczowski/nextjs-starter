import { createSelector } from 'reselect'

const getAuthState = state => state.auth

const getLoadingState = createSelector(
  getAuthState,
  state => state.isLoading,
)

const getErrorState =  createSelector(
  getAuthState,
  state => state.error,
)

export const authSelectors = {
  getLoadingState,
  getErrorState,
}
