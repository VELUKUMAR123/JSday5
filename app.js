let apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=2c7a647f=RRR"
let title =document.getElementById("title");
let desc =document.getElementById("desc");
let date =document.getElementById("date");
let ratings =document.getElementById("ratings");
let actor =document.getElementById("actor");
let collection =document.getElementById("collection");
let genre =document.getElementById("genre");
let poster =document.getElementById("poster");
let director =document.getElementById("director");

function Search()
{
    let query= document.getElementById("moviesearch"),value;
    let api =apiKey+ query;
    console.log*(api);
    fetch(api).then((movieData)=>{
        // console.log(movieData)
        return movieData.json()
    }).then((movie)=>{
        // console.log(movie);
        title.innerText = movie.Title;
        date.innerText = movie.Released;
        desc.innerText = movie.Plot;
        actors.innerText = movie.Actors;
        director.innerText = movie.Director;
        ratings.innerText = movie.imdbRating;
        collection.innerText = movie.BoxOffice;
        genre.innerText = movie.Genre;
        poster.src = movie.Poster
    
    })
}