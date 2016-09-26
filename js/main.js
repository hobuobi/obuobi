$(document).ready(function(){
  $('#logo-nav').css('height', $('#logo-bars').height()+20);
  $('#logo-nav').animate({
    opacity: 1,
    'margin-top': '100px'
  },1200)
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

  $('#triangles').children().mouseenter(function(){ $(this).fadeOut(200)})
    .mouseout(function(){ $(this).fadeIn(200)})


  $('div.por-img').hover(
      function(){
          if($(this).hasClass('active') == false){
            $(this).children('img').animate({opacity: 0.2},200)
            $(this).children('.por-tag').fadeIn(200);
          }
      },
      function(){
          if($(this).hasClass('active') == false){
            $(this).children('img').animate({opacity: 1},200)
            $(this).children('.por-tag').fadeOut(200);
          }
      }
  )

  $('div.por-img').click(
      function(){
          if($(this).hasClass('active')==false){
            $('.active').children('img').animate({opacity: 1},200);
            $('.active').children('.por-tag').fadeOut(200);
            $('.active').removeClass('active');
            id = $(this).attr('id');
            var title = portfolio_data[id].title;
            var desc = portfolio_data[id].description;
            $(this).addClass('active');
            $('#por-title').text(title);
            $('#por-desc').html(linkify(desc));
            $('#por-display').attr('src',portfolio_data[id].path)
          }
      }
  )
})

function linkify(str){
  var embeddedLink = ""
  var linkIndex = str.indexOf("http://");
  if(linkIndex != -1)
  {
    var linkToEnd = str.substring(linkIndex);
    var linkEnd = linkToEnd.indexOf(" ");
    var endIndex = linkIndex+linkEnd;
    var link = str.substring(linkIndex, endIndex)
    embeddedLink = str.substring(0,linkIndex)+"<a href='"+link+"' target='_blank'>"+link+"</a>"+str.substring(endIndex)
  }
  else{
    embeddedLink = str
  }
  return embeddedLink
}
