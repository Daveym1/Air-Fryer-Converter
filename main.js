const oven = document.getElementById('oven');
const oven1 = document.getElementById('oven1');
const oven2 = document.getElementById('oven2');

oven.addEventListener('change', function () {
	console.log('Selected value:', oven.value);
	if (oven.value == 'air') {
		oven1.innerHTML = 'Coventional';
		oven2.innerHTML = 'Fan';
	}
});
