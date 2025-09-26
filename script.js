//your JS code here. If required.
let colorSelect = document.getElementById('colorSelect');
let removebtn = document.querySelector('input');

removebtn.addEventListener('click', () => {
	colorSelect.remove(colorSelect.selectedIndex);
});