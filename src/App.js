import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";

//for storing SHOP_DATA to firestore
// import { selectCollectionsForPreview } from "./redux/shop/shopSelector";
// import { addCollectionAndDocuments } from "./firebase/firebase.utils";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //for storing SHOP_DATA to firestore
    // const { collectionsArray } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //console.log('logged in user: ',userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);

      //for storing SHOP_DATA to firestore
      /*  addCollectionAndDocuments("collections",collectionsArray.map(({ title, items }) => ({ title, items }))); */
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.user.currentUser
//   }
// }

// for memoization using reselect library
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
