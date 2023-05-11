"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let count = 1;
do {   
    const a = prompt('Один из последних фильмов которые видели', ''),
          b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
    if (a.length != 0 && b.length != 0 && a.length < 50 && a != null && b != null) {
        count++
    }         
} while (count < 3);

}

//rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10 && numberOfFilms > 0) {
        alert('мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms < 20) {
        alert('уже лучше');
    } else if (numberOfFilms > 20) {
        alert('вы киноман');
    } else {
        alert("вы ввели херню!");
    };
    
}

//detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
    
}

showMyDB(personalMovieDB.privat)

function writeYourFavoriteGaners() {
    for (let i = 1; i <= 3; i++) {        
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourFavoriteGaners();

