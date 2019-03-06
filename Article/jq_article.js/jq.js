$( "#ani" ).click(function() {
    $( "#diss" ).animate({
      opacity: 'toggle',
      left: "+=50",
      height: "toggle"
    }, 1000, function() {
      // Animation complete.
    });
});
  

$('#m').click(function(){
    $('#m').animate({
     width: '500px'
    }, 1000)
});