require("dotenv").config();

var axios = require('axios');
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var entry = process.argv;
var funct = entry[2];

var spotify = new Spotify(keys.spotify);
// Need to display: Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

function operation (funct) {
    var liri = {
        'concert-this': function(){
            for(var i = 3; i < entry.length; i++){
                var band = entry[i].join("-");
                console.log(band);
            };
            axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=${process.env.BANDS_ID}`).then(function(err, response) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                };
                // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
                return console.log(response);
            });
        },
        'spotify-this-song': function(){
            for(var i = 3; i < entry.length; i++){
                var song = entry[i].join("-");
            };
            spotify.search({ type: 'track', query: song }, function(err, response) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }; 
                return console.log(response); 
                });
        },
        'movie-this': function(){
            for(var i = 3; i < entry.length; i++){
                var movie = entry[i].join("-");
            };
            axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&${movie}`).then(function(err, response) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }; 

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
                return console.log(response);
            });
        },
        'do-what-it-says': function(){
    
        }

    }
};

operation.liri[funct]();