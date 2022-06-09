$(document).ready(function() {
// AJAX para traer roles
    $.ajax({
        type: "GET",       
        url: "https://sheets.googleapis.com/v4/spreadsheets/1Gp07yORfp13NIT4oGtP5fJL6y_8mc1dL_waJaWuFayk/values/ROLES!A2:B?key=AIzaSyC8XQRBD6HJt8lgLwk7cT6goBpv9-f6NzI",
        dataType: 'json',
        success: function(data) {            
            data.values.forEach(function(dato) { 
                $("select#rol-select").append("<option id='" + dato[0] + "'>" + dato[1] + "</option>");                
            });
        }                   
    });

    // AJAX para traer oficinas
    $.ajax({
        type: "GET",       
        url: "https://sheets.googleapis.com/v4/spreadsheets/1Gp07yORfp13NIT4oGtP5fJL6y_8mc1dL_waJaWuFayk/values/OFICINAS!A2:D?key=AIzaSyC8XQRBD6HJt8lgLwk7cT6goBpv9-f6NzI",
        dataType: 'json',
        success: function(data) {            
            data.values.forEach(function(dato) { 
                $("select#oficina-select").append("<option id='" + dato[0] + "' region='" + dato[2] + "' zona='" + dato[3] + "'>" + dato[1] + "</option>");                
            });
        }                   
    });
    
    
    
    // Para el modelo 'PREGUNTAS'
    $('select#oficina-select').on('change', function(e){
        e.preventDefault();
        //var optionSelected = $("option:selected", this);
        var region = $(this).children(":selected").attr("region");
        var zona = $(this).children(":selected").attr("zona");
        $('input#region').val(region);
        $('input#zona').val(zona);
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

