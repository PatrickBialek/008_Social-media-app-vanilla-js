import {
	html,
	core,
	appBody
} from "../app";

class HTML {
	notSignedUserTemplate() {
		const templateHTML = `
			<header class="header"></header>

			<main class="authorization">

				<div class="authorization__bg-video-box">
					<video class="authorization__bg-video" autoplay muted loop>
						<source src="src/videos/people-bg-video.mp4" type="video/mp4" />
					</video>
				</div>
		
				<div class="authorization__content-box">
					<div class="authorization__text-box">
						<h1 class="heading-primary margin-bottom-small">Welcome to my social media portal</h1>
						<p class="paragraph">Aliquam condimentum, dui vitae lacinia sollicitudin, est sapien bibendum mauris, ac vulputate est massa in nisi. In pellentesque vestibulum massa id interdum.</p>
					</div>
					<div class="authorization__user-asction-box" id="user-auth-box">
				</div>

			</main>

			<footer class="footer"></footer>
		`;

		appBody.innerHTML = templateHTML;
	}

	signInTemplate() {
		const userAuthBox = document.querySelector('#user-auth-box');

		const templateHTML = `
			<div class="sign-in" id="sign-in">
				<div class="sign-in" id="sign-in">
					<h2 class="heading-secondary">Sign in</h2>
					<div class="sign-in__row">
						<input class="text-field" type="text" placeholder="Your email..." id="sign-in-email" />
					</div>
					<div class="sign-in__row">
						<input class="text-field" type="password" placeholder="Your password..." id="sign-in-password" />
					</div>
					<div class="sign-in__row">
						<input class="btn btn--orange" type="submit" value="Sign in" id="sign-in-btn" />
					</div>
					<div class="sign-up__row">
						<span class="sign-up__question" id="switch-to-sign-up">I don't have an account</span>
				</div>
				<div class="sign-up__row">
					<span class="sign-up__question" id="switch-to-reset-password">I don't remember a password</span>
				</div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignUp = document.querySelector('#switch-to-sign-up');
		switchToSignUp.addEventListener('click', html.signUpTemplate);

		const switchToResetPassowrd = document.querySelector('#switch-to-reset-password');
		switchToResetPassowrd.addEventListener('click', html.resetPasswordTemplate);

		const signInBtn = document.querySelector('#sign-in-btn');
		signInBtn.addEventListener('click', core.signIn);
	}

	signUpTemplate() {
		const userAuthBox = document.querySelector('#user-auth-box');

		const templateHTML = `
			<div class="sign-up" id="sign-up">
				<h2 class="heading-secondary">Sign up</h2>

				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="First name.." id="sign-up-first-name" />
				</div>
				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="Last name..." id="sign-up-last-name" />
				</div>
				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="Your email..." id="sign-up-email" />
				</div>
				<div class="sign-up__row">
					<input class="text-field" type="password" placeholder="Your password..." id="sign-up-password" />
				</div>
				<div class="sign-up__row">
					<input class="btn btn--orange" type="submit" value="Sign up" id="sign-up-btn" />
				</div>

				<div class="sign-up__row">
					<div class="sign-up__cell">
						<hr />
					</div>
					<div class="sign-up__cell">
						<span>or</span>
					</div>
					<div class="sign-up__cell">
						<hr />
					</div>
				</div>

				<div class="sign-up__row">
					<a href="#" class="btn btn--facebook" id="continue-with-facebook">
						<i class="fa fa-facebook visible-xs"></i>
						<span class="hidden-xs">Continue with Facebook</span>
					</a>
					</div>
					<div class="sign-up__row">
						<a href="#" class="btn btn--google" id="continue-with-google">
							<i class="fa fa-google-plus visible-xs"></i>
							<span class="hidden-xs">Continue with Google</span>
						</a>
					</div>
					<div class="sign-up__row">
						<span class="sign-up__question" id="switch-to-sign-in">I have an account</span>
					</div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignIn = document.querySelector('#switch-to-sign-in');
		switchToSignIn.addEventListener('click', html.signInTemplate);

		const signUpBtn = document.querySelector('#sign-up-btn');
		signUpBtn.addEventListener('click', core.signUp);

		const continueWithFacebookBtn = document.querySelector('#continue-with-facebook');
		continueWithFacebookBtn.addEventListener('click', core.continueWithFacebook);

		const continueWithGoogleBtn = document.querySelector('#continue-with-google');
		continueWithGoogleBtn.addEventListener('click', core.continueWithGoogle);
	}

	signOutError() {

	}

	resetPasswordTemplate() {
		const userAuthBox = document.querySelector('#user-auth-box');

		const templateHTML = `
			<div class="reset-password">
				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="Your mail-address..." id="reset-password-mail" />
				</div>
				<div class="sign-up__row">
					<input class="btn btn--orange" type="submit" value="Reset" id="reset-password-btn" />
				</div>
				<div class="sign-up__row">
					<span class="sign-up__question" id="switch-to-log-in-area">Back to sign in area</span>
				</div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignIn = document.querySelector('#switch-to-log-in-area');
		switchToSignIn.addEventListener('click', html.signInTemplate);

		const resetUserPasswordBtn = document.querySelector('#reset-password-btn');
		resetUserPasswordBtn.addEventListener('click', core.resetUserPassword);
	}

	cleanErrors() {

	}

	addPostTemplate() {
		const templateHTML = ``;
	}

	wallTemplate() {
		const templateHTML = ``;
	}

	errorTemplate() {
		const templateHTML = ``;
	}

	successTemplete() {
		const templateHTML = ``;
	}
}

export {
	HTML
};