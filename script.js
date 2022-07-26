let filmTitle
let filmRate


const personalMovieDB = {

    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function() {
        do {
            personalMovieDB.count= +prompt("Сколько фильмов вы уже посмотрели?", "")
        }
        while (personalMovieDB.count == 0 || personalMovieDB.count == null || isNaN(personalMovieDB.count))
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
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
    },
    showMyDb : (hidden) => {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : () => {
        for (let i = 0; i < 3; i++) {            
            do {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "")
            }
            while (personalMovieDB.genres[i] == false || personalMovieDB.genres[i] == null)        
        }
        personalMovieDB.genres.forEach((genre, i) => { 
            console.log(`Любимый жанр #${i+1} - это ${genre}`)            
        });
    },
    toggleVisibleMyDB: (privacy) => personalMovieDB.privat = !privacy
        
}

personalMovieDB.start()

personalMovieDB.detectPersonalLevel()


personalMovieDB.rememberMyFilms()
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat)
personalMovieDB.showMyDb(personalMovieDB.privat)
personalMovieDB.writeYourGenres()
