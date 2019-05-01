import firebase from 'firebase';

const firebaseCredentials = {
  apiKey: 'AIzaSyB1F0mSMmLdvKSwHKO_8QvGv9DFZUhY8Y4',
  authDomain: 'movie-chat-turtle.firebaseapp.com',
  databaseURL: 'https://movie-chat-turtle.firebaseio.com',
  projectId: 'movie-chat-turtle',
  storageBucket: 'movie-chat-turtle.appspot.com',
  messagingSenderId: '1083231403486'
};

firebase.initializeApp(firebaseCredentials);

export const { database, auth } = firebase;
