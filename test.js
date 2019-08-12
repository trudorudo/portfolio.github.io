$(document).ready(function () {

  $('.parallax').parallax();
     
  $('.carousel').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
  );
  // autoplay();
  // function autoplay() {
  //   $('.carousel').carousel('next');
  //   setTimeout(autoplay, 4500);
  // }


  //typing text
  var i = 0;
  var txt = " Kristina Trudorudo | Full Stack Developer |"
  var speed = 80
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing-name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

});




