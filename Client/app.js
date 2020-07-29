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

    });


//event listener sin document on ready or (Jquery{});
(jQuery);  

function getAllMovies() {
 $(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        success: function(){
            $(`#movieTableBody`).html(``);
        }
    }).then(function(data) {
        addDataToTable(data);
    
    })
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

function createMovie() {
    var data = makeMovieObject();
    $(document).ready(function() {
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            }).then(function() {
                getAllMovies();
            });
    });
}

function makeMovieObject(){
    var movieData = {
        "Title": document.getElementById('newTitle').value,
        "Genre": document.getElementById('newGenre').value,
        "Director": document.getElementById('newDirector').value
    };
    return movieData;
}

function addDataToEditTable(data) {
    //We may need to add functionality to clear table here
    for(let i = 0; i < data.length; i++){
        $("#movieedittable").append(`
        <tr><td>${data[i].title}</td>
        <td>${data[i].genre}</td>
        <td>${data[i].director}</td></tr>`)
    }
}

function getSingleMovie(movieId){
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            url: 'https://localhost:44325/api/movie' + movieId,
            contentType: 'application/json'
        }).then(function(data){
            //Where do we want to dispay this data? (new table??)
        })
    })
}