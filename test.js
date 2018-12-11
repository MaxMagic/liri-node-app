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

switch (operation){
    case 'concert-this':
        for(var i = 3; i < results.length; i++){
            convertedBand.push(results[i]);
        };
        console.log(convertedBand);
        
        var band = convertedBand.join(" ");
        axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=${process.env.BANDS_ID}`).then(function( response, error) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log(response.data);
        });
        break;
    
    case 'spotify-this-song':
        for(var i = 3; i < results.length; i++){
            convertedSong.push(results[i]);
        };
        console.log(convertedSong);
        var song = convertedSong.join(" ");
        console.log(song);
        spotify.search({ type: 'track', query: song, limit: 5 }, function(response, error) {
            if (error) {
                console.log(error);
                console.log('Error occurred: ' + error.tracks.items[0]);
            } 
            return console.log(response); 
        });
        break;
    
    case 'movie-this':
       for(var i = 3; i < results.length; i++){
            convertedMovie.push(results[i]);
        };
            console.log(convertedMovie);
            var movie = convertedMovie.join(" ");
            axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${movie}`).then(function(response, error) {
                if (error) {
                    return console.log('Error occurred: ' + error);
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
                console.log(response.data);
            });
        break;

    case 'do-what-it-says':
        fs.readFile("random.txt", "utf8", function(error, data){
            if (error){
                return console.log(error);
            };
            var myData = data.split(',');
        
            for (let i = 0; i < myData.length; i++){
                console.log(myData[i].trim());
            }
            });
            break;
}