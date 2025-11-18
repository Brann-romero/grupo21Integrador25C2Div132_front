// 🌟 Datos de ejemplo (luego vendrán del backend)
const productos = [
    // GUITARRAS
    { id: 1, categoria: "Guitarra", nombre: "Stratocaster", precio: 150000, ruta_img: "img/guitarras/1.jpg", activo: true },
    { id: 2, categoria: "Guitarra", nombre: "Les Paul", precio: 200000, ruta_img: "img/guitarras/2.jpg", activo: true },
    { id: 3, categoria: "Guitarra", nombre: "Telecaster", precio: 180000, ruta_img: "img/guitarras/3.jpg", activo: true },
    { id: 4, categoria: "Guitarra", nombre: "Stratocaster", precio: 150000, ruta_img: "img/guitarras/4.jpg", activo: true },
    { id: 5, categoria: "Guitarra", nombre: "Les Paul", precio: 200000, ruta_img: "img/guitarras/5.jpg", activo: true },
    { id: 6, categoria: "Guitarra", nombre: "Telecaster", precio: 180000, ruta_img: "img/guitarras/6.jpg", activo: true },
    { id: 7, categoria: "Guitarra", nombre: "Stratocaster", precio: 150000, ruta_img: "img/guitarras/7.jpg", activo: true },
    { id: 8, categoria: "Guitarra", nombre: "Les Paul", precio: 200000, ruta_img: "img/guitarras/8.jpg", activo: true },
    { id: 9, categoria: "Guitarra", nombre: "Telecaster", precio: 180000, ruta_img: "img/guitarras/9.jpg", activo: true },
    { id: 10, categoria: "Guitarra", nombre: "Telecaster", precio: 180000, ruta_img: "img/guitarras/10.jpg", activo: true },

    // PRÓTESIS
    { id: 11, categoria: "Protesis", nombre: "Ananá", precio: 200, ruta_img: "img/protesis/1.jpg", activo: true },
    { id: 12, categoria: "Protesis", nombre: "Modelo Alpha", precio: 500, ruta_img: "img/protesis/2.jpg", activo: true },
    { id: 13, categoria: "Protesis", nombre: "Modelo Beta", precio: 750, ruta_img: "img/protesis/3.jpg", activo: true },
    { id: 14, categoria: "Protesis", nombre: "Ananá", precio: 200, ruta_img: "img/protesis/4.jpg", activo: true },
    { id: 15, categoria: "Protesis", nombre: "Modelo Alpha", precio: 500, ruta_img: "img/protesis/5.jpg", activo: true },
    { id: 16, categoria: "Protesis", nombre: "Modelo Beta", precio: 750, ruta_img: "img/protesis/6.jpg", activo: true },
    { id: 17, categoria: "Protesis", nombre: "Ananá", precio: 200, ruta_img: "img/protesis/7.jpg", activo: true },
    { id: 18, categoria: "Protesis", nombre: "Modelo Alpha", precio: 500, ruta_img: "img/protesis/8.jpg", activo: true },
    { id: 19, categoria: "Protesis", nombre: "Modelo Beta", precio: 750, ruta_img: "img/protesis/9.jpg", activo: true },
    { id: 20, categoria: "Protesis", nombre: "Modelo Beta", precio: 750, ruta_img: "img/protesis/10.jpg", activo: true }
];

let carrito = [];
let filtro = "";

// Render de tarjetas
function renderCategoria(cat, contenedorID) {
    const cont = document.getElementById(contenedorID);
    cont.innerHTML = "";

    productos
        .filter(p => p.activo)
        .filter(p =>
            p.categoria.toLowerCase() === cat.toLowerCase() &&
            (p.nombre.toLowerCase().includes(filtro) || p.categoria.toLowerCase().includes(filtro))
        )
        .forEach(p => {
            const card = document.createElement("div");
            card.className = "producto";
            card.innerHTML = `
                <img src="${p.ruta_img}">
                <div class="producto-nombre">${p.nombre}</div>
                <div class="producto-precio">$${p.precio}</div>

                <div class="controles">
                    <input type="number" min="1" value="1" class="cantidad">
                    <button class="btn-agregar" data-id="${p.id}">Agregar</button>
                </div>
            `;
            cont.appendChild(card);
        });
}

function actualizarVista() {
    renderCategoria("Guitarra", "lista-guitarras");
    renderCategoria("Protesis", "lista-protesis");
}

// Búsqueda
document.getElementById("input-buscar").addEventListener("input", e => {
    filtro = e.target.value.toLowerCase();
    actualizarVista();
});

// Flechas
document.addEventListener("click", e => {
    if (e.target.classList.contains("flecha")) {
        const lista = document.getElementById(e.target.dataset.target);
        lista.scrollLeft += e.target.classList.contains("izquierda") ? -250 : 250;
    }
});

// Agregar al carrito
document.addEventListener("click", e => {
    if (e.target.classList.contains("btn-agregar")) {

        const id = Number(e.target.dataset.id);
        const prod = productos.find(p => p.id === id);
        const card = e.target.closest(".producto");
        const cantidad = Number(card.querySelector(".cantidad").value);

        carrito.push({
            id: prod.id,
            nombre: prod.nombre,
            precio: prod.precio,
            cantidad
        });

        console.log(carrito);
        alert(`${cantidad} x ${prod.nombre} agregado al carrito`);
    }
});

// Inicializar
actualizarVista();
