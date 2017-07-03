import React, {Component} from 'react'
import actions from '../../actions'
import {connect } from 'react-redux'

class Products extends Component{

  componentDidMount(){

    this.props.fetchProducts(null)

  }

  productSelected(product, event){
    this.props.submitSelected(product)
  }

  render(){
    const list = this.props.products.list
    return(
        <div className="container">

          <header>
            <h2>Services</h2>
          </header>

          <p>These are the ranges of services we provide to our clients.</p>

          <div className="row">
            {(list == null)? null: list.map((product, i)=>{
              return(
                <div className="4u 12u$(mobile)"  key={i}>
                  <article className="item" style={{background: '#f9f9'}}>
                    <a onClick={this.productSelected.bind(this, product)} href="#" className="image fit">
                    <img src="images/pic03.jpg" alt="" />
                    <header>
                      <h3>{product.name}</h3>
                    </header>
                    <p>{product.description}</p>
                    <p>{'$ '}{product.price}</p>
                    </a>
                  </article>
                </div>
              )
            })}
          </div>

        </div>
    )
  }
}


const stateToProps = (state)=>{
  return{
    products: state.product
  }
}

const dispatchToProps = (dispatch)=>{
  return{
    fetchProducts: (params) => dispatch(actions.fetchProducts(params)),
    submitSelected: (product) => dispatch(actions.submitSelected(product))
  }
}

export default connect(stateToProps, dispatchToProps)(Products)
