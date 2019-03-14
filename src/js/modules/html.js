import {
	html,
	userAuthBox
} from "../app";

class HTML {
	notSignedUserTemplate(appBody) {
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
		const templateHTML = `
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
					<span class="sign-up__question">I have an account</span>
				</div>
			</div>
		`;
	}

	signUpTemplate() {
		const templateHTML = `
			<div class="sign-up" id="sign-up">
				<h2 class="heading-secondary">Sign up</h2>

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
						<span class="sign-up__question">I have an account</span>
					</div>
			</div>
		`;
	}

	resetPasswordTemplate() {
		const templateHTML = ``;
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