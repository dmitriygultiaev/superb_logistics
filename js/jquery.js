$(document).ready(function() {
    
    $('.mobile_menu_button').click(function(event){
        $('.mobile_menu_container, .mobile_menu_button').toggleClass('active');
        $('html').toggleClass('no_scroll');
    });

    $('.link').click(function(event){
        $('.mobile_menu_container, .mobile_menu_button').removeClass('active');
        $('html').removeClass('no_scroll');
    });

});

$(document).ready(function() {
    
    $('.first_arrow').click(function(){
        $('.first_arrow').toggleClass('active');
        $(".first_desc").slideToggle(300);
        return false;
    });

    $('.second_arrow').click(function(){
        $('.second_arrow').toggleClass('active');
        $(".second_desc").slideToggle(300);
        return false;
    });

    $('.third_arrow').click(function(){
        $('.third_arrow').toggleClass('active');
        $(".third_desc").slideToggle(300);
        return false;
    });

    $('.fourth_arrow').click(function(){
        $('.fourth_arrow').toggleClass('active');
        $(".fourth_desc").slideToggle(300);
        return false;
    });

});

$('.part').hover(
    function() {
        $('.where_text_city').html($(this).attr('district-data'));
    },

    function() {
        $('.where_text_city').html($('.where_text_city').attr('default-data'));
    }
)

$(function(){
    $(window).scroll(function() {
      var top = $(document).scrollTop();
      if (top < 1) $(".nav").css("box-shadow", "none");
      else $(".nav").css("box-shadow", "0 0 10px rgba(0,0,0,0.5)");
    });
  });

$(".open_popup").click(function(e) {
    e.preventDefault();
    $(".pop_up").fadeIn(600);
    $('html').addClass('no_scroll')
});

$(".pop_up_close").click(function(e) {
    e.preventDefault();
    $(".pop_up").fadeOut(600);
    $('html').removeClass('no_scroll')
})