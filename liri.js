require("dotenv").config();

var axios = require('axios');
var keys = require('keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var artist;

var spotify = new Spotify(keys.spotify);
// Need to display: Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 
    console.log(data); 
});


axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&${search_info}`).then(
  function(response) {
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
  }
);

axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=${process.env.BANDS_ID}`).then(
  function(response) {
      // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
      console.log();
  }
);

