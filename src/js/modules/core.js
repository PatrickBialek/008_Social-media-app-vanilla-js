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
} from "../app";
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
			if (user) {} else {
				html.notSignedUserTemplate();
				html.signInTemplate();
			}
		});
	}

	signIn() {
		const userEmail = document.querySelector("#sign-in-email").value,
			userPassword = document.querySelector("#sign-in-password").value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(userEmail);

		if (isEmailCorrect) {
			firebase
				.auth()
				.signInWithEmailAndPassword(userEmail, userPassword)
				.then(() => {
					html.userSingedInTemplete();
				})
				.catch(error => {
					console.log(error.message);
					html.displayError(error.message);
				});
		} else {
			const error = "Email or password field is empty";
			html.displayError(error);
		}
	}

	signUp() {
		const userFirstName = document.querySelector("#sign-up-first-name").value,
			userLastName = document.querySelector("#sign-up-last-name").value,
			userEmail = document.querySelector("#sign-up-email").value,
			userPassword = document.querySelector("#sign-up-password").value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(userEmail),
			errors = [];

		if (userFirstName != "" && userLastName != "" && userPassword != "" && isEmailCorrect != false) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(userEmail, userPassword)
				.then(() => {
					firebase.auth().currentUser.updateProfile({
						userFirstName: userFirstName,
						userLastName: userLastName
					});
				})
				.catch(error => {
					console.log(error.message);
					html.displayError(error.message);
				});
		} else {
			const error = "You have to fill all fields";
			html.displayError(error);
		}
	}

	resetUserPassword() {
		const userEmail = document.querySelector("#reset-password-mail").value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(userEmail);

		if (isEmailCorrect) {
			firebase
				.auth()
				.sendPasswordResetEmail(userEmail)
				.then({})
				.catch(error => {
					console.log(error.message);
					html.displayError(error.message);
				});
		} else {
			const error = "Email foramt isn't correct";
			html.displayError(error);
		}
	}

	continueWithFacebook() {}

	continueWithGoogle() {}

	signOut() {}
}

export {
	CORE
};