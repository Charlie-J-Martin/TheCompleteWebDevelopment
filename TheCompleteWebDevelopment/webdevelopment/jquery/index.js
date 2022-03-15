// Manipulating styles with JQuery

// Adding and removing classes.
$('h1').addClass('big-title margin-50');

$('h1').removeClass('big-title');

// This can be written in the console and will return true or false.
$('h1').hasClass('margin-50');

// Manipulating text with JQuery
$('h1').text('Bye');

$('button').text("Don't click me");

$('button').html("<em>Don't click me</em>");

// Manipulating attributes with JQuery
// .attr followed by the attribute gets what the current value is. This can be used with any tags or class
$('img').attr('src');

$('a').attr('href', 'https://bing.com');

// Adding event listeners with jQuery
$('h1').click(function () {
  $('h1').css('color', 'purple');
});

// The long hand way of adding event listeners to the buttons on the website
for (var i = 0; i < 5; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    document.querySelector('h1').style.color = 'purple';
  });
}

// The short hand jQuery way of adding event listeners
$('button').click(function () {
  $('h1').css('color', 'purple');
});

// If we wanted to detect keystrokes within our text box
$('input').keypress(function (event) {
  console.log(event.key);
});

$('document').keypress(function (event) {
  $('h1').text(event.key);
  console.log(event.key);
});

// Even quicker way of adding event listeners. On followed by the event that needs to take place and then followed by the callback function.
$(document).on('mouseover', function () {
  $('h1').css('color', 'purple');
});

// Adding and Removing elements with JQuery
// Adds a button before the h1 opening tag
$('h1').before('<button>New</button>');

// Adds a button after the h1 closing tag
$('h1').after('<button>New</button>');

// Adds a button inline but before the text
$('h1').prepend('<button>New</button>');

// Adds a button inline but after the text
$('h1').append('<button>New</button>');

// Used if we want to remove an element from our website
$('button').remove();

// Website animations with jQuery
// If we want to hide an element in our website.
$('button').on('click', function () {
  $('h1').hide();
});

// If we want to hide/show an element in our website.
$('button').on('click', function () {
  $('h1').toggle();
});

// This fades out the element out until it is not seen
$('button').on('click', function () {
  $('h1').fadeOut();
});

// This fades in the element out until it is not seen
$('button').on('click', function () {
  $('h1').fadeIn();
});

// This toggle fades in the element out until it is not seen
$('button').on('click', function () {
  $('h1').fadeToggle();
});

// This slides the element out and in until it is not seen
$('button').on('click', function () {
  $('h1').slideToggle();
});

// We can create our own animations using .animate.
// You can only animate to css elements that are numerical
$('button').on('click', function () {
  $('h1').animate({ opacity: 0.5, margin: '20px' });
});

// We can also combine the animations together
$('button').on('click', function () {
  $('h1').slideUp().slideDown().animate({ opacity: 0.5, margin: '20px' });
});
