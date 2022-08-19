# Spotify Website (Angular & ExpressJS) <img height="32" width="44" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F08%2FSpotify-Logo.png&f=1&nofb=1" />

### Languages and Tools Used:

<img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" /> <img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" />
<img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img height="32" width="32" src="https://avatars.githubusercontent.com/u/5658226?s=200&v=4" />
<img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg" />
<img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img height="32" width="52" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" />
<img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" />

# Introduction
The purpose of this application was to create a music website that pulls directly from the Spotify API and contains features such as searching for artists, being able to favourite songs, preview songs as well as viewing artists, albums and new releases.

This project was done to create a full-stack website using Angular for the application framework, ExpressJS for the server side framework, HTML5/CSS3 for the design, and Mongoose/MongoDB Atlas for database management. The back-end API with contains protected routes, it contains all of the JSON sample data on the MongoDB Atlas server and was uploaded to Heroku with the routes available for handling request and response data.

This application was created by first uploading a custom API server that was uploaded to Heroku and gets, updates, deletes and uploads directly from and to a personal MongoDB database, this database is used to store user accounts which include the username, encrypted password and list of favourite songs. This music web application also pulls directly from the SpotifyAPI using a client id and password that was attained by creating a Spotify developer account.

The Live Demo of the Web Application: https://spotify-website-api.herokuapp.com/

### Routes That are Available
- - - -
<pre>/login</pre>
<pre>/register</pre>
- - - -
### Protected Routes
- - - -
<pre>/newReleases</pre>
<pre>/favourites</pre>
<pre>/search</pre>
<pre>/artist/:id</pre>
<pre>/album/:id</pre>
<pre>/about</pre>
- - - -
