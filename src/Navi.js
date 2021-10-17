import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
  } from 'reactstrap';
import Cart from './Cart';

class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen:false}

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }
    
    render() {
        return(
            <div>
                <Navbar color="alert alert-success" light expand="md">
                    <NavbarBrand href="/" className="fs-1 fw-bold fst-italic"><i className="bi bi-book"></i>    BOOK SHOPPING</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <Cart  cart={this.props.cart} />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Navi;