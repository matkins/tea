var myLocation;
$(document).ready(function(){
  
  $('td').on('click', function(){
    var square = $(this).data('square');
    if (myLocation){
      $(this).addClass('hit');
      if(square === myLocation){
        alert('You lose!');
      }
    } else {
      myLocation = $(this).data('square');
      $('h1').html('Fight!');
    }
  });


});