/* const movies = require("./data"); */

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director == director)
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.filter(item => item.director == director)
  if (result.length === 0) {
    console.log("EXERCISE 3 -> No movies found for this director.");
    return 0;
  }
  let totScore = result.reduce((tot, item) => tot + (isNaN(item.score) ? 0 : item.score), 0) 
  let avarageScore = totScore / result.length
  console.log("EXERCICE 3 ->", typeof avarageScore);
  return avarageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(item => item.title);
  result.sort()
  result.length = 20
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.map(item => ({ title: item.title, year: item.year}))
  let sortedResult = result.sort((a, b) => {
    { if( a.year != b.year) {
        return  a.year - b.year
      } else {
        return a.title.localeCompare(b.title)
      }
    }
  })
  console.log("EXERCICE 5 ->", sortedResult);
  return sortedResult;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let result = 0
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].genre.includes(genre)) {
      result += array[i].score
      count++
    }
  }
  return Math.round(result / count*100)/100
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map( item => ({title: item.title, duration: item.duration }))
  let res2 = result.forEach(item => { item.duration
    
  });
  return result

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
