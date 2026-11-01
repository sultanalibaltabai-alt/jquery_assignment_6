$(document).ready(function () {
    $("#startBasic").click(function () {
        $("#basicBox").stop(true).animate({
            left: 130,
            width: 100,
            height: 100
        }, 700);
    });

    $("#resetBasic").click(function () {
        $("#basicBox").stop(true).animate({
            left: 0,
            width: 60,
            height: 60
        }, 400);
    });

    $("#startSequence").click(function () {
        $("#sequenceBox").stop(true).css({
            left: 0,
            top: 0,
            width: 60,
            height: 60
        });

        $("#sequenceBox")
            .animate({ left: 130 }, 400)
            .animate({ top: 80 }, 400)
            .animate({ width: 35, height: 35 }, 400)
            .animate({ left: 0, top: 0, width: 60, height: 60 }, 500);
    });

    $("#resetSequence").click(function () {
        $("#sequenceBox").stop(true).css({
            left: 0,
            top: 0,
            width: 60,
            height: 60
        });
    });

    $("#startCombined").click(function () {
        $("#combinedBox").stop(true).animate({
            left: 130,
            top: 50,
            width: 110,
            height: 110,
            opacity: 0.3
        }, 800);
    });

    $("#resetCombined").click(function () {
        $("#combinedBox").stop(true).animate({
            left: 0,
            top: 0,
            width: 60,
            height: 60,
            opacity: 1
        }, 400);
    });
});
