$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});

/* JavaScript code for active menu item */
var navItems = document.querySelectorAll("nav ul li a");

for(var i = 0; i < navItems.length; i++) {
if(navItems[i].href === window.location.href) {
    navItems[i].className = "active";
}
}

/* code for slider*/
var slideImg = document.getElementById("slideImg");

var images = new Array (
    "images/solar-building.jpg",
    "images/Solar Inst1.png",
    "images/power-line.jpg",
    "images/fiber3.png",    
);

var len =images.length;
var i = 0;

function slider(){
    if(i > len - 1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000); 
}
