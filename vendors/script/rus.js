$(function () {

    $('#rus').click(function () {
        // ABOUT
        $('#name').html("Джейхун");
        $('#surname').html("Алмаззаде");
        $('#profession').html("Программирование");
        $('#birthday').html("13 Март 1995");

        // EDUCATION
        $('#educationHeader').html("Образование");
        $('#school').html("Школа №158");
        $('#lyceum').html("Технико-Гуманитарный Лицей");
        $('#university').html("Азербайджанский Технический Университет");

        // SOFTWARE SKILLS
        $('#softwareHeader').html("Технические навыки");

        // LANGUAGE SKILLS AND INTERESTS
        $('#languageHeader').html("Знание языков");
        $('#languageRus .circle-chart__subline').html("Русский язык");
        $('#languageEng .circle-chart__subline').html("Английский язык");
        $('#interestHeader').html("Интересы");
        $('#gamingText').html("Видео игры");
        $('#musicText').html("Музыка");
        $('#readingText').html("Книги");
        $('#cinemaText').html("Кино");

        // SECTION POSITION
        $('#progress-tracker li .content').eq(0).html("Обо мне")
        $('#progress-tracker li .content').eq(1).html("Образование")
        $('#progress-tracker li .content').eq(2).html("Технические навыки")
        $('#progress-tracker li .content').eq(3).html("Знание языков и Интересы")
    })
})