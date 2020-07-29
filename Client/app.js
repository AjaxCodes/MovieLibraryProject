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
        <td>${data[i].director}</td>
        <td><button type="submit" class="btn btn-outline-danger"onclick="getSingleMovie(${data[i].movieId})">Edit this Movie</button></tr>
        </tr>`)
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


function getSingleMovie(movieId){
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            url: 'https://localhost:44325/api/movie/' + movieId,
            dataType: 'json'
        }).then(function(data){

            $('#editTitle').val(data['title']).text()
            $('#editGenre').val(data['genre']).text()
            $('#editDirector').val(data['director']).text()
    })
})
}

function updateMovie() {
    //Will display data from getSingleMovie in a form,
        //Then allow user to make updates
    //Will take data from EDIT form
    var data = makeMovieObject();
    $(document).ready(function() {
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            type: 'Put',
            contentType: 'application/json',
            data: JSON.stringify(data),
            }).then(function() {
                getAllMovies();
            });
    });
}