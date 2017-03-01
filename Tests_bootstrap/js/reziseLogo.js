$(window).scroll(function () {
    if($(window).scrollTop() > 150) {
        $('.logo').css({'width': '45px', 'transition-duration': '1.5s'});
        $('.navbar-brand').css({'padding': '5px 15px', 'transition-duration': '1.5s'});
    } else {
        $('.logo').css({'width': '100px', 'transition-duration': '1.5s'});
        $('.navbar-brand').css({'padding': '15px 15px', 'transition-duration': '1.5s'});
    }
});