var timeout = null;

// $(document).on('mousemove', function() {
//     clearTimeout(timeout);
//
//     timeout = setTimeout(function() {
//         console.log('Mouse idle for 3 sec');
//     }, 3000);
// });

$(function() {
  $(document).on('mousemove', function(){
        clearTimeout(timeout);

        timeout = setTimeout(function() {
            console.log('Mouse idle for 3 sec');
        }, 3000);
  });
});
