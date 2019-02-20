export default (state = [], action) => {
    switch (action.type) {
        case 'GET_MEETS':
             return action.meetings
        default: 
            return state
    }
}