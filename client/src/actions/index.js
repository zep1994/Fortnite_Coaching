import { AUTH_USER } from './types'
import axios from 'axios'

const API_URL = 'http://localhost:3001/users/sign_up'

export const signup = (formProps) => dispatch => {
    axios.post(API_URL, formProps)
}
