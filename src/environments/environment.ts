// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebase: {
    apiKey: "AIzaSyDm5-QX7HNDy2H4jX7RxxdSa1BV_xAYDYg",
    authDomain: "library-8393c.firebaseapp.com",
    databaseURL: "https://library-8393c.firebaseio.com",
    projectId: "library-8393c",
    storageBucket: "library-8393c.appspot.com",
    messagingSenderId: "846769383641"
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
