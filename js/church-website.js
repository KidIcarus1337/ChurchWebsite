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

    /* Resources nav switch */
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

    /* Alphabetically order previous class materials list */
    var $list = $(".prev_classes_list");
    var $listLi = $("a", $list);

    $listLi.sort(function (a, b) {
        var keyA = $(a).text();
        var keyB = $(b).text();
        return (keyA > keyB) ? 1 : -1;
    });

    var i = 1;
    var appendList = $("#prev_classes > div:nth-of-type(" + i + ") ul");

    $(".prev_classes_list").html("");

    $.each($listLi, function (index, row) {
        if ($("#prev_classes > div:nth-of-type(" + i + ") ul li").length < 10) {
            $(appendList).append(row);
        } else {
            i++;
            appendList = $("#prev_classes > div:nth-of-type(" + i + ") ul");
            $(appendList).append(row);
        }
    });

    /* Initiate slick slider */
    $(".slick_carousel").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
    });

    /* Classes search function */
    $("#prev_classes_search").keyup(function() {
        var search_value = $(this).val();
        var classes_results = [];
        $.each($listLi, function(index, row) {
            console.log(row);
            if (row.text().toLowerCase().indexOf(search_value.toLowerCase()) >= 0) {
                classes_results.append(row);
            }
        });
        if (!classes_results.length > 0) {
            $("#prev_classes").html("<h2 style='vertical-align:middle'>No Results</h2>");
        } else {
            $("#prev_classes").html("<div><ul class='prev_classes_list'></ul></div>");
            $.each(classes_results, function(index, row) {
                if ($(".prev_classes_list:last-of-type").length < 10) {
                    $(".prev_classes_list:last-of-type").append(row)
                } else {
                    $("#prev_classes").append("<div><ul class='prev_classes_list'></ul></div>");
                    $(".prev_classes_list:last-of-type").append(row)
                }
            });
        }
    });

    /* Button CSS Interactions */
    $(".prev_classes_list li").hover(function() {
        $(this).css({"background-color":"#F0F0F0"});
    });

    $(".prev_classes_list li").on("mouseup mouseleave", function() {
        $(this).css({"background-color":"transparent"})
    });
});