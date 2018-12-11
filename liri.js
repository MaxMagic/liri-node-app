require("dotenv").config();

var axios = require('axios');
var keys = require('keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var answer = process.argv;
console.log(answer);

var funct = process.argv[2];
var searchItem;

var band;

var spotify = new Spotify(keys.spotify);
// Need to display: Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

switch (funct){
    case 'concert-this':
        for(var i = 3; i < process.argv.length; i++){
            var band = process.argv[i].join("-");
            console.log(band);
            axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=${process.env.BANDS_ID}`).then(function(err, response) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
                console.log(response);
        });
        break;
    };
    case 'spotify-this-song':
        for(var i = 3; i < process.argv.length; i++){
            var song = process.argv[i].join("-");
            console.log(song);
            spotify.search({ type: 'track', query: song }, function(err, response) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                } 
                console.log(response); 
        });
        break;
    };
    case 'movie-this':
        for(var i = 3; i < process.argv.length; i++){
            var movie = process.argv[i].join("-");
            console.log(movie);
            axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&${movie}`).then(function(err, response) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                /*  * Title of the movie.
                    * Year the movie came out.
                    * IMDB Rating of the movie.
                    * Rotten Tomatoes Rating of the movie.
                    * Country where the movie was produced.
                    * Language of the movie.
                    * Plot of the movie.
                    * Actors in the movie.
                    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
                */
                console.log(response);
            });
        break;
    };
    case 'do-what-it-says':

function searchTerm(){
    switch (process.argv[2]){
        case 'concert':
            funct = process.argv[2] + "-" + process.argv[3];
            for(var i = 4; i < process.argv.length; i++){
                var searchItem = process.argv[i].join("-");
                console.log(searchItem);
            }
            break;
    }
            
        case 'spotify':
            funct = process.argv[2] + '-' + process.argv[3] + "-" + process.argv[4];
            break;
        case 
    }
    if(process.argv[2] === 'concert'){
        funct = process.argv[2] + "-" + process.argv[3];
    } else if()
}


function process (funct) {
    var liri = {
        'concert-this': function(){
            for(var i = 3; i < process.argv.length; i++){
                var band = process.argv[i].join("-");
                console.log(band);
                axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=${process.env.BANDS_ID}`).then(function(err, response) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                    // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
                    return console.log(response);
                });
            }},
        'spotify-this-song': function(){
            for(var i = 3; i < process.argv.length; i++){
                var band = process.argv[i].join("-");
                spotify.search({ type: 'track', query: band }, function(err, response) {
                    if (err) {
                    return console.log('Error occurred: ' + err);
                    }; 
                    return console.log(response); 
                });
            }},
        'movie-this': function(){
            axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&${search_info}`).then(function(response) {
          /*    * Title of the movie.
                * Year the movie came out.
                * IMDB Rating of the movie.
                * Rotten Tomatoes Rating of the movie.
                * Country where the movie was produced.
                * Language of the movie.
                * Plot of the movie.
                * Actors in the movie.
                * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
            */
            console.log();
            });
        },
        'do-what-it-says': function(){
    
        }

    }
};

