class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0)
        }
    }
}

let total = 0

carrito.forEach((_producto)=> {
    total += productos.precio
})