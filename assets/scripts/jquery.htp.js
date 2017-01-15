var timeout = null;

// making the alert show
$(function() {
  $('#start').on('click', function(){
    $('.moveDect').removeClass('v-h');

    $('#canvas').on('mousemove', function(){
      clearTimeout(timeout);

        timeout = setTimeout(function() {
          if($('#game-over').hasClass('v-h') && $('#start-screen').hasClass('v-h')){
            $('.moveDect').removeClass('v-h');
          }
        }, 1500);
    });
  });
});

// making the alert disappear

$(function() {
  $('#canvas').on('mousemove', function(){
      $('.moveDect').addClass('v-h');
  });
});
