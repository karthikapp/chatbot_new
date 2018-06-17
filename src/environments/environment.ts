// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  dialogflow:{
  	angularBot: 'f45e4f20817d4b61800cad910d1c17e4'
  },
  
    firebase: {
     apiKey: "AIzaSyDmrikl0a0Rk-dIjQ8qtg3amiguNzw44dA",
    authDomain: "chatbottest-f5200.firebaseapp.com",
    databaseURL: "https://chatbottest-f5200.firebaseio.com",
    projectId: "chatbottest-f5200",
    storageBucket: "",
    messagingSenderId: "546270427160"
  }
};
