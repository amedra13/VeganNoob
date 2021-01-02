import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCXIIWFRPRY7avxtZ5Wyuypjxtkq1SgH2s',
	authDomain: 'vegannoob-14841.firebaseapp.com',
	projectId: 'vegannoob-14841',
	storageBucket: 'vegannoob-14841.appspot.com',
	messagingSenderId: '641810691792',
	appId: '1:641810691792:web:56e5c2db360ec3412610d5',
	measurementId: 'G-K00580PGKC',
});

const db = firebaseApp.firestore();

export default db;
