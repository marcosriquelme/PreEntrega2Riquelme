const carrito = []

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

const tableProductos = document.querySelector('#tablaProductos')
const inputBuscar = document.querySelector('#inputSearch')
const divToast = document.querySelector('div.toast-msg')

function crearFilaHTML(producto) {
        return `<tr>
                    <td class="class-table-number">${producto.id}</td>
                    <td class="emoji-image">${producto.imagen}</td>
                    <td>${producto.nombre}</td>
                    <td>$ ${producto.precio}</td>
                    <td><button id="${producto.id}" class="button button-outline button-big-emoji">🤍</button></td>
                </tr>`
}

function activarClickEnBotonesProductos() {
    const botones = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let producto = productosdealmacen.find((prod)=> prod.id === parseInt(boton.id))
            favoritos.push(producto)
            divToast.textContent = "Se agregó un producto a favoritos: " + producto.nombre
            divToast.className = ' animacion-div'
            guardarFavsEnLocalStorage()
        })
    })
}

function cargarProductos(array) {
    tableProductos.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> tableProductos.innerHTML += crearFilaHTML(producto) )
        activarClickEnBotonesProductos()
    } else {
        divToast.textContent = "No hay productos para listar."
    }
}

inputBuscar.addEventListener("search", ()=> {
    if (inputBuscar.value.trim() !== "") {
        let arrayResultante = productosdealmacen.filter((producto)=> producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarProductos(arrayResultante)
    }
})



cargarProductos(productosdealmacen)