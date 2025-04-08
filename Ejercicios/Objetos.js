//Primera parte
// function filterBooksByAuthor( books, author ){
//     return books.filter( (book) =>{
//         return book.author == author
//     } )
// }
//Tercer parte
function filterBooksByAuthor( books, author ){
    return books.filter( (book) =>{
        return book.author.includes(author)
    } )
}

const books = [
    { title: 'El Aleph', author: 'Jorge Luis Borges' },
    { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'Rayuela', author: 'Julio Cortázar' },
    { title: 'Ficciones', author: 'Jorge Luis Borges' },
    { title: 'El hacedor', author: 'Jorge Luis Borges' },
    { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
    { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
    { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
    { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
    { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
    { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { title: 'Bestiario', author: 'Julio Cortázar' },
    { title: 'Las armas secretas', author: 'Julio Cortázar' }
];
const books2 = [
    { title: 'El Aleph', author: 'Jorge Luis Borges' },
    { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'Rayuela', author: 'Julio Cortázar' },
    { title: 'Ficciones', author: 'Jorge Luis Borges' },
    { title: 'El hacedor', author: 'Jorge Luis Borges' },
    { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
    { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
    { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
    { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
    { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
    { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { title: 'Bestiario', author: 'Julio Cortázar' },
    { title: 'Las armas secretas', author: 'Julio Cortázar' }
];

//Primera parte
console.log("Primera Parte")
console.log("Vector filtrado")
const leakedBooks = filterBooksByAuthor(books, 'Julio')
console.log( leakedBooks )
//Segunda parte
console.log("Segunda Parte")
leakedBooks.map( book => book.author = 'victor' )
console.log("Vector filtrado modificado en el nombre de autor")
console.log( leakedBooks )
console.log("Vector original")
console.log(books)
//Cuarta parte
const leakedBooks2 = filterBooksByAuthor(books2, 'Julio')
console.log("Cuarta parte")
console.log("Vector original")
console.log(books2)
console.log("Vector filtrado")
console.log(leakedBooks2)
console.log("Vector filtrado modificado en el campo autor")
console.log(leakedBooks2.map( (book) => {
    return {...book, author : 'victor'}
} ))
console.log("Vector origian luego de hacer el cambio en el filtrado")
console.log(books2)