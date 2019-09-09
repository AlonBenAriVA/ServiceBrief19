$(document).ready(function(){



  var slideObject = {
    'slideTitle': 'Cardiology',
    'points':['Identifying high risk, re-admitted patients with CHF. Assiatance in work flow for the CHF clinic.']};
    
    
    $('h1').append(slideObject.slideTitle)

    slideObject.points.forEach(function(x){
      console.log(x)
    $('ul').append('<ol>'+x +'</ol>');
  });
  

});
