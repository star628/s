

$(document).ready(function () {

    $("#nav_toggle").click(function () {
        $("nav ul.main_menu").slideToggle();
        $(this).toggleClass("fa-times");
    })

    $(".faqs .ques").click(function () {
        $(this).find("i").toggleClass("fa-times");
        $(this).find("p").slideToggle();
    })

    $(".ico").click(function () {
        var con = $(this).parent().find(".ser_cards").html();
        $(".main_sec").html(con);
    })


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $("header").addClass("nav_fixed");
            $(".free_quote_btn").css("border", "2px solid black");
            $("header nav ul li a").addClass("h2")
        }
        else {
            $("header").removeClass("nav_fixed");
            $(".free_quote_btn").css("border", "2px solid white")
            $("header nav ul li a").removeClass("h2")
        }
    });

     var c = $("#card_1").html();
        $(".main_sec").html(c);

    
    

    $(".skill").each(function() {
     var per = $(this).find("p").html();
      $(this).css("width",per)
    });
 

})