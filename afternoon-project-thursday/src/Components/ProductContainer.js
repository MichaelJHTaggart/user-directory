import React, { Component } from 'react'
import ProductDetail from './ProductDetail'

class ProductContainer extends Component {
    render() {
        return (
            <div className="product-container">
                <ProductDetail />
            </div>
        )
    }
}
export default ProductContainer