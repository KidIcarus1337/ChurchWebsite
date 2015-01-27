$(function() {

    /* Button CSS Interactions */
    $(".nav_section li").hover(function() {
        $(this).css({"color":"#464646"});
    });

    $(".nav_section li").mousedown(function() {
        $(this).css({"color":"#c3c3c3"});
    });

    $(".nav_section li").on("mouseup mouseleave", function() {
        $(this).css({"color":"#c3c3c3"})
    });

    $(".nav_section li").click(function() {
        if (!$(this).hasClass("nav_active")) {
            var $this = $(this);
            var prev_nav;
            switch($(".nav_active").text()) {
                case "SERVICE SHEET":
                    prev_nav = $("#service_sheet");
                    break;
                case "CLASS MATERIALS":
                    prev_nav = $("#class_materials");
                    break;
                case "BOOKLETS":
                    prev_nav = $("#booklets");
                    break;
                default:
                    console.log("Previous nav error.");
            }
            $(".nav_active").removeClass("nav_active");
            $this.addClass("nav_active");
            prev_nav.fadeOut("fast", function() {
                switch($this.text()) {
                    case "SERVICE SHEET":
                        $("#service_sheet").fadeIn("fast");
                        break;
                    case "CLASS MATERIALS":
                        $("#class_materials").fadeIn("fast");
                        break;
                    case "BOOKLETS":
                        $("#booklets").fadeIn("fast");
                        break;
                    default:
                        console.log("Switch error.");
                }
            });
        }
    });

    var $prev_classes = $("#prev_classes > div");
    var alphabeticallyOrderedDivs = $prev_classes.sort(function (a, b) {
        return $(a).find("li").text() > $(b).find("li").text();
    });
    $("#prev_classes").html(alphabeticallyOrderedDivs);

    $(".slick_carousel").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
    });

    $(".prev_classes_list li").hover(function() {
        $(this).css({"background-color":"#F0F0F0"});
    });

    $(".prev_classes_list li").on("mouseup mouseleave", function() {
        $(this).css({"background-color":"transparent"})
    });
});