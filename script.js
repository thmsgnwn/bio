// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap eleme ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 300, 'swing');

    e.preventDefault();

});




// parallax
//about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Jumbotron
    $('.jumbrotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbrotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbrotron p').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each((i) => {
            setTimeout(() => {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * (i+1));
        });

        //
    }

});












