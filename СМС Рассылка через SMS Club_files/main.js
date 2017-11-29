;;

var flag = {
    blockStatNumber: 0
};

var xsMaxWidth = 767;

$(document).ready(function(){
    // statBlockAnimate();
    $('.block-stat').onScreen({
        tolerance: 130,
        doIn: function(){
            if (flag.blockStatNumber == 0) {
                statBlockAnimate();
                flag.blockStatNumber = 1;
            }
        }
    });

    adaptiveTables('table.table');

    /*=============== BS Dropdown animation ===============*/
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

    /*=============== BS Tab Anchor ==============*/
    /*===== - Pay =====*/
    var bsAnchorUrl = document.location.toString();
    if (bsAnchorUrl.match('#tab-')) {
        $('.price-tabs a[href="#'+bsAnchorUrl.split('#tab-')[1]+']"').tab('show') ;
    }

    /*=============== Mark #! url ==============*/
    if (false) {
        $('a[href="#!"], a[href="#"]').css({
            'background': 'red',
            'color': 'white'
        });
    }

    /*=============== Fast test ===============*/
    var fastTestBtn = $('#ft_submit');
    fastTestBtn.click(function(){
        fastTest($(this));
    });
    if (fastTestBtn.length) {
        var number = $('input[name=ft_phone_number]');
        var numberOldVal = number.val();
        number.keyup(function(){
            if (number.val() != numberOldVal) {
                $(document).keypress(function (e) {
                    if (e.which == 13) {
                        fastTestBtn.click();
                    }
                });
            }
        });

    }
    /*=============== Smooth Anchor ===============*/
    $('a.smooth-anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });

    /*=============== To top btn ===============*/
    var btnToTop = $('.btn-to-top');
    btnToTop.hide();
    $(window).scroll(function(){
        if ( ($(document).scrollTop()-400) > 0 ) {
            btnToTop.fadeIn(500);
        } else {
            btnToTop.fadeOut(300);
        }
    });

    /*=============== Mobile Header ===============*/
    if ( $(window).width() <= xsMaxWidth) {
        mobileHeader();
    }

    $(window).resize(function(){
        if ( $(window).width() <= xsMaxWidth) {
            mobileHeader();
        }
    });

    $("[data-toggle='tooltip']").tooltip();

});

/*=============== FUNCTION ===============*/
/*===== - Stat Block Animation =====*/
function statBlockAnimate() {
    var separatorNumberStep = $.animateNumber.numberStepFactories.separator('.');

    $('#block_stat_years').animateNumber({
        number: 10,
        easing: 'easeInQuad',
    }, 4200);

    $('#block_stat_users').animateNumber({
        number: 15000,
        numberStep: separatorNumberStep,
        easing: 'easeInQuad',
    }, 4400);

    $('#block_stat_speed_from').prop('number', 20).animateNumber({
        number: 3,
        numberStep: function(now, tween) {
            var target = $(tween.elem),
                rounded_now = Math.round(now);

            target.text(rounded_now);
        },
        easing: 'easeInQuad',
    }, 4100);
    $('#block_stat_speed_to').prop('number', 60).animateNumber({
        number: 11,
        easing: 'easeInQuad',
        numberStep: function(now, tween) {
            var target = $(tween.elem),
                rounded_now = Math.round(now);

            target.text(rounded_now);
        },
    }, 4000);

    $('#block_stat_sms').animateNumber({
        number: 50,
        easing: 'easeInQuad',
    }, 4500);
}

function fastTest(button) {
    var number = $('input[name=ft_phone_number]');
    var btnText = button.html();
    var block = $('.fast-test');
    var currentLang = button.data('current-language');
    var isSnded = false;

    var langInterlayer = ( (currentLang ==  button.data('default-language'))) ? '' : '/'+currentLang;

    var requestUrl = document.location.origin + langInterlayer + '/ajax/send-sms';

    if (!isSnded) {
        $.ajax({
            url: requestUrl,
            type: 'POST',
            dataType: 'json',
            data: {
                ftData: {number: number.val()},
            },
            beforeSend: function () {
                button.prop('disabled', true);
                button.html('<i class="fa fa-circle-o-notch fa-spin"></i>');
            },
            success: function (response) {
                if (response.status == 'success') {
                    block.children('form').animate({
                        opacity: 0
                    }, 300, 'easeInQuart', function () {
                        block.addClass('bg-green-300');
                        $('.fast-test-alert').slideUp(300);
                        $(this).replaceWith('<div class="success-msg">' + response.message + '</div>');
                    });
                    isSnded = true;
                }
                else {

                    console.log(response);

                    $('.fast-test-alert').hide(0).html(constructAlert(response.status, response.message)).slideDown(500);
                    button.prop('disabled', false);
                    button.html(btnText);
                }
            }
        });
    }
}

function constructAlert(status, message) {
    return ''+
        '<div class="alert alert-'+status+' alert-dismissible" role="alert">' +
            '<button type="button" class="close pull-right" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            message +
        '</div>';
}

function adaptiveTables(selector) {
    var element = $(selector);

    element.wrap('<span class="adaptive-table-wrapper"></span>');
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function mobileHeader() {
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 40 ) {
            $('.country').slideUp(300);
            $('header.main').addClass('header-small');
        } else {
            $('.country').slideDown(300);
            $('header.main').removeClass('header-small');
        }
    });
}


;;