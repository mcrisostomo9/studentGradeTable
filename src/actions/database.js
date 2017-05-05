import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAPZuSPa7K6VteXyoX89OTG3mpUXH_Tzos',
  authDomain: 'student-grade-table-a123e.firebaseapp.com',
  databaseURL: 'https://student-grade-table-a123e.firebaseio.com'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
