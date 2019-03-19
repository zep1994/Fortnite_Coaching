import { AUTH_USER } from './types'

export const signup = ({ email, password }) => dispatch => {
    return {
        type: AUTH_USER,
        dispatch
    }
}
