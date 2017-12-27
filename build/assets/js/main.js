$(function(){
    /* js-header
    ====================================================*/
    $("#js-header-tabs .tab_item").not(":first").hide();
    $("#js-header-tabs .wrapper .tab").click(function() {
        $("#js-header-tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $("#js-header-tabs .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    /* header-content-tabs
    ====================================================*/
    $("#js-header-content-tabs .tab_item").not(":first").hide();
    $("#js-header-content-tabs .wrapper .tab").click(function() {
        $("#js-header-content-tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $("#js-header-content-tabs .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    /* parralax
    ====================================================*/
    $.stellar({
        responsive: true,
        horizontalOffset: 40
    });

    /* slick
    ====================================================*/
    $('#js-reviews-slider').slick();


});