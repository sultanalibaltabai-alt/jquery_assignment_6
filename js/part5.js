$(document).ready(function () {
    $(".accordion-content").hide();

    $(".accordion-button").click(function () {
        let content = $(this).next(".accordion-content");
        let isOpen = content.is(":visible");

        $(".accordion-content").slideUp(300);
        $(".accordion-button").removeClass("active");

        if (!isOpen) {
            content.slideDown(300);
            $(this).addClass("active");
        }
    });
});
