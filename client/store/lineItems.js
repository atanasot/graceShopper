import axios from "axios"

/**
 * ACTION TYPES
 */
 const ADD_QTY = "ADD_QTY";

 const DELETE_BEER = "DELETE_BEER"

 /**
 * ACTION CREATORS
 */

const _addBeer = (beer) => ({type: ADD_QTY, beer})

const _deleteBeer = (beer) => ({type: DELETE_BEER, beer})

/**
 * THUNK CREATORS
 */

// beer here represented as {id : quantity}
export const addBeer = (beer) => {
    return async(dispatch) => {
        const response = await axios.post('/api/beers', beer)
        dispatch(_addBeer(response.data))
    }
}

export default function lineItems (state = {}, action) {
    if (action.type === ADD_QTY) {
        return Object.assign({}, action.beer)
    }
    return state
}



// need to add more cases
// add wines as well
// lineItem -- {id : quantity}