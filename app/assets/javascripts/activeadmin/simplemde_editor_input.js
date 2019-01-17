$(document).ready(function () {
    $('.simplemde-editor').each(function () {
        var options = { };
        options = $.extend({}, options, $(this).data('options'));
        editor = new SimpleMDE( { 
			element: $(this).get(0), 
			options: options 
		});
		$(this).data({editor: editor});
    });
});