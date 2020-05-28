import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { selectCartItemsTotal } from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import CustomButton from '../../components/CustomButton/CustomButton';

import './checkoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => (
	<React.Fragment>
		{cartItems.length ? (
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

				<div className="total">
					TOTAL:  &#8377; {total}
				</div>
				<div className="test-warning">
					* Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 CVV & Date - Any 3 digits
			</div>
				<StripeCheckoutButton price={total} />
			</div>) : (
				<div className="empty-cart">
					<img className="image" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="emptyCart" />
					<div className="text">Your cart is empty!</div>
					<Link className="continue-btn" to="/"><CustomButton>Continue Shopping</CustomButton></Link>
				</div>
			)
		}
	</React.Fragment>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartItemsTotal
})


export default connect(mapStateToProps)(CheckoutPage);