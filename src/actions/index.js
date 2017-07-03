import constants from '../constants'
import {APIClient} from '../utils'

export default {

  fetchProducts: (params)=> {
    return (dispatch)=>{
      APIClient.get('/api/product', params)
      .then(response=>{
        dispatch({
          type: constants.PRODUCTS_RECEIVED,
          products: response.result
        })
      })
      .catch(err=>{
        console.log('Error: '+err)
      })
    }
  },

  submitSelected: (product)=>{
    return{
      type: constants.PRODUCT_SELECTED,
      product: product
    }
  },

  newBookingCreated: (booking)=>{
    return (dispatch)=>{
      APIClient.post('/api/booking', booking)
      .then(response=>{
        dispatch({
          type: constants.NEW_BOOKING_RECEIVED,
          job: response.result
        })
      })
      .catch(err=>{
        console.log('Error: '+err)
      })
    }
  },

  loginUser: (user)=>{
    return (dispatch)=>{
      APIClient.post('/account/login', user)
      .then(response=>{
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.profile
        })
      })
      .catch(err=>{
        console.log('Error: '+err)
      })
    }
  },

  signupUser: (user)=>{
    return (dispatch)=>{
      APIClient.post('/account/register', user)
      .then(response=>{
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.profile
        })
      })
      .catch(err=>
        res.send({error: err})
      )
    }
  },

  checkCurrentUser: ()=>{
    return (dispatch)=>{
      APIClient.get('/account/currentuser', null)
      .then(response=>{
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.profile
        })
      })
      .catch(err=>{
        console.log('Error: '+err)
      })
    }
  },

  addFlashMessage: (message)=>{
    return{
      type: constants.ADD_FLASH_MESSAGE,
      message
    }
  },

  logoutUser:()=>{
    return (dispatch)=>{
      APIClient.get('/account/logout', null)
      .then(response=>{
        dispatch({
          type: constants.USER_LOGGED_OUT
        })
      })
      .catch(err=>{
        console.log('Error: '+err)
      })
    }
  }

}
