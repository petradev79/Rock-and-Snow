$(document).ready(function() {

	// CLOSE MENU WITH CLICK ON LINK
    var link = $(".sidebar__link");
    var button = document.getElementById("sidebar-toggle");
    link.on("click", function(e) {
        button.checked = false;
    });

    // CLOSE PRELOADER
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

    // AOS ANIMATIONS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-back', 
    });

});