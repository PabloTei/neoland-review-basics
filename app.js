// Iteración #1: Mix for e includes  --------- NO ESTÁ BIEN DEL TODO, PREGUNTAR COMO PODER MEJORARLO

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categoriesFunction = () => {
    let moviesCategories = [];

    for (const movie of movies) {
        for (const categorie of movie.categories) {
        
            if(moviesCategories.includes(categorie)) {
            } else {
            moviesCategories.push(categorie)
            }
        }
    }   
    return moviesCategories;
}
console.log(categoriesFunction());


// Iteración #2: Mix Fors

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const medFunction = () => {
let totalCount = 0;

for (const user of users) {
    for (const key in user.favoritesSounds) {
      totalCount += user.favoritesSounds[key].volume;
    }
}
return totalCount / users.length;

}
console.log(medFunction());


// Iteración #3: Mix Fors

const users1 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let contFavoritesSounds = [];

for (const user1 of users1) {
   for (const key in user1.favoritesSounds) {
       
        if (contFavoritesSounds[key]) {
            contFavoritesSounds[key]++;
        } else {
            contFavoritesSounds[key]=1;
        }
    }
}
console.log(contFavoritesSounds)


// Iteración #4: Métodos findArrayIndex   ------- NO ME SALE

function findArrayIndex(array, text) {
   return array.indexOf(text);
    
}
console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Ajolote"))

// Iteración #5: Función rollDice

