import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { selectCartItemsTotal } from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

import './checkoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => (
            <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
            />
        ))
        }
        {cartItems.length ? (
            <React.Fragment>
                <div className="total">
                    TOTAL:  &#8377; {total}
                </div>
                <div className="test-warning">
                    * Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 CVV & Date - Any 3 digits
                </div>
                <StripeCheckoutButton price={total} />
            </React.Fragment>
        ) :
            null}
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})


export default connect(mapStateToProps)(CheckoutPage);