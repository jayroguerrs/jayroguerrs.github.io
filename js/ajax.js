$(document).ready(function() {
    $.ajax({
        type: "GET",       
        url: "https://sheets.googleapis.com/v4/spreadsheets/1Gp07yORfp13NIT4oGtP5fJL6y_8mc1dL_waJaWuFayk/values/OFICINAS!A2:C?key=AIzaSyC8XQRBD6HJt8lgLwk7cT6goBpv9-f6NzI",
        dataType: 'json',
        success: function(data) {            
            data.values.forEach(function(dato) { 
                $("select#colaborador-select").append("<option id='" + dato[0] + "' region='" + dato[2] + "'>" + dato[1] + "</option>");
            });
        }                   
    });

    // Para el modelo 'PREGUNTAS'
    $('select#colaborador-select').on('change', function(e){
        e.preventDefault();
        //var optionSelected = $("option:selected", this);
        var region = $(this).children(":selected").attr("region");
        $('input#region').val(region);
    });
})

function postToGoogle() {
    var field1 = $("#Firstname").val();
    var field2 = $("#Lastname").val();    

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSf7Gt7aWTn0YYn59dVFtK-2LgfDeRSFyLmKOhhEULss9Ti3YQ/formResponse",
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
            "entry.308235292": field1,          //nombres
            "entry.200164587": field2          //apellidos
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
            $('#contact').trigger('reset');
        },
        error: function (x, y, z) {
            $('#contact').trigger('reset');
        }
    });
    return false;
}

