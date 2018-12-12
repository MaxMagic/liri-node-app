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

axios.get(`https://rest.bandsintown.com/artists/DVSN/events?app_id=0be905f2241374a45f8824e2ff55e3e7`).then(function( response, error) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        // Need to display: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
        // console.log(response.data[0]);

        // Name of venue
        console.log(response.data[0].venue.name);

        // Venue Location
        console.log(response.data[0].venue.city);
        console.log(response.data[0].venue.country);

        // Date of event
        console.log(response.data[0].datetime);
    });