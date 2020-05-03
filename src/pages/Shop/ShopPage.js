import React from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/CollectionPage";

import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shopAction';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import "./shopPage.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // fetch('https://firestore.googleapis.com/v1/projects/shopping-cart-db-1/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collection => console.log(collection));

        // collectionRef.onSnapshot(async snapshot => {
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSanpshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route
                    exact path={`${match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
                />

                {/* props are (match, location & history) we get from <Route/>) */}
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);
