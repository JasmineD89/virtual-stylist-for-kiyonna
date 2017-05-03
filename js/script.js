// $(document).ready(function() {


var slideIndex = 1;
showSlides(slideIndex);

var dressCode = "";


var bodyType = "";


var pickPrice = "";


function plusSlides(n) {
  showSlides(slideIndex += n);

}


function getDressCode(event){
  $(".resultOption1").html(event.target.innerText);

}

function getBody(event){
  $(".resultOption2").html(event.target.innerText);
}

function getPrice(event){
  $(".resultOption3").html(event.target.innerText);
  $(".hero h1").text("Voila!");
  $(".hero h2").text("Your style is ready!");
  $(".hero p").text("Shop our pick for your event below.");


}



function currentSlide(n) {
  showSlides(slideIndex = n);

}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");



  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");



  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";

}
if (n == 4){
  var answer1 = $(".resultOption1").text();
    var answer2 = $(".resultOption2").text();
    var answer3 = $(".resultOption3").text();



if (
    answer1 === 'casual' && answer2 === 'apple' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('casualApple50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'casual' && answer2 === 'apple' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('casualApple100');
// console.log('casualApple50')
        }

else if (
    answer1 === 'casual' && answer2 === 'hourglass' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('casualHour100');
// console.log('casualApple50')
        }
else if (
    answer1 === 'casual' && answer2 === 'hourglass' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('casualHour50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'casual' && answer2 === 'rectangle' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('casualRect100');
// console.log('casualApple50')
        }
else if (
    answer1 === 'casual' && answer2 === 'rectangle' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('casualRect50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'dressy casual' && answer2 === 'apple' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('dressyApple50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'dressy casual' && answer2 === 'apple' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('dressyApple100');
// console.log('casualApple50')
        }

else if (
    answer1 === 'dressy casual' && answer2 === 'hourglass' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('dressyHour100');
// console.log('casualApple50')
        }
else if (
    answer1 === 'dressy casual' && answer2 === 'hourglass' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('dressyHour50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'dressy casual' && answer2 === 'rectangle' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('dressyRect100');
// console.log('casualApple50')
        }
else if (
    answer1 === 'dressy casual' && answer2 === 'rectangle' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('dressyRect50');
// console.log('casualApple50')
        }


else if (
    answer1 === 'formal' && answer2 === 'apple' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('formalApple50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'formal' && answer2 === 'apple' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('formalApple100');
// console.log('casualApple50')
        }

else if (
    answer1 === 'formal' && answer2 === 'hourglass' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('formalHour100');
// console.log('casualApple50')
        }
else if (
    answer1 === 'formal' && answer2 === 'hourglass' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('formalHour50');
// console.log('casualApple50')
        }

else if (
    answer1 === 'formal' && answer2 === 'rectangle' && answer3  === '$101 and Up')
        {
          $(".imgResults").addClass('formalRect100');
// console.log('casualApple50')
        }
else if (
    answer1 === 'formal' && answer2 === 'rectangle' && answer3  === '$50 to $100')
        {
          $(".imgResults").addClass('formalRect50');
// console.log('casualApple50')
        }


}
 console.log(answer1,answer2,answer3)
}




// $(".")
//results
$(document).ready(function(){
$('.nav-menu ul li:first-child').show();
  $('.nav-menu ul li:first-child').click(function() {
    var menu = $('.nav-menu ul li:not(ul li:first-child)');
    menu.slideToggle(100);
})



  


  

var answers = ["formal", "dressy casual", "casual", "apple", "hourglass", "rectangle", "$50 to $100", "$100 and Up"];

var options = '';
for (var i = 0; i < answers.length; i++) {
  options += '<li value="'+ answers[i] + '">' + answers[i] + '</li>';
}

  function changeBackground(){
    var answer1 = $(".resultOption1").val();
    var answer2 = $(".resultOption2").val();
    var answer3 = $(".resultOption3").val();



if (
    answer1 === 'casual' || answer2 === 'apple' || answer3  === '$50 to $100')
        {$("div .imageResults").append('class','casualApple50');}
console.log(changeBackground)
}


//end results


 });



// pseudo
// 1. clicking on pickOption will store the option and move to the next mySlides --DONE!
// 2. once you reach the fourth slide. All stored options will populate in resultOptions and change the hero image and test.
// 3. resultOptions will trigger a set of 4 images to populate imgResults div
// 4. when clicking on the option it will open a new window.
