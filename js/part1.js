$(document).ready(function () {
    $("#changeSelectors").click(function () {
        $("#idExample").text("ID selector: text changed with .text()");
        $(".classExample").html("Class selector: <strong>changed with .html()</strong>");
        $("em").css("color", "#1769aa");
        $("em").css("font-weight", "bold");
    });
});
