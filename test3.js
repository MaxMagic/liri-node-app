// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: 'f54fc614eba24c7e8cba02cbc86d85e7',
//   secret: 'b49db1030a9c46fa8bf5970d26afdd54'
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things', limit: 1 }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data.tracks.items[0]); 

// // Artist
// console.log(data.tracks.items[0].album.artists[0].name);

// // Song Name
// console.log(data.tracks.items[0].name);

// // Preview Link
// console.log(data.tracks.items[0].external_urls.spotify);

// //Album
// console.log(data.tracks.items[0].album.name);
// });

var axios = require('axios');

// axios.get(`https://rest.bandsintown.com/artists/DVSN/events?app_id=0be905f2241374a45f8824e2ff55e3e7`).then(function( response, error) {
//         if (error) {
//             return console.log('Error occurred: ' + error);
//         }
//         // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
//         // console.log(response.data[0]);

//         // Name of venue
//         console.log(response.data[0].venue.name);

//         // Venue Location
//         console.log(response.data[0].venue.city);
//         console.log(response.data[0].venue.country);

//         // Date of event
//         console.log(response.data[0].datetime);
//     });

    axios.get(`http://www.omdbapi.com/?apikey=7aca9df7&t=batman+begins`).then(function(response, error) {
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
        // console.log(response.data);

        // Movie Title
        console.log(`Movie: ${response.data.Title}`);

        // Release Year
        console.log(`Released: ${response.data.Year}`);

        // IMDB Rating
        console.log(`IMDB Rating: ${response.data.imdbRating}`);

        // Rotten Tomatoes
        console.log(`Rotten Tomatoes Score: ${response.data.Ratings[1].Value}`);

        // Country of Production
        console.log(`Country of Origin: ${response.data.Country}`);

        // Movie Language
        console.log(`Languages: ${response.data.Language}`);

        // Plot
        console.log(`Plot: ${response.data.Plot}`);

        // Actors
        console.log(`Actors: ${response.data.Actors}`);


    });