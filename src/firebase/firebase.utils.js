import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBM6-0udJfWcdqSWZGHShVREcBWc1s1Mns",
    authDomain: "shopping-cart-db-1.firebaseapp.com",
    databaseURL: "https://shopping-cart-db-1.firebaseio.com",
    projectId: "shopping-cart-db-1",
    storageBucket: "shopping-cart-db-1.appspot.com",
    messagingSenderId: "112092522200",
    appId: "1:112092522200:web:03abf3a9ff829e1af259ad",
    measurementId: "G-9PJLSJGH60",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    //console.log(snapshot);
    //snapshot is the data, checking if data not exists then we are creating one
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

//for storing SHOP_DATA to firestore
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);
    //console.log(collectionRef);

    const batch = firestore.batch();
    //forEach() does not returns a new array unlike map(). we use this because we only want to call a fucntion on each object.
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
        batch.set(newDocRef, obj);
    });

    await batch.commit();
};

export const convertCollectionsSanpshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    // console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
