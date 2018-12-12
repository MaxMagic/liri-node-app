var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'f54fc614eba24c7e8cba02cbc86d85e7',
  secret: 'b49db1030a9c46fa8bf5970d26afdd54'
});
 
spotify.search({ type: 'track', query: 'All the Small Things', limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0]); 

// Artist
console.log(data.tracks.items[0].album.artists[0].name);

// Song Name
console.log(data.tracks.items[0].name);

// Preview Link
console.log(data.tracks.items[0].external_urls.spotify);

//Album
console.log(data.tracks.items[0].album.name);
});