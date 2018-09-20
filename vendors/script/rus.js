$(function () {

    $('#rus').click(function () {
        // ABOUT
        $('#name').html("Джейхун");
        $('#surname').html("Алмаззаде");
        $('#profession').html("Программирование");
        $('#birthday').html("13 Март 1995");

        // EDUCATION
        $('#educationHeader').html("Образование");
        $('#school, #schoolMobile').html("Школа №158");
        $('#lyceum, #lyceumMobile').html("Технико-Гуманитарный Лицей");
        $('#university, #universityMobile').html("Азербайджанский Технический Университет");

        // EXPERIENCE
        $('#experienceHeader').html("Стаж");
        // freelance
        $(".experience .square").eq(0).children("h4").html("Внештатно");
        $(".experience .square").eq(0).children("h6").html("Дизайнер");
        // WConSC
        $(".experience .square").eq(1).children("h6").html("Дизайнер");
        // code academy
        $(".experience .square").eq(2).children("h6").html("Ментор");

        // SOFTWARE SKILLS
        $('#softwareHeader').html("Технические навыки");

        // LANGUAGE SKILLS AND INTERESTS
        $('#languageHeader').html("Знание языков");
        $('#languageRus .circle-chart__subline').html("Русский язык");
        $('#languageEng .circle-chart__subline').html("Английский язык");
        $('#interestHeader').html("Интересы");
        $('.gaming').html("Видео игры");
        $('.music').html("Музыка");
        $('.reading').html("Книги");
        $('.cinema').html("Кино");
    })
})