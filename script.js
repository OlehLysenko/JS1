let numberOfFilms
let filmTitle
let filmRate

function start() {
    do {
        numberOfFilms= +prompt("Сколько фильмов вы уже посмотрели?", "")
    }
    while (numberOfFilms == 0 || numberOfFilms == null || isNaN(numberOfFilms))
}
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        do {
            filmTitle = prompt("Один из последних просмотренных фильмов?", "")
        }
        while (filmTitle == false || filmTitle == null || filmTitle.length >=50)
    
        do {
        filmRate  = prompt("На сколько вы его оцените?", "")
        }
        while (filmRate == false || filmRate == null)
        personalMovieDB.movies[filmTitle] = filmRate;
    }
}
function detectPersonalLevel() {
    if (personalMovieDB.count <10) {    
        alert("Просмотрено довольно мало фильмов")
    } else { 
        if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель")    
    } else { 
        if (personalMovieDB.count >= 30) {
            alert("Вы киноман")    
    } else {
        alert("Произошла ошибка")   
        }   }   } 
}
const showMyDb = (hidden) => {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
const writeYourGenres = () => {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "")        
    }
}
start()
detectPersonalLevel()

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
rememberMyFilms()
showMyDb(personalMovieDB.privat)
writeYourGenres()



