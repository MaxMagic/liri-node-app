# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Getting Started

Clone the repository and install all the dependencies!

### Prerequisites

In order to use the application, you will need to apply for and receive API keys for the Spotify, Bands In Town and OMDB APIs. Once you have received all three keys, create a .env file listing any access information for your APIs.

Example:

```
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

And that's it! All code for the inclusion of .env files has already been included :).

### How to Use

To use the node application, open your terminal and run the liri.js file. 

![ScreenShot](images/first_image.png)

Then, enter one of three options depending on your desired outcome:

* concert-this - Searches for and displays information about the artist's next live show.
* spotify-this-song - Searches for and displays information about the song entered.
* movie-this - Searches for and displays information about your favorites movies

Additionally, there is a fourth option that will select a hidden option and search term and display it's results:

* do-what-it-says

This option reads the imformation in an attached file and performs that action.

Following your choice of query, enter in the title of the band, song or movie that you would like more information about.

![ScreenShot](images/second_image.png)

...And your result will look like this:

![ScreenShot](images/third_image.png)

This works for all options:

![ScreenShot](images/fourth_image.png)

Result:

![ScreenShot](images/fifth_image.png)

Movies:

![ScreenShot](images/sixth_image.png)

Result:

![ScreenShot](images/seventh_image.png)

Even Random:

![ScreenShot](images/eighth_image.png)

Result:

![ScreenShot](images/ninth_image.png)


And that's it! Enjoy!

## Built With

* Javascipt
* Node.js
* Node-Spotify-API
* OMDB API
* Bands In Town API

## Authors

* **Lennox David** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* Apple
* My mom
