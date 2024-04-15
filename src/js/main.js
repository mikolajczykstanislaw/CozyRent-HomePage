const footerYear = document.querySelector('.footer__year');

('use strict');

let isScrolled = false;
let headerInitialState = null;
let profileBlackInitialState = null;
let profileWhiteInitialState = null;
let profileInInitialState = null;
let profileUpInitialState = null;

let header = document.querySelector('header');
let profilePictureBlack = document.querySelector('.profile-icon-black');
let profilePictureWhite = document.querySelector('.profile-icon-white');
let profileIconIn = document.querySelector('.sign-in-link');
let profileIconUp = document.querySelector('.sign-up-link');

function restoreInitialStates() {
	if (headerInitialState !== null) {
		header.className = headerInitialState;
	}
	if (profileBlackInitialState !== null) {
		profilePictureBlack.style.display = profileBlackInitialState;
	}
	if (profileWhiteInitialState !== null) {
		profilePictureWhite.style.display = profileWhiteInitialState;
	}
	if (profileInInitialState !== null) {
		profileIconIn.style.display = profileInInitialState;
		profileIconIn.style.color =
			profileInInitialState === 'block' ? 'black' : 'white';
	}
	if (profileUpInitialState !== null) {
		profileIconUp.style.display = profileUpInitialState;
		profileIconUp.style.color =
			profileUpInitialState === 'block' ? 'black' : 'white';
	}
}

window.addEventListener('scroll', function () {
	if (window.innerWidth < 1024) {
		if (scrollY > 10 && !isScrolled) {
			headerInitialState = header.className;
			profileBlackInitialState = profilePictureBlack.style.display;
			profileWhiteInitialState = profilePictureWhite.style.display;
			profileInInitialState = profileIconIn.style.display;
			profileUpInitialState = profileIconUp.style.display;
			isScrolled = true;
		}
		if (scrollY > 10) {
			header.classList.add('white-header');
			profilePictureBlack.style.display = 'block';
			profilePictureWhite.style.display = 'none';
			profileIconIn.style.display = 'none';
			profileIconUp.style.display = 'none';
		} else {
			restoreInitialStates();
			isScrolled = false;
		}
	} else if (window.innerWidth >= 1024) {
		if (scrollY > 10 && !isScrolled) {
			headerInitialState = header.className;
			profileBlackInitialState = profilePictureBlack.style.display;
			profileWhiteInitialState = profilePictureWhite.style.display;
			profileInInitialState = profileIconIn.style.display;
			profileUpInitialState = profileIconUp.style.display;
			isScrolled = true;
		}
		if (scrollY > 10) {
			header.classList.add('white-header');
			profilePictureBlack.style.display = 'none';
			profilePictureWhite.style.display = 'none';
			profileIconIn.style.display = 'block';
			profileIconIn.style.color = 'black';
			profileIconUp.style.display = 'block';
			profileIconUp.style.color = 'black';
		} else {
			restoreInitialStates();
			isScrolled = false;
		}
	}
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
