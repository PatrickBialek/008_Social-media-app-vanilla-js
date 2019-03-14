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
import {
	error
} from "util";

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
		html.cleanErrors();

		const userEmail = document.querySelector('#sign-up-first-name').value,
			userPassword = document.querySelector('#sign-up-first-name').value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(userEmail);


	}

	signUp() {
		const userFirstName = document.querySelector('#sign-up-first-name').value,
			userLastName = document.querySelector('#sign-up-last-name').value,
			userEmail = document.querySelector('#sign-up-email').value,
			userPassword = document.querySelector('#sign-up-password').value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(userEmail),
			errors = [];

		if (userFirstName != "" && userLastName != "" && userPassword != "" && isEmailCorrect != false) {
			firebase.auth()
				.createUserWithEmailAndPassword(userEmail, userPassword)
				.then(() => {
					firebase.auth()
						.currentUser.updateProfile({
							userFirstName: userFirstName,
							userLastName: userLastName
						})
				})
				.catch(error => {
					console.log(error.message);
					html.signOutError(error.message);
				})
		} else {
			html.signOutError();
		}
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