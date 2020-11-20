import React, { Component } from 'react'
import '../ProductStyle.css'


class ProductDetail extends Component {
    // constructor() {
    // super();

    // this.state = {
    //     currentIndex: 0;
    // }
    // }

    render() {
        return (
            <div className="product-detail">
                <h1>NAME HERE</h1>
                <ul>
                    <li>From: </li>
                    <li>Job Title:</li>
                    <li>Employer:</li>
                </ul>
                <ol> <h4> Favorite Movies: </h4>
                    <li className="movie-list"></li>
                    <li className="movie-list"></li>
                    <li className="movie-list"></li>
                </ol>
                <div className="card-counter"><h5>1/25</h5></div>
            </div>
        )
    }
}
export default ProductDetail