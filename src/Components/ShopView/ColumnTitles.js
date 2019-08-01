import React, { Component } from 'react';
import Img from '../../Assets/profile.png';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                <div className="col-10 mx auto col-lg-2">
                <p className="text-uppercase">
                    Order Id
                </p> 
                <hr/>
                </div>

                <div className="col-10 mx auto col-lg-2">
                <p className="text-uppercase">
                    Ordered Items
                </p>
                <hr/>
                </div>

                <div className="col-10 mx auto col-lg-2">
                <p className="text-uppercase">
                    Deliverer details
                </p>
                <hr/>
                </div>

                <div className="col-10 mx auto col-lg-2">
                <p className="text-uppercase">
                    Confirm order
                </p>
                <hr/>
                </div>
                </div>
            </div>
        );
    }
}

export default CartColumns;