//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready');

//phone swipes out
$('section#phone').click(function(){
    $('section#planner').animate({
        left:900
    }, 'swing');
    $('section#pen').animate({
        left:950
    }, 'swing');
    $('section#headphones').animate({
        left:1000
    }, 'swing');
    $('section#flashdrive').animate({
        left:1050
    }, 'swing');
    $('section#hidez').animate({
        left:1100
    }, 'swing');
});
    
//phone swipes in
$('section#phone').dblclick(function(){
    $('section#planner').animate({
        left:250
    }, 'swing');
    $('section#pen').animate({
        left:300
    }, 'swing');
    $('section#headphones').animate({
        left:350
    }, 'swing');
    $('section#flashdrive').animate({
        left:400
    }, 'swing');
    $('section#hidez').animate({
        left:450
    }, 'swing');
});    

//planner swipes out
$('section#planner').click(function(){
    $('section#pen').animate({
        left:950
    }, 'swing');
    $('section#headphones').animate({
        left:1000
    }, 'swing');
    $('section#flashdrive').animate({
        left:1050
    }, 'swing');
    $('section#hidez').animate({
        left:1100
    }, 'swing');
});

//planner swipes in 
$('section#planner').dblclick(function(){
    $('section#pen').animate({
        left:300
    }, 'swing');
    $('section#headphones').animate({
        left:350
    }, 'swing');
    $('section#flashdrive').animate({
        left:400
    }, 'swing');
    $('section#hidez').animate({
        left:450
    }, 'swing');
});
    
//pen swipes out
$('section#pen').click(function(){
    $('section#headphones').animate({
        left:1000
    }, 'swing');
    $('section#flashdrive').animate({
        left:1050
    }, 'swing');
    $('section#hidez').animate({
        left:1100
    }, 'swing');
});
  
//pen swipes in
$('section#pen').dblclick(function(){
    $('section#headphones').animate({
        left:350
    }, 'swing');
    $('section#flashdrive').animate({
        left:400
    }, 'swing');
    $('section#hidez').animate({
        left:450
    }, 'swing');
});    

//headphones swipes out
$('section#headphones').click(function(){
    $('section#flashdrive').animate({
        left:1050
    }, 'swing');
    $('section#hidez').animate({
        left:1100
    }, 'swing');
});

//headphones swipes in
$('section#headphones').dblclick(function(){
    $('section#flashdrive').animate({
        left:400
    }, 'swing');
    $('section#hidez').animate({
        left:450
    }, 'swing');
});
    
//flashdrive swipes out
$('section#flashdrive').click(function(){
    $('section#hidez').animate({
        left:1100
    }, 'swing');
});
    
//flashdrive swipes in
$('section#flashdrive').dblclick(function(){
    $('section#hidez').animate({
        left:450
    }, 'swing');
});
    
    
});

