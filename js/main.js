$(function(){
    //map
    $('.main').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.mouse-parallax__content').css(
            'transform',
            'translate(-' + x * 1.5 + 'vw, -' + y * 1.5 + 'vw)'
        )
    });



    //burger-menu
    $('.client-card__info').on('mouseover', function(){
        $('.client-card__info-text').css('display', 'block')
    });
    $('.client-card__info').on('mouseout', function(){
        $('.client-card__info-text').css('display', 'none')
    });

    $('.menu__burger').click(function(e){
        $('.menu__burger, .menu__list').toggleClass('active')
        $('body').toggleClass('lock')
    });


    //modal
    $('.btn-give-card, .reg-btn').click(function() {
        $('main').css('filter', 'blur(0.25vw)');
        $('.overlay, .main-popup').fadeIn();
        $('.overlay').addClass('disabled');
    });
    $('.popup-close').click(function(){
        $('.overlay, .small-popup').fadeOut();
        $('main').css('filter', 'none');

    });
    $(document).mouseup(function(e){
        let popup = $('.main-popup');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.overlay').fadeOut();
            $('main').css('filter', 'none');
        }
    });


    $('.popup__btn').click(function() {
        $('.small-popup').css('display', 'flex');
        $('.small-popup').fadeIn();
        $('.main-popup').fadeOut();
        $('.overlay').addClass('disabled');
    });
  
});

let mapLink = document.querySelector('.map-link');
let hiddenMap = document.querySelector('.hidden-map');

mapLink.onmouseover = function(e) {
    hiddenMap.style.display = 'block';
};

mapLink.onmouseout = function(e) {
    hiddenMap.style.display = '';
};