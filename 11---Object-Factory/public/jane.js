var movies = require('./movies');

var jane = movies();

jane.favMovie = 'Who am I';

console.log("Jane's favorite movie is " + jane.favMovie);

//var movies = require('./movies');
//
//movies.favMovie = 'Who am I';
//
//console.log('Janes favorite movie is ' + movies.favMovie);
