$(function () {
    var themeColor = '#008080';

    changeColor()

    // ***** MENU START HERE *****
    var bar = $('#menuWrapper .bar');
    var language = $('#menuWrapper .language');
    var position = $('#menuWrapper .position');
    var color = $('#menuWrapper .color');
    var themeColor = '#008080';

    bar.click(function () {
        if (bar.hasClass("active")) {
            language.css({
                'left': '',
                'opacity': '0'
            })
            position.css({
                'top': '',
                'opacity': '0'
            })
            color.css({
                'top': '',
                'opacity': '0'
            })
            bar.removeClass('active')
            $('.colorWrapper .circle').css('transition-delay', '.4s');
            HideColorPalette();
            $('.languageWrapper .circle').css('transition-delay', '.2s');
            HideLanguageSection();
            HidePositionSection();
        } else {
            language.css({
                'left': '-60px',
                'opacity': '1'
            })
            position.css({
                'top': '-60px',
                'opacity': '1'
            })
            color.css({
                'top': '60px',
                'opacity': '1'
            })
            $('.colorWrapper .circle').css('transition-delay', '');
            $('.languageWrapper .circle').css('transition-delay', '');
            bar.addClass('active')
        }

        $('.colorWrapper .circle').each(function () {
            var mainColor = $(this).data('color');

            $(this).css('background', mainColor);

            $(this).click(function (e) {
                $('.themeColor').css('color', mainColor);
                $('.themeBg').css('background-color', mainColor);
                themeColor = mainColor;
                changeColor();

                if ($(this).data("textcolor") != null) {
                    $('.themeBg').css('color', $(this).data("textcolor"));
                    $('.interestCircle').css('color', $(this).data("textcolor"));
                } else {
                    $('.themeBg').css('color', "");
                    $('.interestCircle').css('color', "");
                }
            })
        })
    })

    // CLICK COLOR
    $('.clickColor').click(function () {
        if ($(this).hasClass('active')) {
            HideColorPalette();
        } else {
            $('.colorWrapper .circle').eq(0).css('top', '62px');
            $('.colorWrapper .circle').eq(1).css('top', '101px');
            $('.colorWrapper .circle').eq(2).css('top', '140px');
            $('.colorWrapper .circle').eq(3).css('top', '179px');
            $('.colorWrapper .circle').eq(4).css('top', '218px');
            $('.colorWrapper .circle').eq(5).css('top', '257px');

            $(this).addClass('active');
            HideLanguageSection();
            HidePositionSection();
        }
    })

    // CLICK LANGUAGE
    $('.clickLanguage').click(function () {
        if ($(this).hasClass('active')) {
            HideLanguageSection()
        } else {
            HideColorPalette();
            HidePositionSection();
            $('.clickLanguage').addClass('active');
            $('.languageWrapper .circle').eq(0).css('left', '-25px');
            $('.languageWrapper .circle').eq(1).css('left', '-64px');
            $('.languageWrapper .circle').eq(2).css('left', '-103px');

        }
    })

    // CLICK POSITION
    $('.clickPosition').click(function () {
        if ($(this).hasClass('active')) {
            HidePositionSection()
        } else {
            HideColorPalette();
            HideLanguageSection();
            $(this).addClass('active')
            $('.positionWrapper .circle').eq(3).css('top', '-30px');
            $('.positionWrapper .circle').eq(2).css('top', '-69px');
            $('.positionWrapper .circle').eq(1).css('top', '-108px');
            $('.positionWrapper .circle').eq(0).css('top', '-147px');
        }
    })

    // HIDE COLOR SECTION
    function HideColorPalette() {
        $('.clickColor').removeClass('active');
        $('.colorWrapper .circle').eq(0).css('top', '');
        $('.colorWrapper .circle').eq(1).css('top', '');
        $('.colorWrapper .circle').eq(2).css('top', '');
        $('.colorWrapper .circle').eq(3).css('top', '');
        $('.colorWrapper .circle').eq(4).css('top', '');
        $('.colorWrapper .circle').eq(5).css('top', '');
    }

    // HIDE LANGUAGE SECTION
    function HideLanguageSection() {
        $('.clickLanguage').removeClass('active');
        $('.languageWrapper .circle').eq(0).css('left', '');
        $('.languageWrapper .circle').eq(1).css('left', '');
        $('.languageWrapper .circle').eq(2).css('left', '');
    }

    // HIDE POSITION SECTION
    function HidePositionSection() {
        $('.clickPosition').removeClass('active');
        $('.positionWrapper .circle').eq(0).css('top', '');
        $('.positionWrapper .circle').eq(1).css('top', '');
        $('.positionWrapper .circle').eq(2).css('top', '');
        $('.positionWrapper .circle').eq(3).css('top', '');
    }

    //GO TO SECTION
    $('.positionWrapper .circle').click(function () {
        var className = $(this).data("class");

        var positionY = $("." + className).offset().top;
        $('html, body').animate({ scrollTop: positionY }, 500);
    })

    // ***** MENU END HERE *****

    // ***** SOFTWARE SKILLS *****
    $('.myprogress-bar .title').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 2500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + "%");
                }
            });
    });

    $(".myprogress-bar").each(function () {
        var maxWidth = $(this).data("width");

        $(this).animate({
            width: maxWidth + "%"
        }, 2500)
    })


    // ***** LANGUAGE SKILLS PLUGIN *****
    $('.circlechart').circlechart()
    $('.circlechart').find('.success-stroke').css('stroke', themeColor);

    // INTEREST CIRCLES
    $('.interest').find('span').each(function () {
        var opacity = $(this).data("opacity");
        $(this).css("opacity", opacity);
    })

    // CHANGE COLOR FUNCTION
    function changeColor() {
        $('.circlechart').find('.success-stroke').css('stroke', themeColor);

        $(".interestCircle").each(function () {
            var alpha = $(this).data("rgba");
            var r = hexToRgb(themeColor).r;
            var g = hexToRgb(themeColor).g;
            var b = hexToRgb(themeColor).b
            $(this).css('background-color', "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")")
        })
    }




    // FROM HEX TO RGB
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
})