//lista de productos a seleccionar
const productosdealmacen = [{ id: 1, imagen:'🧴', nombre: 'Aceite Natura 900ml', precio: 650 },
{ id: 2, imagen:'🍙', nombre: 'Arroz Gallo 1k', precio: 400 },
{ id: 3, imagen:'🧂', nombre: 'Azucar 1k', precio: 650 },
{ id: 4, imagen:'🥫', nombre: 'Atun la campagnola 170g', precio: 800 },
{ id: 5, imagen:'☕', nombre: 'nescafe 400g', precio: 1200 },
{ id: 6, imagen:'🍯', nombre: 'Dulce de leche La Serenisima', precio: 500 },
{ id: 7, imagen:'🍜', nombre: 'fideos tirabuzón', precio: 250 },
{ id: 8, imagen:'🧼', nombre: 'jabon liquido 900g', precio: 1650 },
{ id: 9, imagen:'🥛', nombre: 'leche sachet 1l', precio: 280 },
{ id: 10, imagen:'🍫', nombre: 'almendra/chocolatada', precio: 950 },
{ id: 11, imagen:'🍿', nombre: 'Savora 500g', precio: 350 },
{ id: 12, imagen:'🌯', nombre: 'mayonesa 500g', precio: 380 },]

function guardarFavsEnLocalStorage() {
    if (favoritos.length > 0) {
        localStorage.setItem('MisFavoritos', JSON.stringify(favoritos))
    } 
}

function recuperarFavoritosDeLocalStorage() {
    if (localStorage.getItem('MisFavoritos')) {
        return JSON.parse(localStorage.getItem('MisFavoritos'))
    } else {
        return []
    }
}


const favoritos = recuperarFavoritosDeLocalStorage()