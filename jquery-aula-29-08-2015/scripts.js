/*
 * by Fernando Moreira | nandomoreira.me
 */
(function($) {

  var cores = ['#069', '#f00', '#000', '#555', '#f1f2f3', '#999', '#0ff', '#0ae'];

  $('.botao1').on('click', function() {
    var cor = cores[Math.floor(Math.random() * cores.length)];
    $('body').css({
      'background-color': cor
    });
  });

  $('.botao2').on('click', function() {
      alert("Ola mundo!");
  });

  $('.botao3').on('click', function() {
    $('.circulo').animate({
        right: 900
    }, 1000, function() {
      $(this).animate({
        right: 20
      }, 400);
    });
  });

  var tamanhos = [50, 100, 200, 300, 400, 500, 600, 700];
  $('.botao4').on('click', function() {
    var t = tamanhos[Math.floor(Math.random() * tamanhos.length)];
    $('.quadrado').animate({
        'width': t,
        'height': t
    })
  });

  $('.botao5').on('click', function() {
      $('.triangulo').toggleClass('hide');
  });

  $('.botao6').dblclick(function() {
    $('.conteudo').html('<h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h1>')
  });

  $('.botao7').on('click', function() {
    quadrado_loko();
  });

  function quadrado_loko() {
    $('.quadrado').animate({ right: 0 }, 60, function() {
      $(this).animate({ right: 300 }, 800, 'linear', quadrado_loko());
    });
  }

})( jQuery );