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
			if (user) {
				const userName = user.displayName;
				html.userSingedInTemplete(userName);
				html.mainPageTemplate();
			} else {
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
					html.mainPageTemplate();
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
		const userName = document.querySelector("#sign-up-name").value,
			userEmail = document.querySelector("#sign-up-email").value,
			userPassword = document.querySelector("#sign-up-password").value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(userEmail),
			errors = [];

		if (userName != "" && userPassword != "" && isEmailCorrect != false) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(userEmail, userPassword)
				.then(() => {
					firebase.auth().currentUser.updateProfile({
						displayName: userName
					});
				})
				.then(() => {
					html.userSingedInTemplete();
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

	continueWithFacebook() {
		html.cleanErrors();

		const provider = new firebase.auth.FacebookAuthProvider(),
			errors = [];

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken,
					user = result.user;
			})
			.catch(error => {
				const errorCode = error.code,
					errorMessage = error.message,
					email = error.email,
					credential = error.credential;

				console.log("error code: " + errorCode);
				console.log("error message: " + errorMessage);
				console.log("error email: " + email);
				console.log("error credential: " + credential);

				errors.push(errorMessage);
			});
	}

	continueWithGoogle() {
		html.cleanErrors();

		const provider = new firebase.auth.GoogleAuthProvider(),
			errors = [];

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken,
					user = result.user;

				console.log(token);
				console.log(user);
			})
			.catch(error => {
				const errorCode = error.code,
					errorMessage = error.message,
					email = error.email,
					credential = error.credential;

				console.log("error code: " + errorCode);
				console.log("error message: " + errorMessage);
				console.log("error email: " + email);
				console.log("error credential: " + credential);

				errors.push(errorMessage);
			});
	}

	signOut() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				html.notSignedUserTemplate();
				html.signInTemplate();
			})
			.catch(error => {
				console.log(error);
			});
	}

	addPostToDatabase() {
		const postText = document.querySelector("#add-post-textarea").value;

		if (postText != "") {
			console.log("post will be added");

			const user = firebase.auth().currentUser,
				userEmail = user.email,
				userName = user.displayName,
				timestamp = Date.now(),
				id = timestamp + Math.floor(Math.random() * 100),
				db = firebase.database().ref("posts/" + id),
				textArea = document.querySelector("#add-post-textarea");

			const post = {
				userEmail: userEmail,
				userName: userName,
				timestamp: timestamp,
				id: id,
				postText: postText,
				published: false,
				likes: [],
				responses: []
			};

			console.log(post);

			db.set(post);
			html.addPostResetField(textArea);
		} else {
			const errorField = document.querySelector("#add-post-container > .error-box");
			const errorText = "You have to add some content to your post.";

			html.displayError;
		}
	}

	getAllPostFromDatabase() {
		const postsRef = firebase.database().ref("posts/"),
			userPostsContainer = document.querySelector("#posts-container"),
			posts = new Array();

		postsRef.on("child_added", data => {
			const post = data.val(),
				postTime = post.timestamp,
				currentTime = Date.now(),
				difference = currentTime - postTime;

			if (difference <= 60000) {
				const postPublishDate = "about minute ago";
				html.singlePostTemplate(userPostsContainer, post, postPublishDate);
			} else if (difference > 60000 && difference < 3600000) {
				const postPublishDate = Math.floor(difference / 60000) + " minutes ago";
				html.singlePostTemplate(userPostsContainer, post, postPublishDate);
			} else if (difference < 86400000) {
				const postPublishDate = Math.floor(difference / 3600000) + " hours ago";
				html.singlePostTemplate(userPostsContainer, post, postPublishDate);
			} else if (difference > 86400000 && difference < 604800000) {
				const postPublishDate = Math.floor(difference / 86400000) + " days ago";
				html.singlePostTemplate(userPostsContainer, post, postPublishDate);
			} else {
				const postPublishDate = Math.floor(difference / 60000) + " minutes ago";
				html.singlePostTemplate(userPostsContainer, post, postPublishDate);
			}
		});
	}
}

export {
	CORE
};