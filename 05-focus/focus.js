$(document).ready(function() {
	var list = $('ul'),
		listItems = list.find('li');
	$('.delete').on('click', function() {
		$(this).parent().remove();
		listItems.find('.delete').first().focus();
	});
});
