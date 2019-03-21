import {
	html,
	core,
	appBody
} from "../app";

class HTML {
	// Auth page templates
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
		const userAuthBox = document.querySelector("#user-auth-box");

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
			<div class="error-box" id="error-box"></div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignUp = document.querySelector("#switch-to-sign-up");
		switchToSignUp.addEventListener("click", html.signUpTemplate);

		const switchToResetPassowrd = document.querySelector("#switch-to-reset-password");
		switchToResetPassowrd.addEventListener("click", html.resetPasswordTemplate);

		const signInBtn = document.querySelector("#sign-in-btn");
		signInBtn.addEventListener("click", core.signIn);

		html.cleanErrors();
	}

	signUpTemplate() {
		const userAuthBox = document.querySelector("#user-auth-box");

		const templateHTML = `
			<div class="sign-up" id="sign-up">
				<h2 class="heading-secondary">Sign up</h2>

				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="First name.." id="sign-up-name" />
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
					<div class="error-box" id="error-box"></div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignIn = document.querySelector("#switch-to-sign-in");
		switchToSignIn.addEventListener("click", html.signInTemplate);

		const signUpBtn = document.querySelector("#sign-up-btn");
		signUpBtn.addEventListener("click", core.signUp);

		const continueWithFacebookBtn = document.querySelector("#continue-with-facebook");
		continueWithFacebookBtn.addEventListener("click", core.continueWithFacebook);

		const continueWithGoogleBtn = document.querySelector("#continue-with-google");
		continueWithGoogleBtn.addEventListener("click", core.continueWithGoogle);

		html.cleanErrors();
	}

	resetPasswordTemplate() {
		const userAuthBox = document.querySelector("#user-auth-box");

		const templateHTML = `
			<div class="reset-password" id="reset-password-template">
				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="Your mail-address..." id="reset-password-mail" />
				</div>
				<div class="sign-up__row">
					<input class="btn btn--orange" type="submit" value="Reset" id="reset-password-btn" />
				</div>
				<div class="sign-up__row">
					<span class="sign-up__question" id="switch-to-log-in-area">Back to sign in area</span>
				</div>
				<div class="error-box" id="error-box"></div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignIn = document.querySelector("#switch-to-log-in-area");
		switchToSignIn.addEventListener("click", html.signInTemplate);

		const resetUserPasswordBtn = document.querySelector("#reset-password-btn");
		resetUserPasswordBtn.addEventListener("click", core.resetUserPassword);

		html.cleanErrors();
	}

	hideResetUserPassword() {
		const resetPasswordTemplateHTML = document.querySelector("#reset-password-template");
		resetPasswordTemplateHTML.innerHTML = "";
	}

	cleanErrors() {
		const errorTemplateHTML = document.querySelector("#error-box");

		document.body.classList.remove("add-error");
		errorTemplateHTML.innerHTML = "";
	}

	displayError(errors) {
		const errorTemplateHTML = document.querySelector("#error-box");

		document.body.classList.add("add-error");
		errorTemplateHTML.innerHTML = errors;
	}

	cleanSuccess() {
		document.body.classList.remove("add-success");
		errorTemplateHTML.innerHTML = "";
	}

	displaySuccess(success) {}

	// Pages elements tempalates
	headerTemplete(userName) {
		const header = document.querySelector("#app-header");
		let icon = "src/images/user-icon.png";

		const templateHTML = `
		<div class="header__container">
			<div class="header__logo-box">
				<img src="src/images/app-icon.png" alt="Social media logo">
			</div>
			<div class="header__search-box">
				<input type="text" placeholder="Search..">
			</div>
			<div class="header__user-icon-box">
				<figure class="header__user-picture-box" id="header-user-avatar">
					<img src="${icon}" alt="User profile image">
				</figure>
			</div>
		</div>
		`;

		header.innerHTML = templateHTML;

		const avatar = document.querySelector("#header-user-avatar");
		avatar.addEventListener("click", html.mainPageTemplate);
	}

	profileIntroTemplete() {
		const asideProfilIntro = document.querySelector("#aside-profile-intro");
		const templateHTML = `
			<div class="profile-intro__row">
				<h2>Profil intro</h2>
			</div>
			<div class="profile-intro__row">
				<span class="profile-intro__sub-titile">About me:</span>
				<p>My name is Patryk. I'm 25 years old and I'm enyoing of traveling and sighseeing. I love hitch-hiking, meet new people and get to know new facts about our planet!</p>
			</div>
			<div class="profile-intro__row">
				<span class="profile-intro__sub-titile">Visited places:</span>
				<p>Poland, Hungary, Cyprus, Turkey, Lanzarote, Teneryfa, Kosovo, Serbia, Montenegro, Croatia, Albania, Slovakia, Kazakhstan, Ukraine, Germany, Italy, Israel</p>
			</div>
			<div class="profile-intro__row">
				<span class="profile-intro__sub-titile">Want to see:</span>
				<p>Argentina, Columbia, UK, Uzbekistan, Iran, Mongolia</p>
			</div>
		`;

		asideProfilIntro.innerHTML = templateHTML;
	}

	addPostTemplate() {
		const addPostContainer = document.querySelector("#add-post-container");
		const templateHTML = `
			<div class="add-post__content">
				<textarea class="add-post__text-area" id="add-post-textarea" placeholder="Your post..."></textarea>
				<input class="btn btn--orange" id="add-post-btn" type="submit" value="Post">
			</div>
			<div class="error-box"></div>
		`;

		addPostContainer.innerHTML += templateHTML;

		const addPostBtn = document.querySelector("#add-post-btn");
		addPostBtn.addEventListener("click", core.addPostToDatabase);
	}

	addPostResetField(textArea) {
		textArea.value = "";
	}

	addPostOnWall(post) {
		const postsContainer = document.querySelector("#posts-container");
		const templateHTML = `
			<article class="posts__single-post">
				<div class="posts__info">
					<div class="posts__avatar">
						<img src="src/images/user-icon.png" alt="author">
					</div>
					<div class="posts__author">
						<h2>${post.userName}</h2>
						<time datetime="2008-02-14 20:00">${post.timestamp}</time>
					</div>
				</div>
				<p>${post.postText}</p>
				<div class="posts__control-panel">
					<li class="posts__single-control remove-post"><img src="src/images/svg/remove-btn.svg" alt="Remove icon"></li>
					<li class="posts__single-control like-post"><img src="src/images/svg/heart-btn.svg" alt="Heart icon"></li>
					<li class="posts__single-control comment-like"><img src="src/images/svg/chat-btn.svg" alt="Chat icon"></li>
				</div>
			</article>`;

		postsContainer.innerHTML += templateHTML;
	}

	singlePostTemplate(userPostsContainer, post, formattedTime, removePostBtnTemplate) {
		const templateHTML = `
			<article class="posts__single-post" id="${post.id}">
				<div class="posts__info">
					<div class="posts__avatar">
						<img src="src/images/user-icon.png" alt="author">
					</div>
					<div class="posts__author">
						<h2>${post.userName}</h2>
						<time datetime="2008-02-14 20:00">${formattedTime}</time>
					</div>
				</div>
				<p>${post.postText}</p>
				<hr>
				<div class="posts__likes">Likes: </div>
				<div class="posts__control-panel">
					<div class="remove-btn-post-container">${removePostBtnTemplate}</div>
					<li class="posts__single-control like-post"><img src="src/images/svg/heart-btn.svg" alt="Heart icon"></li>
					<li class="posts__single-control comment-like"><img src="src/images/svg/chat-btn.svg" alt="Chat icon"></li>
				</div>
			</article>
		`;

		userPostsContainer.innerHTML += templateHTML;

		const removePostBtns = Array.from(document.querySelectorAll('.remove-btn-post-container'));
		removePostBtns.forEach(removePostBtn => removePostBtn.addEventListener('click', html.removePostTemplate));

		const likePostBtns = Array.from(document.querySelectorAll('.like-post'));
		likePostBtns.forEach(likePostBtn => likePostBtn.addEventListener('click', core.likePost));

		const whoLikesContainer = document.querySelector('.posts__control-panel');
		html.whoLikesThisPost(post.likes, whoLikesContainer)
	}

	removePostTemplate(e) {
		const postToRemove = e.target.closest('.posts__single-post');
		const postsContainer = postToRemove.parentElement;
		const req = confirm('Are you sure?');

		if (req) {
			const id = Number(postToRemove.id);
			postsContainer.removeChild(postToRemove);

			core.removePostFromDatabase(id);
		}
	}

	likedPostTemplate(postTemplateHTML) {
		const likeContainer = postTemplateHTML.getElementsByClassName("like-post")[0];

		if (likeContainer.classList.contains('liked-post')) {
			likeContainer.classList.remove('liked-post');
		} else {
			likeContainer.classList.add('liked-post');
		}
	}

	whoLikesThisPost(likes, whoLikesContainer) {}

	settingsTemplate() {
		const settingsContainer = document.querySelector("#profile-settings");
		const templateHTML = `
			<div class="settings__row">
				<h2>Settings</h2>
			</div>
			<div class="settings__row">
				<a href="#" id="settings-home-page"><span class="settings__option">Home Page</span></a>
			</div>
			<div class="settings__row">
				<a href="#" id="settings-your-profile-page"><span class="settings__option">Your Profile</span></a>
			</div>
			<div class="settings__row">
				<a href="#" id="settings-your-fiends-page"><span class="settings__option">Your Fiends</span></a>
			</div>
			<div class="settings__row">
				<a href="#" id="edit-account-page"><span class="settings__option">Account Setting</span></a>
			</div>
			<div class="settings__row">
				<input class="btn btn--orange" type="submit" id="sign-out-btn" value="Sign Out">
			</div>
		`;

		settingsContainer.innerHTML = templateHTML;

		const signOutBtn = document.querySelector("#sign-out-btn");
		signOutBtn.addEventListener("click", core.signOut);

		const settingsHomePage = document.querySelector('#settings-home-page');
		settingsHomePage.addEventListener('click', html.mainPageTemplate);

		const settingsYourProfile = document.querySelector('#settings-your-profile-page');
		settingsYourProfile.addEventListener('click', html.yourProfilePage);

		const settingsPageBtn = document.querySelector('#edit-account-page');
		settingsPageBtn.addEventListener('click', html.editAccountsPageTemplate);

	}

	editAccountTemplate() {
		const settingsTemplate = document.querySelector("#edit-account");
		const templateHTML = `
			<div class="edit-account__row">
				<h2>Edit your account</h2>
			</div>
			<div class="edit-account__row">
				<input type="text" id="edit-account-user-name" placeholder="Change name..."> 
				<input class="btn btn--orange margin-top-small" type="submit" id="edit-account-user-name-btn" value="Your name...">
			</div>
			<div class="edit-account__row">
				<input type="text" id="edit-account-user-name" placeholder="Change email..."> 
				<input class="btn btn--orange margin-top-small" type="submit" id="edit-account-user-email-btn" value="Your email...">
			</div>
			<div class="edit-account__row">
				<input type="password" id="edit-account-user-password" placeholder="Change password...">
				<input class="btn btn--orange margin-top-small" type="submit" id="edit-account-user-password-btn" value="Your password...">
			</div>
			<div class="edit-account__row">
				<textarea id="edit-account-change-about-me" placeholder="Change about me..."></textarea>
				<input class="btn btn--orange margin-top-small" type="submit" id="edit-account-user-about-me-btn" value="About me...">
			</div>
			<div class="edit-account__row">
				<textarea id="edit-account-visited-places" placeholder="Change visited places..."></textarea>
				<input class="btn btn--orange margin-top-small" type="submit" id="edit-account-user-visited-places" value="Visited places...">
			</div>
			<div class="edit-account__row">
				<textarea id="edit-account-want-to-see" placeholder="Change want to see..."></textarea>
				<input class="btn btn--orange margin-top-small" type="submit" id="edit-account-user-want-to-see-btn" value="Change want to see...">
			</div>
		`;

		settingsTemplate.innerHTML = templateHTML;

		const editAccountUserNameBtn = document.querySelector('#edit-account-user-name-btn');
		editAccountUserNameBtn.addEventListener('click', core.changeUserNameInDatabase);

		const editAccountUserEmailBtn = document.querySelector('#edit-account-user-email-btn');
		editAccountUserEmailBtn.addEventListener('click', core.changeUserEmailInDatabase);

		const editAccountUserPasswordBtn = document.querySelector('#edit-account-user-password-btn');
		editAccountUserPasswordBtn.addEventListener('click', core.changeUserPasswordInDatabase);

		const editAccountUserAboutMeBtn = document.querySelector('#edit-account-user-about-me-btn');
		editAccountUserAboutMeBtn.addEventListener('click', core.changeUserAboutMeInDatabase);

		const editAccountUserVisitedPlaces = document.querySelector('#edit-account-user-visited-places');
		editAccountUserVisitedPlaces.addEventListener('click', core.changeUserVisitedPlacesInDatabase);

		const editAccountUserWantToSeeBtn = document.querySelector('#edit-account-user-want-to-see-btn');
		editAccountUserWantToSeeBtn.addEventListener('click', core.changeUserWantToSeeInDatabase);
	}

	userSingedInTemplete(userName) {
		const bodyTemplate = document.querySelector("#app-body");
		const templateHTML = `
			<header class="header" id="app-header"></header>
			<main class="main" id="app-main"></main>
		`;

		bodyTemplate.innerHTML = templateHTML;
		html.headerTemplete(userName);
	}

	// Pages Templates
	mainPageTemplate() {
		const main = document.querySelector("#app-main");
		main.innerHTML = `
			<aside class="profile-intro" id="aside-profile-intro"></aside>

			<div class="posts" id="posts-section">
				<div class="add-post" id="add-post-container"></div>
				<section class="posts__container" id="posts-container"></section>
			</div>

			<aside class="settings" id="profile-settings"></aside>
		`;

		html.profileIntroTemplete();
		html.addPostTemplate();
		html.settingsTemplate();
		core.getAllPostFromDatabase();
	}

	yourProfilePage() {
		const main = document.querySelector("#app-main");
		main.innerHTML = `
			<aside class="profile-intro" id="aside-profile-intro"></aside>

			<div class="posts" id="posts-section">
				<div class="add-post" id="add-post-container"></div>
				<div class="posts__titile">
					<h2>Your posts:</2>
				</div>
				<section class="posts__container" id="your-posts-container"></section>
			</div>

			<aside class="settings" id="profile-settings"></aside>
		`;

		html.profileIntroTemplete();
		html.addPostTemplate();
		html.settingsTemplate();
		core.getYourPostsFromDatabase();
	}


	editAccountsPageTemplate() {
		const main = document.querySelector("#app-main");
		main.innerHTML = `
			<aside class="profile-intro" id="aside-profile-intro"></aside>

			<div class="edit-account" id="edit-account"></div>

			<aside class="settings" id="profile-settings"></aside>
		`;

		html.profileIntroTemplete();
		html.settingsTemplate();
		html.editAccountTemplate();
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