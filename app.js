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

