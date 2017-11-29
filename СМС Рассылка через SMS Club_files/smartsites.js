;;

jQuery.fn.smartsitesSlider = function(params) { // - Plugin start

	/*========== Options ==========*/
	var settings = $.extend({
		delay: 6000,
        animHideTime: 1000,
        firstEDGEItemId: 'EDGE-82590255',
		autoplay: true
	}, params);

	/*========== Main var ==========*/
	var slider = $(this);

    var firstItem = slider.find('.item').first();
    var lastItem = slider.find('.item').last();

	var controlBtn = slider.find('.control');
	var currentItem = $('.item.active');

	var	activeSlideEdgeId;
	var activeEdgeSlide;

    var autoPlayTimer;

	/*========== Functions ==========*/
	function activateItem (itemSelector, activateButton) {
		slider.find('.item.active').removeClass('active');
		slider.find('.control.active').removeClass('active');

		slider.find( itemSelector ).addClass('active');
        currentItem = $('.item.active');

		activateButton.addClass('active');

		edgeActivate ();
	}

	function edgeActivate () {
		activeSlideEdgeId = slider.find('.item.active').find('.edge-animation').data('slide-id');
		activeEdgeSlide = AdobeEdge.getComposition(activeSlideEdgeId).getStage();
		activeEdgeSlide.play(0);
	}

    function edgeStop () {
        activeSlideEdgeId = slider.find('.item.active').find('.edge-animation').data('slide-id');
        activeEdgeSlide = AdobeEdge.getComposition(activeSlideEdgeId).getStage();
        activeEdgeSlide.stop();
    }

	function autoPlay (delay) {
		var nextItem;

        autoPlayTimer = setInterval(function(){

            if (currentItem.attr('id') == lastItem.attr('id')) {
                nextItem = firstItem;
            }
            else {
                nextItem = currentItem.next('.item');
            }

            activeEdgeSlide.play( 'center' );

            setTimeout(function(){
                activateItem( '#' + nextItem.attr('id'), slider.find('.control[data-item='+nextItem.attr('id')+']') );
            } , settings.animHideTime );

		}, delay);
	}
	
	/*========== Init ==========*/
	/*===== - Adobe edge stop animation =====*/
	var slide1;

	AdobeEdge.bootstrapCallback(function() {
		slide1 = AdobeEdge.getComposition(settings.firstEDGEItemId).getStage();
		slide1.stop();

		edgeActivate();
	});

	slider.find('.control[data-item=' + currentItem.attr('id') + ']').addClass('active');

    /*========== Slider actions ==========*/
    /*===== - Autoplay =====*/
	if (settings.autoplay == true) {
        autoPlay(settings.delay);
    }


    /*===== - Click =====*/
	controlBtn.click(function() {
        if (settings.autoplay == true) clearInterval(autoPlayTimer);

		var c_nextItem;
		var thisButton = $(this);
		c_nextItem = $(this).data('item');

		activeEdgeSlide.play( 'center' );

		setTimeout(function(){
			activateItem('#' + c_nextItem, thisButton);
            if (settings.autoplay == true) autoPlay(settings.delay);
		} , settings.animHideTime );
	});
} // - Plugin end

;;