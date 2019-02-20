const API_URL = 'http://localhost:3001/api/meetings'

export const setMeets = meetings => {
    return {
        type: 'GET_MEETS',
        meetings
    }
}

export const getMeets = () => {
    return dispatch => {
        return fetch(API_URL)
        .then(res => res.json())
        .then(meeting => dispatch(setMeets(meeting)))
        .catch(error => console.log(error))
    }
}