import React from 'react';
import logo from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './header.scss';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <img src={logo} alt="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                    <Link to="/signin" className="option">SIGN IN</Link>
                )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//     return {
//         currentUser,
//         hidden
//     }
// }


// for memoization using reselect library:
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);