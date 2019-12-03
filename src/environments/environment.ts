// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBTDcCf3v9qpQhao4PDdiohgn6-lbyPaeE",
    authDomain: "angular-task-682b5.firebaseapp.com",
    databaseURL: "https://angular-task-682b5.firebaseio.com",
    projectId: "angular-task-682b5",
    storageBucket: "angular-task-682b5.appspot.com",
    messagingSenderId: "331256827162",
    appId: "1:331256827162:web:d4be435a2430be838eb0a3",
    measurementId: "G-N5LDPLW6R7"
  },
  admin:{
    username:'admin',
    password:'12345'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
