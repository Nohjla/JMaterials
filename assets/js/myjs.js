$(function () {
		  $(document).scroll(function () {
			  var $nav = $(".navbar-custom");
			  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
			});
		});

		$(".progress div").each(function () {
		    var display = $(this),
		        currentValue = parseInt(display.text()),
		        nextValue = $(this).attr("aria-valuenow"),
		        diff = nextValue - currentValue,
		        step = (0 < diff ? 1 : -1);
		    if (nextValue == "0") {
		        $(display).css("padding", "0");
		    } else {
		        $(display).css("color", "#fff").animate({
		            "width": nextValue + "%"
		        }, "slow");
		    }

		    for (var i = 0; i < Math.abs(diff); ++i) {
		        setTimeout(function () {
		            currentValue += step
		            display.html(currentValue + "%");
		        }, 20 * i);
		    }
		});