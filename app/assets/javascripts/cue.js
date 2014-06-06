$(document).ready(function() {
    $('#fullpage').fullpage({
     onLeave: function(current, next) {
     var d = 1000;
     var f = 1000;

     // alert("i: " + current + "dir: " + next);
     if((current==1 && next==2) || (current==3 && next==2)) {
     $('#first').hide();
     $('#second').hide();
     $('#third').hide();
     $('#fourth').hide();
     $('#fifth').hide();
$('#sixth').hide();
$('#seventh').hide();
$('#eighth').hide();
$('#nineth').hide();
$('#tenth').hide();
$('#eleventh').hide();	
    
$('#first').delay(d).fadeIn(f);
$('#second').delay(2*d).fadeIn(f);
$('#third').delay(3*d).fadeIn(f);
$('#fourth').delay(4*d).fadeIn(f);
$('#fifth').delay(5*d).fadeIn(f);
$('#sixth').delay(6*d).fadeIn(f);
$('#seventh').delay(7*d).fadeIn(f);
$('#eighth').delay(8*d).fadeIn(f);
$('#nineth').delay(9*d).fadeIn(f);
$('#tenth').delay(10*d).fadeIn(f);
$('#eleventh').delay(11*d).fadeIn(f);
     }
     if(current == 2) {
     $('#first').finish();
$('#second').finish();
$('#third').finish();
$('#fourth').finish();
$('#fifth').finish();
$('#sixth').finish();
$('#seventh').finish();
$('#eighth').finish();
$('#nineth').finish();
$('#tenth').finish();
$('#eleventh').finish();
     }
      if((current==3 && next==4) || (current==5 && next==4)) {
$('#jedan').animate({marginTop: "100px"}, 3000);
     }
    
}
});

$('.carousel').carousel({
interval: 2000
});
});







  




               