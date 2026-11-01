$(document).ready(function () {
    let itemNumber = 3;

    $("#addLast").click(function () {
        itemNumber++;
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
    });

    $("#addFirst").click(function () {
        itemNumber++;
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    });

    $("#removeLast").click(function () {
        $("#itemList li:last").remove();
    });

    let showingSun = true;

    $("#changeImage").click(function () {
        if (showingSun) {
            $("#attributeImage").attr("src", "../assets/images/moon.svg");
            $("#attributeImage").attr("alt", "Illustration of mountains at night");
        } else {
            $("#attributeImage").attr("src", "../assets/images/sun.svg");
            $("#attributeImage").attr("alt", "Illustration of mountains in daylight");
        }

        showingSun = !showingSun;
    });

    $("#changeLink").click(function () {
        $("#resourceLink").attr("href", "https://api.jquery.com/");
        $("#resourceLink").text("Open jQuery API documentation");
    });

    $("#nameInput").on("input", function () {
        let name = $(this).val();
        $("#namePreview").text(name);
    });

    $("#emailInput").on("input", function () {
        let email = $(this).val();
        $("#emailPreview").text(email);
    });

    $("#contactForm").submit(function (event) {
        event.preventDefault();
    });
});
