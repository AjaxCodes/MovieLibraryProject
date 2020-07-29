 function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }
$(document).ready(function() {
    $('#add-form').submit( processForm );
    $("#titleInputBox").keyup(function ()  {

    })
}//event listener sin document on ready or (Jquery{})
 );
(jQuery);

function getAllMovies() {
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'get',
        contentType: "application/json",
        success: function(data, textStatus, jQxhr){
            $(`#movieTableBody`).html(``);
            addDataToTable(data);
        },
        error: function (errrThrown, textStatus, jQxhr) {
            console.log(`Error has occurred.  Error: ${errorThrown}`)
        }
    })
}

function addDataToTable(data) {
    for(let i = 0; i < data.length; i++){
        $("#movieTableBody").append(`
        <tr><td>${data[i].title}</td>
        <td>${data[i].genre}</td>
        <td>${data[i].director}</td></tr>`)
    }
}

