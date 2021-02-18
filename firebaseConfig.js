import * as firebase from "firebase";
import flamelink from "flamelink";

const firebaseConfig = {
  apiKey: "AIzaSyC0v8NnU4r1XWm3pnf5-rcmABDja-QRTUo",
  authDomain: "merse-28192.firebaseapp.com",
  databaseURL: "https://merse-28192-default-rtdb.firebaseio.com",
  projectId: "merse-28192",
  storageBucket: "merse-28192.appspot.com",
  messagingSenderId: "833252456212",
  appId: "1:833252456212:web:a2dba1b2e0313df45af401",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const flamelinkSdk = flamelink({
  firebaseApp,
  dbType: "rtdb",
  env: "production",
  locale: "en-US",
  precache: true,
});
