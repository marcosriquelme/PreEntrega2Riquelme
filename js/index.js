const cards = document.querySelector('section.section-cards#section-card')
const searchBar = document.querySelector('input#search-bar.search-input')
const sizes = document.querySelector('label#sizess')

function card(prod) {
    return `<div class="cards">
                <div class="product-name"><h3>${prod.model}</h3></div>
                <div class="product-img">
                    <img src="${prod.img}" alt="${prod.model}">
                </div>
                <div class="info-box">
                    <div class="product-size">${sizes.innerHTML}<div>
                    <div class="product-price">$ ${prod.price}</div>
                    <button class="card-button" id="${prod.id}">Seleccionar</button>
                </div>
            </div>`}

function productAvalaible(array) {
    cards.innerHTML = ''
    if (array.length > 0) {
    array.forEach(prod => cards.innerHTML += card(prod))
    selectItems()
    }
}


function sizeOptions() {
    const sizeList = document.querySelectorAll('select#sizeList')
        if (hatlist.length > 0) {
            hatlist.forEach((propiedad) => {
                sizeList.innerHTML += `<option>${propiedad.size}</option>`
            })
        }
}
sizeOptions()
productAvalaible(hatlist)
searchBar.addEventListener("search", () => {
    if (searchBar.value.trim() !== ''){
        let returnList = hatlist.filter((prod) => prod.model.toLowerCase().includes(searchBar.value.trim().toLowerCase()))
        productAvalaible(returnList)
    } else if (searchBar.value.trim() === ''){
        productAvalaible(hatlist)
    }
})

function selectItems() {
const cardButtons = document.querySelectorAll('button.card-button')
    cardButtons.forEach((button) =>{
        button.addEventListener('click', ()=> {
            let product = hatlist.find((prod)=> prod.id === parseInt(button.id))
            shoppingCart.push(product)
            saveShoppingCart()
            Toastify({
                text: "Is added to cart",
                duration: 1000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "black",
                }
            }).showToast();
        })
    })
}

buybtn.addEventListener('click', ()=>{
    const total = document.querySelector('span.total-numbers')
    let totalNum = parseInt(total.innerHTML)
    Swal.fire({
        title: `Your Total is $${totalNum.toFixed(2)}`,
        showDenyButton: true,
        confirmButtonText: 'Buy it',
        denyButtonText: `Don't Buy it`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Thanks for you Purchase!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Purchase canceled', '', 'error')
        }
    })
})


showShoppingCart(shoppingCart)

