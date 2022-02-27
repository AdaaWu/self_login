//web9
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAurYmF96ZuTAdU7h9CCUcTpC_zbshbCI",
  authDomain: "adaawu20220129.firebaseapp.com",
  databaseURL: "https://adaawu20220129-default-rtdb.firebaseio.com",
  projectId: "adaawu20220129",
  storageBucket: "adaawu20220129.appspot.com",
  messagingSenderId: "18962692704",
  appId: "1:18962692704:web:0d8aaaccad087e3cdca105",
  measurementId: "G-WXW985E8WV",
};

const app = initializeApp(firebaseConfig, "users");
const analytics = getAnalytics(app);
const db = getDatabase(app);

$('#created').submit(function (e) {

  let reg = regname.value;
  let rpass = regpass.value;
  let repass = reregpass.value;
  push(ref(db, "usertest_227"), {
    id: reg,
    pass: rpass
  })
  .then(() => {
    // Data saved successfully!
    console.log('-----successfully');
    window.location.href = 'ok.html';
  })
  .catch((error) => {
    // The write failed...
    console.log('-----failed');
    window.location.href = 'loading.html';
  });
 e.preventDefault();
});


// push(ref(database, "usertest"), {
//   username: 777778888,
//   email: "qewqeqwewqewqewe",
//   profile_picture: "wqeweqwewe",
// });
// console.log('-----');
//const newPostKey = push(child(ref(db), 'posts')).key;
// const newPostKey = push(ref(db, 'posts'),{qqq:23}).key;
// console.log(newPostKey);
console.log('newPostKey');
// onValue(ref(db, 'usertest'), (snapshot) => {
//   // const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
//   console.log(snapshot.val());
// }, {
//  // onlyOnce: true
// });



// push(ref(database, "usertest"), {
//   username: 777778888,
//   email: "qewqeqwewqewqewe",
//   profile_picture: "wqeweqwewe",
// });

/*
database.ref("user").once('value', function (snapshot) {
    var data = snapshot.val();
    console.log(data);
});
*/