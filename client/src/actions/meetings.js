const API_URL = process.env.API_URL

export default setMeets = meets => {
    return {
        type: 'GET_MEETS',
        meets
    }
}

export const getMeets = () => {
    return dispatch => {
        return fetch(`${API_URL}/meetings`)
        .then(response => response.json())
        .then(meets => dispatch(setMeets(meets)))
        .catch(error => console.log(error))
    }
}