$(document).ready(function(){
  $("div.falda").hide();
  $("div.pantalon").hide();
  $("div.eleccion").hide();
  $("div.blusa").hide();
  $("div.chaleco").hide();
  
  $("input[name=opt-genero]").click(function(){
      if ($('input:radio[name=opt-genero]:checked').val()=="FEMENINO"){
          $("div.eleccion").show();
          $("div.blusa").show();
      } else {
          $("div.eleccion").hide();
          $("div.blusa").hide();
      }              
  });

  $("input[name=opt-preferencia]").click(function(){
      if ($('input:radio[name=opt-preferencia]:checked').val()=="2 PANTALONES"){
          $("div.pantalon").show();
          $("div.falda").hide();
      } else if ($('input:radio[name=opt-preferencia]:checked').val()=="2 FALDAS"){
        $("div.pantalon").hide();
        $("div.falda").show();
      } else {
        $("div.pantalon").show();
        $("div.falda").show();
      }            
  });
  $("#single").val("Single2").trigger('change'); 
});





$(function () {
    $('select').each(function () {
      $(this).select2({
        theme: 'bootstrap4',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
        allowClear: Boolean($(this).data('allow-clear')),
        closeOnSelect: !$(this).attr('multiple'),
      });
    });
    
    $('#rango').on("input", function() {
      $('.output').text(this.value +" cms" );
    }).trigger("change");
})

