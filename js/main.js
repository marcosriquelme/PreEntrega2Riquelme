const carrito = []

//lista de productos a seleccionar
const productos = [{ codigo: 1, nombre: 'Jabon liquido 3l', precio: 1599 },
{ codigo: 2, nombre: 'Aceite Natura 1l', precio: 900 },
{ codigo: 3, nombre: 'Leche la serenisima 1l', precio: 350 },
{ codigo: 4, nombre: 'Arroz Gallo 1k', precio: 450 },
{ codigo: 5, nombre: 'Mayonesa 500g', precio: 550 },
{ codigo: 6, nombre: 'Savora 500g', precio: 380 },]


//buscador de productos y codigos 
function buscarProducto(codigo) { 
    let resultado = productos.find((producto) => producto.codigo === parseInt(codigo))
    return resultado
}

//iniciar compra de productos
function comprar() {
    let codigo = prompt('Ingresa el código de tu prenda preferida:')
    let productoElegido = buscarProducto(codigo)
    if (productoElegido !== undefined) {
        carrito.push(productoElegido)
        alert(`✅ ${productoElegido.nombre.toUpperCase()} se agregó al carrito.`)
        let respuesta = confirm('¿Deseas llevar otro producto?')
        if (respuesta === true) {
            comprar()
        } else {
            console.table(carrito)
            finalizarCompra()
        }
    } else {
        alert('⛔️ Error en el código ingresado. Refresca para comenzar de nuevo.')
    }
}

//finalizar compra del carrito
function finalizarCompra() {
    const shopping = new Compra(carrito)
    console.log(`El costo total de su compra es de $ ${shopping.obtenerSubtotal()}. Muchas gracias por tu compra!`)
}