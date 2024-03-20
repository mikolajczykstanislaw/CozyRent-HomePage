window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (scrollY > 10) {
		header.classList.add('white-header');
	} else {
		header.classList.remove('white-header');
	}
});
