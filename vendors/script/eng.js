$(function () {

    $('#eng').click(function () {
        // ABOUT
        $('#name').html("Jeyhun");
        $('#surname').html("Almazzade");
        $('#profession').html("Web developer");
        $('#birthday').html("13 March 1995");

        // EDUCATION
        $('#educationHeader').html("Education");
        $('#school, #schoolMobile').html("№158 High School");
        $('#lyceum, #lyceumMobile').html("Technical Humanitarian Lyceum");
        $('#university, #universityMobile').html("Azerbaijan Technical University");

        // SOFTWARE SKILLS
        $('#softwareHeader').html("Software Skills");

        // LANGUAGE SKILLS AND INTERESTS
        $('#languageHeader').html("Languages");
        $('#languageRus .circle-chart__subline').html("Russian");
        $('#languageEng .circle-chart__subline').html("English");
        $('#interestHeader').html("Interests");
        $('.gaming').html("Gaming");
        $('.music').html("Music");
        $('.reading').html("Reading");
        $('.cinema').html("Cinema");

        // SECTION POSITION
        $('#progress-tracker li .content').eq(0).html("About")
        $('#progress-tracker li .content').eq(1).html("Education")
        $('#progress-tracker li .content').eq(2).html("Software Skills")
        $('#progress-tracker li .content').eq(3).html("Languages and Interests")
    })
})