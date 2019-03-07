$( "#ani" ).click(function() {
    $( "#diss" ).animate({
      opacity: 'toggle',
      left: "+=50",
      height: "toggle"
    }, 1000, function() {
      // Animation complete.
    });
});
  

$('#mb').click(function(){
    $('#m').toggle(
        "slide");
});

$('body').click(function(){
    $('#m').removeClass('menu--open')});
        