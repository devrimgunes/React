import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    render() {
        return(
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="btn btn-light fw-bold fs-5" style={{color:'	#696969'}}>
                    <i className="fas fa-cart-plus fa-2x" style={{color:'	#696969'}}></i>
                    Cart - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                {cartItem.product.name}
                                <span  className="badge bg-success">{cartItem.quantity}</span>
                            </DropdownItem>
                            ))}
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to='cart'>Go to cart</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
export default Cart;
