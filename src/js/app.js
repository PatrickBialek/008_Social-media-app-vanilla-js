import {
	HTML
} from "./modules/html";

import {
	CORE
} from "./modules/core";

const GTIHUB_APP_LOCATION = "/008_PWA-social-media-app/";
// const LOCAL_APP_LOCATION = "";

const html = new HTML(),
	core = new CORE(),
	switchToSignUp = document.querySelector("#switch-to-sign-up"),
	switchToSignIn = document.querySelector("#switch-to-sign-in"),
	appBody = document.querySelector("#app-body"),
	searchFriendField = document.querySelector('#find-firends-search-box');

core.initializeFirebase();
core.checkIfUserIsLogIn();

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register(GTIHUB_APP_LOCATION + "/sw/sw.js").then(() => {
		console.log("SW registered");
	});
}

window.addEventListener("beforeinstallprompt", e => {
	e.preventDefault();
});


export {
	html,
	core,
	appBody
};