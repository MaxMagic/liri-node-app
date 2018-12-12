require("dotenv").config();

var axios = require('axios');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var spotify = new Spotify(keys.spotify);

var results = process.argv;
var operation = results[2];

var convertedBand = [];
var convertedSong = [];
var convertedMovie = [];

var song;
var movie;

var liri = {
    'concert-this': function(){
        for(var i = 3; i < results.length; i++){
            convertedBand.push(results[i]);
        };
        
        var band = convertedBand.join(" ");
        axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=${process.env.BANDS_ID}`).then(function( response, error) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            // Intro
            console.log(`The next ${band} concert will be located at:`)

            // Name of venue
            console.log(`${response.data[0].venue.name}`);

            // Venue Location
            console.log(`In ${response.data[0].venue.city}, ${response.data[0].venue.country}`);

            // Date of event
            console.log(`On ${response.data[0].datetime}`);
        });
    },
    'spotify-this-song': function(){
        if (process.argv[3] === undefined){
            // Defauts to "The Sign"
            song = "The Sign";
        } else {
            for(var i = 3; i < results.length; i++){
                convertedSong.push(results[i]);
            };
            song = convertedSong.join(" ");
        };
            
        spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
            if (err) {
                return console.log(err);
            } 
            // Artist
            console.log(`Artist: ${data.tracks.items[0].album.artists[0].name}`);

            // Song Name
            console.log(`Song: ${data.tracks.items[0].name}`);

            // Preview Link
            console.log(`Preview Link: ${data.tracks.items[0].external_urls.spotify}`);

            //Album
            console.log(`Album: ${data.tracks.items[0].album.name}`);    
        });   
    },
    'movie-this': function(){
        if (process.argv[3] === undefined){
            // Defaults to "Mr. Nobody" 
            movie = "Mr. Nobody";
        } else {
            for(var i = 3; i < results.length; i++){
                convertedMovie.push(results[i]);
            };
            movie = convertedMovie.join(" ");
        };
        
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${movie}`).then(function(response, error) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
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
    },
    'do-what-it-says': function(){
        fs.readFile("random.txt", "utf8", function(error, data){
            if (error){
                return console.log(error);
            };
        
            var myData = data.split(',');
    
            var action = myData[0];
            var searchItem = myData[1];
        
            switch (action){
                case 'concert-this':
                    axios.get(`https://rest.bandsintown.com/artists/${searchItem}/events?app_id=${process.env.BANDS_ID}`).then(function( response, error) {
                        if (error) {
                            return console.log('Error occurred: ' + error);
                        }
                        // Intro
                        console.log(`The next ${searchItem} concert will be located at:`)
            
                        // Name of venue
                        console.log(`${response.data[0].venue.name}`);
            
                        // Venue Location
                        console.log(`In ${response.data[0].venue.city}, ${response.data[0].venue.country}`);
            
                        // Date of event
                        console.log(`On ${response.data[0].datetime}`);
                    });
                    break;
                case 'spotify-this-song':
                    spotify.search({ type: 'track', query: searchItem, limit: 1 }, function(err, data) {
                        if (err) {
                            return console.log(err);
                        } 
                        // Artist
                        console.log(`Artist: ${data.tracks.items[0].album.artists[0].name}`);
            
                        // Song Name
                        console.log(`Song: ${data.tracks.items[0].name}`);
            
                        // Preview Link
                        console.log(`Preview Link: ${data.tracks.items[0].external_urls.spotify}`);
            
                        //Album
                        console.log(`Album: ${data.tracks.items[0].album.name}`);    
                    });
                    break;
                case 'movie-this':
                    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${searchItem}`).then(function(response, error) {
                        if (error) {
                            return console.log('Error occurred: ' + error);
                        }
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
                    break;
                    
            }
        });
    }
};

liri[operation]();