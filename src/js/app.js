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
		.register('/008_PWA-social-media-app/sw/sw.js')
		.then(() => {
			console.log('SW registered');
		})
}

window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();

	deferredPrompt = e;
});

export {
	html,
	core,
	appBody
};