var timeout = null;

// $(document).on('mousemove', function() {
//     clearTimeout(timeout);
//
//     timeout = setTimeout(function() {
//         console.log('Mouse idle for 3 sec');
//     }, 3000);
// });

// making the alert show
$(function() {
  $('#canvas').on('mousemove', function(){
        clearTimeout(timeout);


        timeout = setTimeout(function() {
            $('.moveDect').removeClass('v-h');
        }, 1500);
  });
});

// making the alert disappear
$(function() {
  $('#canvas').on('mousemove', function(){
        $('.moveDect').addClass('v-h');
  });
});


// $(function() {
//   $('.js').on('mouseover', function(){
//     $('.js').siblings().removeClass('hidden flipOutX').addClass('animated flipInX');
//
//     $('.js').one('mouseleave', function(){
//       $('.js').siblings().removeClass('animated flipInX').addClass('animated flipOutX');
//     });
//   });
// });
