$(function (){
  $('.box1').slideDown(1000, function (){
    1000
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});