import React from 'react';
import Products from './Products';
import Navi from './Navi';
import GoToCart from './GoToCart';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cart:[]}
  }

  addProductToCart = (product) => {
    let newCart = this.state.cart;
    let addedProduct = newCart.find(cart=>cart.product.id === product.id);
    if(addedProduct) {
      addedProduct.quantity += 1;
    } else {
      newCart.push({product:product, quantity:1});
    }
    this.setState({cart:newCart});
  }

  render() {
    return (
      <div>
        <Navi cart={this.state.cart}/>
        <Switch>
          <Route exact path='/' render={props => (
              <Products {...props} addProductToCart={this.addProductToCart} ></Products>
            )}>
          </Route>
          <Route path='/Cart' render={props => (
              <GoToCart {...props} cart={this.state.cart} ></GoToCart>
            )}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
