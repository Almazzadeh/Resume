$(function () {


    // PRELOADER
    // var preloader = document.getElementById("preloader");

    // window.addEventListener('load', function(){
    //   preloader.style.display = 'none';
    // })

    var themeColor = '#008080';

    $('body').progressTracker()
    changeColor()

    // SETTINGS
    $('.bar').click(function () {
        $(this).toggleClass('active');
        $('.colorWrapper span.circle').toggleClass('active')
    })
    $('.colorWrapper span').each(function () {
        var color = $(this).data('color');
        var trDelay = $(this).data('delay');


        $(this).css('background', color);
        // $(this).css('transition-delay', trDelay);

        $(this).click(function (e) {

            $('.themeColor').css('color', color);
            $('.themeBg').css('background-color', color);
            themeColor = color;
            changeColor();
        })
    })


    // PROGRESS BAR SOFTWARE SKILLS



    $('.circlechart').circlechart()
    $('.circlechart').find('.success-stroke').css('stroke', themeColor);

    function changeColor() {
        // $('.progress-tracker ul').find('.active').css('background-color', themeColor);

        $('.circlechart').find('.success-stroke').css('stroke', themeColor);

        $('#archicad').LineProgressbar({
            percentage: 70,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#corelDraw').LineProgressbar({
            percentage: 55,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#illustrator').LineProgressbar({
            percentage: 55,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#photoshop').LineProgressbar({
            percentage: 90,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#html').LineProgressbar({
            percentage: 90,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#jquery').LineProgressbar({
            percentage: 87,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#csharp').LineProgressbar({
            percentage: 75,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

        $('#sql').LineProgressbar({
            percentage: 80,
            duration: 3000,
            fillBackgroundColor: themeColor,
            backgroundColor: '#e6e6e6',
            radius: '20px',
            height: '13px',
        })

    }


    $('.interest').find('span').each(function () {
        var opacity = $(this).data("opacity");
        $(this).css("opacity", opacity);
    })
})