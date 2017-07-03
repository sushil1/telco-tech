import constants from '../constants'

var initialState = {
  list: null
}

export default (state=initialState, action)=>{
  let updated = Object.assign({}, state)

  switch(action.type){
    case constants.BOOKINGS_RECEIVED:
      updated['list'] = action.jobs
      return updated

    case constants.NEW_BOOKING_RECEIVED:
    let updatedList = (updated['list'] == null)? [] : Object.assign([], updated.list)
      updatedList.unshift(action.job)
      updated['list'] = updatedList
      return updated

    default:
    return updated
  }

}
