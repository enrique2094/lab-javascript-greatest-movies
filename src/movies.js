// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {}
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return directors.filter(
    (director, index) => directors.indexOf(director) === index
  );
}
//   const directorsArray = movies.filter((movie) =>movies.director)

// }
// console.log (directorsArray);

  //   let unique = directorsArray.filter((element, index) =>{
  //     return directorsArray.indexOf(element)===index;
  //   });

  // console.log (unique);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {}
function howManyMovies(movies) {
  const stevenDrama = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}
function scoresAverage(movies){
  if (movies.length === 0) {
    return 0;
  }
  const totalRating = movies.reduce(function (acc,cur){
    if (cur.score == undefined) {
      return acc;
    }
 return acc + cur.score;
}, 0)
const avgRating = totalRating/movies.length;
  //return Math.round(avgRating * 100) / 100;
  return Number(avgRating.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}
function dramaMoviesScore(movies) {

  return scoresAverage(movies.filter((movie) => movie.genre.includes('Drama')));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}
function orderByYear(movies) {
  let movieByYear = [...movies];
  // spread operator is to make sure not to mutate the original array because .sort() does change/mutate the original array so always make sure you create a safe copy before sorting
  movieByYear.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
  return orderByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}
//we dont use this one because the tittle has ascents. we must use locale compare!
// function orderAlphabetically(movies) {
//   return [...movies]
//     .sort((a, b) => {
//       if (a.title > b.title) {
//         return 1;
//       } else if (a.title < b.title) {
//         return -1;
//       } else {
//         return 0;
//       }
//     })
//     .map((eachMovie) => eachMovie.title)
//     .slice(0, 20);    
// }

function orderAlphabetically(movies) {
  const orderByTitle = movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));
  return orderByTitle.slice(0, 20);
}