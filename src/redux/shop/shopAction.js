import shopActionTypes from './shopTypes';
import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
    return {
        type: shopActionTypes.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsSuccess = collectionsMap => {
    return {
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
};

export const fetchCollectionsFailure = errorMessage => {
    return {
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
};

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSanpshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
            // console.log(collectionsMap);
        }).catch(
            error => dispatch(fetchCollectionsFailure(error.message))
        )
    }
};


// fetch('https://firestore.googleapis.com/v1/projects/shopping-cart-db-1/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collection => console.log(collection));

        // collectionRef.onSnapshot(async snapshot => {