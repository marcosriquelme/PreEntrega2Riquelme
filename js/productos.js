hatlist = [{
    id: 0,
    model: 'piluso Boca Juniors',
    brand: 'Boca juniors',
    img: '/img/piluso-bob-hat-cabj-1__54040.jpg',
    size: [6, 7, 8, 8.5, 9, 9.5],
    price: 3500
}, {
    id: 1,
    model: 'piluso racing club',
    brand: 'Racing',
    img: '../img/360_360-gorro_piluso_escudo_blanco_1.jpg',
    size: [4.5, 5, 7, 8, 10],
    price: 2500
}, {
    id: 2,
    model: 'Piluso Afa "',
    brand: 'AFA',
    img: '../img/images (1).jpg argentina.jpg',
    size: [8, 9, 9.5, 10, 12],
    price: 2800
}, {
    id: 3,
    model: 'Piluso independiente"',
    brand: 'Independiente',
    img: '../img/gorro-piluso-de-independiente-puma-negro-36365755-640040024348001-1.jpg',
    size: [10, 10.5, 11, 12],
    price: 2500
}, {
    id: 4,
    model: 'Piluso San Lorenzo"',
    brand: 'San Lorenzo',
    img: '../img/D_707858-MLA49432622986_032022-F.jpg',
    size: [8, 8.5, 9, 9.5, 10],
    price: 2400
}, {
    id: 5,
    model: 'Piluso River plate"',
    brand: 'River Plate',
    img: '../img/piluso-river-09-12-negro.png',
    size: [7, 8, 9, 9.5, 10, 10.5],
    price: 3000
}, {
    id: 6,
    model: 'Gorra Jordan Nike',
    brand: 'Nike',
    img: '../img/690d1c077754ff3b643f6d168c91aab1_tn.jpg',
    size: [6, 6.5, 7, 8, 8.5, 10],
    price: 2500
}, {
    id: 7,
    model: 'Gorra Jordan rojo',
    brand: 'Jordan',
    img: '../img/NI_9A0128-R78-1.jpg',
    size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    price: 2800
}, {
    id: 8,
    model: 'Gorra New York"',
    brand: 'New york',
    img: '../img/gorra-new-era-new-york-yankees-59fifty-q421-whe-blk-12891479-min_1_3.jpg',
    size: [7, 9, 9.5, 11],
    price: 3300
}, {
    id: 9,
    model: 'Nike White',
    brand: 'Nike',
    img: '../img/GORRA-NIKE-L91-NOVELTY-CAP-UNISEX-.webp',
    size: [6, 6.7, 10, 11],
    price: 2300
}, {
    id: 10,
    model: 'Nike red ',
    brand: 'Nike',
    img: '../img/DH1640-657_0.jpg',
    size: [7, 8, 10, 11],
    price: 2980
}, {
    id: 11,
    model: 'New era green',
    brand: 'New era',
    img: '../img/gorras new era cap.jpg',
    size: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    price: 2760
}, {
    id: 12,
    model: 'Bros "Caballo',
    brand: 'goorin Bros',
    img: '../img/gorra-goorin-baseball-the-stallion-101-0393-whi-2-min_2.jpg',
    size: [8, 8, 5, 9, 9.5, 10],
    price: 4500
}, {
    id: 13,
    model: 'Bros"Aguila"',
    brand: 'Goorin Bros',
    img: '../img/G31010384-550-9128-550_2.png',
    size: [7, 8, 8.5, 9, 10],
    price: 3800
}, {
    id: 14,
    model: 'Bros "Pajaro"',
    brand: 'Goorin Bros',
    img: '../img/Gorra-Trucker-Amethyin-Bros-FASHO-DODO-Warna-Amethyja-Talla-Adulto-Ajustable-Uniseks-Gorras-Hombre-Gorras-Mujer.jpg',
    size: [5, 5.5, 6, 7, 7.5, 10],
    price: 3100
}, ]

function saveShoppingCart() {
    if (shoppingCart.length >= 0) {
        localStorage.setItem('MyProducts', JSON.stringify(shoppingCart))
    }
}

function getShoppingCart() {
    if (localStorage.getItem('MyProducts')) {
        return JSON.parse(localStorage.getItem('MyProducts'))
    } else {
        return []
    }
}

const shoppingCart = getShoppingCart()