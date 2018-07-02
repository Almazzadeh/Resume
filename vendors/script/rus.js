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