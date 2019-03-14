// This import loads the firebase namespace.
import firebase, {
	auth
} from "firebase/app";
import "firebase/auth";
import "firebase/database";

import {
	core,
	html,
	appBody
} from '../app';

class CORE {
	initializeFirebase() {
		const config = {
			apiKey: "AIzaSyCt_bwuwKb0lF21b2YH5ktUU304u4tvkks",
			authDomain: "social-media-pwa-app.firebaseapp.com",
			databaseURL: "https://social-media-pwa-app.firebaseio.com",
			projectId: "social-media-pwa-app",
			storageBucket: "social-media-pwa-app.appspot.com",
			messagingSenderId: "290990819860"
		};

		firebase.initializeApp(config);
	}

	checkIfUserIsLogIn() {
		firebase.auth().onAuthStateChanged(user => {

			if (user) {

			} else {
				html.notSignedUserTemplate();
				html.signInTemplate();
			}
		});
	}

	signIn() {

	}

	signUp() {

	}

	resetUserPassword() {

	}

	continueWithFacebook() {

	}

	continueWithGoogle() {

	}

	signOut() {

	}
}

export {
	CORE
};