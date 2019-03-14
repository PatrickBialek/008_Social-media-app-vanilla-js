import {
	HTML
} from "./modules/html";

import {
	CORE
} from "./modules/core";

const html = new HTML(),
	core = new CORE(),
	switchToSignUp = document.querySelector('#switch-to-sign-up'),
	switchToSignIn = document.querySelector('#switch-to-sign-in');

console.log(html);
console.log(core);

export {
	html,
	core
};