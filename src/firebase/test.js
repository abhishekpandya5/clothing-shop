import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('vUfKmH7wdF6RIlXXgWdQ').collection('cartItems').doc('bLlZHgYLX8kENmSxCUhI');

firestore.doc('/users/vUfKmH7wdF6RIlXXgWdQ/cartitems/bLlZHgYLX8kENmSxCUhI');

firestore.collection('/users/vUfKmH7wdF6RIlXXgWdQ/cartItems');

