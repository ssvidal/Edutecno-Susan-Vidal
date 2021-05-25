
$( document ).ready(function(){
    $('#carrusel').carousel({
      interval: 5000
    })
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('#enviar').click(function(){
      alert('El correo fue enviado correctamente...')
    });

    $('#ingredientes').dblclick(function(){
      $('#ingredientes').css('color','red')
    });

    $('#preparacion').dblclick(function(){
      $('#preparacion').css('color','red')
    });

    $('.card-title').click(function(){
      $('.card-text').toggle("slow")
    })
});