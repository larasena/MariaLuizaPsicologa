$(document).ready(function() {
    $('.smooth-scroll').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});




$(document).ready(function(){
    $('.carousel-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500 // ajuste conforme necessário
    });
});


function mostrarResposta(id) {
    var resposta = document.getElementById(id);
    if (resposta.style.display === 'block') {
        resposta.style.display = 'none';
    } else {
        resposta.style.display = 'block';
    }
}