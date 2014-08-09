(function ($) {
	'use strict';
	$.fn.dynart = function (sel) {
		return this.on("mouseenter", sel, function () {
			var $div, $copy;
			$div = $(this).closest('div.chart-art');
			$copy = $div.find('a.copy');
			if ($copy.length === 0) {
				$copy = $div
					.find('a.mini').clone().hide()
					.removeClass('mini').addClass('copy').prependTo($div)
					.fadeIn()
					.on("mouseleave", function () {
						$(this).fadeOut();
					});
			} else {
				$copy.fadeIn();
			}
		});
	};
}(jQuery));