$(document).ready(function(){

  $('#logo-nav').css('height', $('#logo-bars').height()+20);

  $('.nav-bubble').hover(
    function(){
      $(this).animate({
        width: '300px',
        opacity: 1
      }, 500);
      $(this).children('.bubble-cont').fadeIn(200);
      console.log('on');
    },
    function(){
      $(this).animate({
        width: '80px',
        opacity: 1
      }, 350);
      $(this).children('.bubble-cont').fadeOut(200);
      console.log('off');
    }
  );

  $('.nav-icon').height(function(){
    console.log($(this).parent().height())
    return $(this).parent().height()-28;
  })
})
