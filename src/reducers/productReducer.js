import constants from '../constants'

var initialState = {
  list: null,
  selected: null

}


export default (state=initialState, action)=>{

  let updated = Object.assign({}, state)

  switch(action.type){
    case constants.PRODUCTS_RECEIVED:
      updated['list'] = action.products
      return updated

    case constants.PRODUCT_SELECTED:
    if(updated.selected != null){
      if(updated.selected.id == action.product.id)
        return updated
      }
      updated['selected'] = action.product
      return updated

    default:
      return updated
  }

}
