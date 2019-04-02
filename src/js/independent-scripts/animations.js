setTimeout(() => {
	const userAvatar = document.querySelector('.header__user-picture-box');

	if (userAvatar) {
		function menuHandler() {
			const header = document.querySelector('#app-header');

			if (header.classList.contains('nav-active')) {
				header.classList.remove('nav-active');

			} else {
				header.classList.add('nav-active');
			}
		}

		userAvatar.addEventListener('click', menuHandler);
	}

	const introSildeDownArrow = document.querySelector('#profile-intro-slide-control');
	const settingsSlideDownArrow = document.querySelector('#settings-slide-control');

	function introHandler() {
		if (document.body.classList.contains('intro-slide-down')) {
			document.body.classList.remove('intro-slide-down');
		} else {
			document.body.classList.add('intro-slide-down');
		}
	}

	function settingsHandler() {
		if (document.body.classList.contains('settings-slide-down')) {
			document.body.classList.remove('settings-slide-down');
		} else {
			document.body.classList.add('settings-slide-down');
		}
	}


	introSildeDownArrow.addEventListener('click', introHandler);
	settingsSlideDownArrow.addEventListener('click', settingsHandler);

}, 4000);