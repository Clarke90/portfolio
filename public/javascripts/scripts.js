// hide
  $("#screen").hide();
  $("#slider").hide();
  $("#navigation").hide();
  $("#calltoaction").hide();
  $("#BottomLeftBox").hide();
  $("#topLeftBox").hide();
  $("#topRightBox").hide();
  $("#footer").hide();
  $('#BottomRightBox').hide();

    $('#elipse').hide();
      $('#contentBox').hide();


// //Website pre loader
// setTimeout(function() {
//     $('#preLoader').fadeOut('fast');
// }, 2000); // <-- time in milliseconds

// iphone animations
setTimeout(function() {
  $("#screen").fadeIn('slow');
  $( "#navigation" ).fadeIn( 2000 ).delay( 800 ).fadeIn( 400 );
  $( "#slider" ).fadeIn( 1000 ).delay( 1000 )
  $( "#calltoaction" ).fadeIn( 7000 ).delay( 1400 ).fadeIn( 400 );

$( "#BottomLeftBox" ).fadeIn( 3000 ).delay( 1400 );
$( "#BottomRightBox" ).fadeIn( 4000 ).delay( 1800 );
$( "#topRightBox" ).fadeIn( 5000 ).delay( 2000 );
$( "#topLeftBox" ).fadeIn( 6000 ).delay( 2200 );

$( "#elipse" ).fadeIn( 8000 ).delay( 2000 );
$( "#contentBox" ).fadeIn( 10000 ).delay( 2000 );

$( "#footer" ).fadeIn( 12000 ).delay( 2000 );





}, 2000); // <-- time in milliseconds






// nav
  $( "li#menu" ).click(function() {
    console.log('clicked')
    $( ".sidebar-nav-1" ).toggle(".sidebar-nav-2");
  });

  // on click of menu change colors of elements
   $( "li#menu" ).click(function() {
     $( 'hr' ).toggleClass( "blue" );
     $( 'button' ).toggleClass( "blue" );
  });
