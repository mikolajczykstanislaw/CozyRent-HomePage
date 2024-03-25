window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const profilePictureBlack = document.querySelector('.profile-icon-black');
	const profilePictureWhite = document.querySelector('.profile-icon-white');
	if (scrollY > 10) {
		header.classList.add('white-header');
		profilePictureBlack.style.display = "block"
		profilePictureWhite.style.display = "none"
	} else {
		header.classList.remove('white-header');
		profilePictureBlack.style.display = "none"
		profilePictureWhite.style.display = "block"
	}
});
