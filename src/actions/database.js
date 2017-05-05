import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAPZuSPa7K6VteXyoX89OTG3mpUXH_Tzos',
  authDomain: 'student-grade-table-a123e.firebaseapp.com',
  databaseURL: 'https://student-grade-table-a123e.firebaseio.com',
  "provider": "anonymous",
  "uid": "ab1c1d2b-8f59-4fc5-a89e-e816e4154583"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
