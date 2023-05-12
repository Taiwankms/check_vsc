"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        let counter = 1;
        do {
            const a = prompt('Один из последних фильмов которые видели', ''),
                b = prompt('На сколько оцените его?', '');
            personalMovieDB.movies[a] = b;
            if (a.length != 0 && b.length != 0 && a.length < 50 && a != null && b != null) {
                counter++
            }
        } while (counter < 3);
    
    },
    detectPersonalLevel: function() {
        if (numberOfFilms < 10 && numberOfFilms > 0) {
            alert('мало фильмов');
        } else if (numberOfFilms > 10 && numberOfFilms < 20) {
            alert('уже лучше');
        } else if (numberOfFilms > 20) {
            alert('вы киноман');
        } else {
            alert("вы ввели херню!");
        }
    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourFavoriteGaners: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre == null) {
                console.log('вы ввели какуюто дич или не ввели вообще нихера');
                i--;
            }else {
                personalMovieDB.genres[i - 1] = genre
            }              
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`)
        });
    }
};


//let options = {
//    name: 'test',
//    width: 1024,
//    heigth: 1024,
//    colors: {
//        border: 'black',
//        bg: 'red',
//    },
//    makeTest: function () {
//        console.log('Hello test')
//    }
//
//};
//let descriptor = Object.getOwnPropertyDescriptor(options, 'heigth');
//Object.defineProperties(options, 'heigth', descriptor)
//console.log(JSON.stringify(descriptor, null, 2));
//const { border, bg } = options.colors
//console.log(border, bg)
//
//options.makeTest()
//
//console.log(Object.keys(options).length)
//console.log(options['colors']['border']);
//
//delete obj.name;
//
//console.log(obj);
//
//
//for (let key in options) {
//    if (typeof (options[key]) === 'object') {
//        for (i in options[key]) {
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//        }
//    } else {
//        console.log(`Свойство ${key} имеет значение ${options[key]}`)
//    }
//}
//console.log(count)
//
//let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//arr[99] = 0;
//console.log(arr.length)
//console.log(arr)
//arr.pop()
//arr.push('nine')
//arr.forEach(function(i, j, arr) {
//    console.log(`${j}: ${i} внутри массива ${arr}`);
//})
//
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//}
//for (let val of arr) {
//    console.log(val)
//}
//
//console.log(arr)