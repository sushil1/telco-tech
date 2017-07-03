import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productReducer, bookingReducer, accountReducer} from '../reducers'

var store;

export default {


  initialise: () => {
    const reducers = combineReducers({
      product: productReducer,
      booking: bookingReducer,
      account: accountReducer
    })

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )
    return store
  },

  currentStore: ()=>{
    return store
  }

}
