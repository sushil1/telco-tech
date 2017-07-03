import constants from '../constants'
import shortid from 'shortid'

var initialState = {
  currentUser: null,
  messages: null
}


export default (state=initialState, action)=>{

  let updated = Object.assign({}, state)

  switch(action.type){

    case constants.CURRENT_USER_RECEIVED:
      updated['currentUser'] = action.user
      return updated

    case constants.USER_LOGGED_OUT:
      updated['currentUser'] = null
      return updated

    case constants.ADD_FLASH_MESSAGE:
      let updatedMessage = (updated['messages']) == null ? [] : Object.assign([], updated['messages'])

      updatedMessage.push(
        {id: shortid.generate(),
        type:action.message.type,
        text:action.message.text})
        updated['messages'] = updatedMessage
      return updated

    default:
    return updated

  }
}
