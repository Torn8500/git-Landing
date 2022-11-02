$(document).ready(function () {
	$('.cta, .monogo-form__button, .popup-text-order, .btn_click, button, a, #btn-order ').click(function (e) {
		window.onbeforeunload = null;
	});
});