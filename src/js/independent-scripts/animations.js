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

}, 1500);