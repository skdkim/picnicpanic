var timeout = null;

// making the alert show
$(function() {
  $('#start').on('click', function(){
    console.log("yes");

    $('#canvas').on('mousemove', function(){
      clearTimeout(timeout);

      timeout = setTimeout(function() {
        $('.moveDect').removeClass('v-h');
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
