import { createActionsStructure } from '../../services/reduxHelpers'

/* ------------- Action Creators ------------- */

export const { authTypes, authActions } = createActionsStructure('auth', [
  { name: 'GET_AUTH', async: true }
])
