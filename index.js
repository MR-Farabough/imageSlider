(function imageSlider(btnOneEL, btnTwoEL, images) {
	// get the appropriate array of objects and then unshift and rear pop buttons
	const elArr = Array.from(document.querySelector('.slider').children);
	let slider = document.querySelector('.slider');
	const pop = elArr.pop();
	const shift = elArr.shift();
	// > first display three images
	function renderImg(imgArr, indexShuffle) {
		slider.innerHTML = '';
		if (imgArr.length > 3) {
			const length = Math.floor(imgArr.length / 2);
			imgArr = [
				imgArr[length - 1 + indexShuffle],
				imgArr[length + indexShuffle],
				imgArr[length + 1 + indexShuffle],
			];
		}
		slider.append(shift);
		imgArr.forEach((el) => {
			slider.append(el);
		});
		slider.append(pop);
	}
	renderImg(elArr, 0);
	// > if left button is clicked shift images down an index
	btnOneEL.addEventListener('click', () => {
		renderImg(elArr, -1);
		document.getElementById('left-btn').remove();
	});
	// > if right button is click shift images up an index
	btnTwoEL.addEventListener('click', () => {
		renderImg(elArr, 1);
		document.getElementById('right-btn').remove();
	});
})(
	document.getElementById('left-btn'),
	document.getElementById('right-btn'),
	document.querySelectorAll('.slide')
);
