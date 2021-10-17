import React from 'react';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    }
   
    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        fetch("http://localhost:3000/products")
        .then(response=>response.json())
        .then(data=>this.setState({products:data}));;
    }

  render() {
    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {this.state.products.map(product => (
                <div className="card" style={{width: 385}}>
                    <div className="card-body">
                        <img src={product.image} className="rounded mx-auto d-block" width="150" height="200"></img>
                        <div className="text-center">
                            <h4 >{product.name}</h4>
                            <p>Yazar: {product.author}</p>
                            <p className="fw-bold fs-4">{product.price} TL</p>
                            <button onClick={() => this.props.addProductToCart(product)} type="button" className="btn btn-success"><i className="bi bi-cart" style={{fontSize:20}}></i>add</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
  }
}
export default Products;