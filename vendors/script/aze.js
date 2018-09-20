$(function () {

    $('#aze').click(function () {
        // ABOUT
        $('#name').html("Ceyhun");
        $('#surname').html("Almazzadə");
        $('#profession').html("Proqramlaşdırma");
        $('#birthday').html("13 Mart 1995");

        // EDUCATION
        $('#educationHeader').html("Təhsil");
        $('#school, #schoolMobile').html("158 №li məktəb");
        $('#lyceum, #lyceumMobile').html("Texniki Humanitar Lisey");
        $('#university, #universityMobile').html("Azərbaycan Texniki Universiteti");

        // EXPERIENCE
        $('#experienceHeader').html("Təcrübə");
        // freelance
        $(".experience .square").eq(0).children("h4").html("Freelance");
        $(".experience .square").eq(0).children("h6").html("Dizayner");
        // WConSC
        $(".experience .square").eq(1).children("h6").html("Dizayner");
        // code academy
        $(".experience .square").eq(2).children("h6").html("Mentor");
        

        // SOFTWARE SKILLS
        $('#softwareHeader').html("Texniki Biliklər");

        // LANGUAGE SKILLS AND INTERESTS
        $('#languageHeader').html("Dil bilikləri");
        $('#languageRus .circle-chart__subline').html("Rus dili");
        $('#languageEng .circle-chart__subline').html("İngilis dili");
        $('#interestHeader').html("Maraqlar");
        $('.gaming').html("Video Oyun");
        $('.music').html("Musiqi");
        $('.reading').html("Kitab");
        $('.cinema').html("Kino");
    })
})