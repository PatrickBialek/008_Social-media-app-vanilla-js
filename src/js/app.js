import {
	HTML
} from "./modules/html";

import {
	CORE
} from "./modules/core";

const html = new HTML(),
	core = new CORE(),
	switchToSignUp = document.querySelector('#switch-to-sign-up'),
	switchToSignIn = document.querySelector('#switch-to-sign-in'),
	appBody = document.querySelector('#app-body');

core.initializeFirebase();
core.checkIfUserIsLogIn();

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw/sw.js')
		.then(() => {
			console.log('sw is registered');
		})
}

export {
	html,
	core,
	appBody
};