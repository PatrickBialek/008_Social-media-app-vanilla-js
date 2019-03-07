class HTML {
	notSignedUserTemplate() {
		const templateHTML = `
			<header class="header"></header>
			<main class="account-area" id="account-area-not-signed-up"></main>
			<footer class="footer"></footer>
		`;
	}

	signInTemplate() {
		const templateHTML = `
			<div class="sign-in" id="sign-in">
				<div class="sign-in__row">
					<input class="text-field" type="text" placeholder="Your email..." id="sign-in-email">
				</div>
				<div class="sign-in__row">
					<input class="text-field" type="password" placeholder="Your password..." id="sign-in-password">
				</div>
				<div class="sign-in__row">
					<span class="sign-in__question">I don't have an account</span>
				</div>
				<div class="sign-in__row">
					<input class="btn btn--aqua" type="submit" value="Sign in" id="sign-in-btn">
				</div>
			</div>
		`;
	}

	signUpTemplate() {
		const templateHTML = `
			<div class="sign-up" id="sign-up">
				<div class="sign-up" id="sign-up">
					<div class="sign-up__row">
						<input class="text-field" type="text" placeholder="Your email..." id="sign-up-email">
					</div>
					<div class="sign-up__row">
						<input class="text-field" type="password" placeholder="Your password..." id="sign-up-password">
					</div>
					<div class="sign-up__row">
						<div class="sing-up__cell">
							<hr>
						</div>
						<div class="sing-up__cell">
							<span>or</span>
						</div>
						<div class="sing-up__cell">
							<hr>
						</div>
					</div>
					<div class="sign-up__row">
						<input class="btn btn--aqua" type="submit" value="Sign up" id="sign-up-btn">
					</div>
					<div class="sign-up__row">
						<span class="sign-in__question">I don't have an account</span>
					</div>
				</div>
			</div>
		`;
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