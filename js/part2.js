$(document).ready(function () {
    $("#hideText").click(function () {
        $("#visibilityText").hide();
    });

    $("#showText").click(function () {
        $("#visibilityText").show();
    });

    $("#toggleText").click(function () {
        $("#visibilityText").toggle();
    });

    $("#fadeOutImage").click(function () {
        $("#fadeImage").fadeOut(400);
    });

    $("#fadeInImage").click(function () {
        $("#fadeImage").fadeIn(400);
    });

    $("#fadeToggleImage").click(function () {
        $("#fadeImage").fadeToggle(400);
    });

    $("#slideUpPanel").click(function () {
        $("#slidePanel").slideUp(400);
    });

    $("#slideDownPanel").click(function () {
        $("#slidePanel").slideDown(400);
    });

    $("#slideTogglePanel").click(function () {
        $("#slidePanel").slideToggle(400);
    });
});
