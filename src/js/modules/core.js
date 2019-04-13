// This import loads the firebase namespace.
import firebase, {
	auth
} from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

import {
	core,
	html,
	appBody
} from "../app";

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

	// Auth functions
	checkIfUserIsLogIn() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				const userName = user.displayName,
					uid = user.uid;

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
			timestamp = Date.now(),
			id = timestamp + Math.floor(Math.random() * 100),
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

			setTimeout(() => {
				core.createUserDatabase();
			}, 2000);

			if (deferredPrompt) {
				deferredPrompt.prompt();

				deferredPrompt.userChoice.then(function (choiceResult) {
					console.log(userResult.outcome);

					if (choiceResult.outcome === "dismissed") {
						console.log("User cancelled installation");
					} else {
						console.log("User added  to home screen");
					}

					deferredPrompt = null;
				});
			}
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

				core.createUserDatabase();
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

	createUserDatabase() {
		const user = firebase.auth().currentUser,
			userName = user.displayName;

		console.log(userName);

		// Conver current user mail to firebase friendly format
		let userEmail = user.email;
		userEmail = userEmail.replace(/\./g, "-");
		userEmail = userEmail.replace(/@/g, "+");

		const db = firebase.database().ref("users/" + userEmail);
		const userData = {
			userEmail: userEmail,
			userName: userName,
			userAbout: "Fill this section in account settings...",
			userVisitedPlaces: "Fill this section in account settings...",
			userWantToVist: "Fill this section in account settings..."
		};

		db.set(userData);
	}

	getCurrentUserProfilIntro() {
		const user = firebase.auth().currentUser,
			usersRef = firebase.database().ref("users/");

		// Convert current user mail to firebase friendly format
		let currentUserEmail = user.email;
		currentUserEmail = currentUserEmail.replace(/\./g, "-");
		currentUserEmail = currentUserEmail.replace(/@/g, "+");

		usersRef.on("child_added", data => {
			const user = data.val();

			if (currentUserEmail === user.userEmail) {
				html.profileIntroTemplete(user);
			}
		});
	}

	getCurrentUserSettings() {
		const user = firebase.auth().currentUser,
			usersRef = firebase.database().ref("users/");

		// Convert current user mail to firebase friendly format
		let currentUserEmail = user.email;
		currentUserEmail = currentUserEmail.replace(/\./g, "-");
		currentUserEmail = currentUserEmail.replace(/@/g, "+");

		usersRef.on("child_added", data => {
			const user = data.val();

			if (currentUserEmail === user.userEmail) {
				html.editAccountTemplate(user);
			}
		});
	}

	getAllUsersFromDatabase() {
		const usersRef = firebase.database().ref("users/"),
			currentUser = firebase.auth().currentUser,
			currentUserEmail = currentUser.email;

		html.cleanUsersPreloadContainer();

		usersRef.on("child_added", data => {
			const user = data.val();

			if (currentUserEmail != user.userEmail) {
				html.singleUserTemplate(user);
			}
		});
	}

	// Posts functions
	addPostToDatabase() {
		const postText = document.querySelector("#add-post-textarea").value;

		if (postText != "") {
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
				likes: {}
			};

			db.set(post);
			html.addPostResetField(textArea);
		} else {
			const errorField = document.querySelector("#add-post-container > .error-box");
			const errorText = "You have to add some content to your post.";

			html.displayError;
		}
	}

	removePostFromDatabase(id) {
		const post = firebase.database().ref("posts/" + id);
		post.remove();
	}

	getAllPostFromDatabase() {
		const postsRef = firebase.database().ref("posts/"),
			userPostsContainer = document.querySelector("#posts-container");

		// Array
		let allPosts = [];

		postsRef.on("child_added", data => {
			const post = data.val(),
				postTime = post.timestamp,
				currentTime = Date.now(),
				difference = currentTime - postTime,
				currentUserEmail = firebase.auth().currentUser.email,
				authorUserEmail = post.userEmail;

			allPosts.push(post);

			let removePostBtnTemplate, postPublishDate;

			if (currentUserEmail == authorUserEmail) {
				removePostBtnTemplate = `<li class="posts__single-control remove-post"><img src="src/images/svg/remove-btn.svg" alt="Remove icon"></li>`;
			} else {
				removePostBtnTemplate = ``;
			}

			if (difference <= 60000) {
				postPublishDate = "about minute ago";
			} else if (difference > 60000 && difference < 3600000) {
				postPublishDate = Math.floor(difference / 60000) + " minutes ago";
			} else if (difference < 86400000) {
				postPublishDate = Math.floor(difference / 3600000) + " hours ago";
			} else if (difference > 86400000) {
				postPublishDate = Math.floor(difference / 86400000) + " days ago";
			}

			html.singlePostTemplate(userPostsContainer, post, postPublishDate, removePostBtnTemplate);
		});
	}

	getYourPostsFromDatabase() {
		const postsRef = firebase.database().ref("posts/"),
			userPostsContainer = document.querySelector("#posts-container"),
			userEmail = firebase.auth().currentUser.email;

		// Clean walll from posts
		html.cleanYourProfileWall();

		if (userEmail) {
			postsRef.on("child_added", data => {
				const post = data.val();

				if (post.userEmail === userEmail) {
					const postTime = post.timestamp,
						currentTime = Date.now(),
						difference = currentTime - postTime,
						removePostBtnTemplate = `<li class="posts__single-control remove-post"><img src="src/images/svg/remove-btn.svg" alt="Remove icon"></li>`;

					let postPublishDate;

					if (difference <= 60000) {
						postPublishDate = "about minute ago";
					} else if (difference > 60000 && difference < 3600000) {
						postPublishDate = Math.floor(difference / 60000) + " minutes ago";
					} else if (difference < 86400000) {
						postPublishDate = Math.floor(difference / 3600000) + " hours ago";
					} else if (difference > 86400000) {
						postPublishDate = Math.floor(difference / 86400000) + " days ago";
					}

					html.singlePostTemplate(userPostsContainer, post, postPublishDate, removePostBtnTemplate);
				} else {
					html.cleanPostPreloadContainer();
				}
			});
		}
	}

	getChosenUserPostsFromDatabase(user, email) {
		const postsRef = firebase.database().ref("posts/");

		// Convert from firebase friendly format to primary format
		email = email.replace(/\-/g, ".");
		email = email.replace(/\+/g, "@");

		postsRef.on("child_added", data => {
			const post = data.val();

			if (email === post.userEmail) {
				const postTime = post.timestamp,
					currentTime = Date.now(),
					difference = currentTime - postTime,
					removePostBtnTemplate = "",
					userPostsContainer = document.querySelector("#posts-container");

				let postPublishDate;

				if (difference <= 60000) {
					postPublishDate = "about minute ago";
				} else if (difference > 60000 && difference < 3600000) {
					postPublishDate = Math.floor(difference / 60000) + " minutes ago";
				} else if (difference < 86400000) {
					postPublishDate = Math.floor(difference / 3600000) + " hours ago";
				} else if (difference > 86400000) {
					postPublishDate = Math.floor(difference / 86400000) + " days ago";
				}

				html.singlePostTemplate(userPostsContainer, post, postPublishDate, removePostBtnTemplate);
			}
		});
	}

	chooseUserFromUsersList(e) {
		const userContanier = e.target.closest(".users__single-user"),
			userEmail = userContanier.id,
			usersRef = firebase.database().ref("users/"),
			currentUser = firebase.auth().currentUser;

		let currentUserEmail = currentUser.email;

		// Convert current user to firebase friendly format
		currentUserEmail = currentUserEmail.replace(/\./g, "-");
		currentUserEmail = currentUserEmail.replace(/@/g, "+");

		usersRef.on("child_added", data => {
			const user = data.val();

			if (userEmail === currentUserEmail) {
				html.yourProfilePage();
			} else if (userEmail === user.userEmail) {
				html.userProfilPage(user);
				core.getChosenUserPostsFromDatabase(user, userEmail);
				html.profileIntroTemplete(user);
			}
		});
	}

	findAuthorProfile(e) {
		const postTemplateHTML = e.target.closest(".posts__single-post"),
			id = Number(postTemplateHTML.id);

		firebase
			.database()
			.ref("posts/" + id)
			.once("value")
			.then(function (snapshot) {
				const currentUser = firebase.auth().currentUser;
				let authorPostEmail = snapshot.child("/userEmail").val(),
					currentUserEmail = currentUser.email;

				// Convert mail to firebase friendly format
				authorPostEmail = authorPostEmail.replace(/\./g, "-");
				authorPostEmail = authorPostEmail.replace(/@/g, "+");

				// Convert current user to firebase friendly format
				currentUserEmail = currentUserEmail.replace(/\./g, "-");
				currentUserEmail = currentUserEmail.replace(/@/g, "+");

				const usersRef = firebase.database().ref("users/");

				usersRef.on("child_added", data => {
					const user = data.val();

					if (authorPostEmail === currentUserEmail) {
						html.yourProfilePage();
					} else if (authorPostEmail === user.userEmail) {
						html.userProfilPage(user);
						core.getChosenUserPostsFromDatabase(user, authorPostEmail);
						html.profileIntroTemplete(user);
					}
				});
			});
	}

	likePost(e) {
		const postTemplateHTML = e.target.closest(".posts__single-post"),
			id = Number(postTemplateHTML.id),
			post = firebase.database().ref("posts/" + id + "/likes"),
			userName = firebase.auth().currentUser.displayName;

		post.push(userName);
		html.likedPostTemplate(postTemplateHTML);
	}

	searchFiends(e) {
		console.log(e.target.value)
	}

	// User setting functions
	changeUserSettingsInDatabase() {
		const userName = document.querySelector("#edit-account-user-name").value,
			userAbout = document.querySelector("#edit-account-change-about-me").value,
			userVisitedPlaces = document.querySelector("#edit-account-visited-places").value,
			userWantToVist = document.querySelector("#edit-account-want-to-see").value;

		if (userName != "" && userAbout != "" && userVisitedPlaces != "" && userWantToVist != "") {
			const user = firebase.auth().currentUser;

			// Conver current ucer mail to firebase friendly format
			let userEmail = user.email;
			userEmail = userEmail.replace(/\./g, "-");
			userEmail = userEmail.replace(/@/g, "+");

			const userSettings = {
				userAbout: userAbout,
				userEmail: userEmail,
				userName: userName,
				userVisitedPlaces: userVisitedPlaces,
				userWantToVist: userWantToVist
			};

			const db = firebase.database().ref("users/" + userEmail);
			db.set(userSettings);
			core.getCurrentUserProfilIntro();

			alert("Your account settings has been successfully changed! :)");
		} else {
			alert("You cannot leave empty field!");
		}
	}

	addImageToUser() {}

	uploadImageToDatabase() {
		let file = event.target.files[0];

		const user = firebase.auth().currentUser,
			uid = user.uid,
			storageRef = firebase.storage().ref(`user-profile-photos/${uid}`);

		storageRef.put(file).then(snapshot => {
			snapshot.ref.getDownloadURL().then(url => {
				firebase
					.auth()
					.currentUser.updateProfile({
						photoURL: url
					})
					.catch(error => {
						console.log(`Failed to upload file and get link - ${error}`);
					});
			});
		});
	}
}
export {
	CORE
};