import React from 'react';

class GoToCart extends React.Component {
    render() {
        return(
            <div>
                <table className="table table-striped table table-hover container">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem=>(
                                <tr key={cartItem.product.id}>
                                    <td className="table-light">
                                        <td><img src={cartItem.product.image} className="rounded mx-auto d-block" width="150" height="200"></img></td>
                                        <td>
                                            <th>{cartItem.product.name}</th>
                                            <p>{cartItem.product.author}</p>
                                        </td>
                                    </td>
                                    <td className="table-light">{cartItem.quantity}</td>
                                    <td className="table-light">{cartItem.product.price}TL</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GoToCart;