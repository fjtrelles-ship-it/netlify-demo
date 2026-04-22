const data = {
    "Platos a la carta": [
        {nombre:"Ceviche", precio:35, desc:"Pescado, limon, camote, lechuga, yuca, cancha, sarandaja", img:"https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/379d1ba605985c4bc3ea975cabacce13.jpg?itok=OPDxjAtZ"},
        {nombre:"Arroz con Mariscos", precio:30, desc:"Mariscos, arroz, alberja, pimiento, zanahoria", img:"https://peru.info/archivos/publicacion/210-imagen-106565112021.jpg"},
        {nombre:"Chicharron de Pescado", precio:25, desc:"Pescado, harina, aceite", img:"https://jameaperu.com/assets/images/chicharron-de-pescado_800x534.webp"},
        {nombre:"Chicharron de Pota", precio:30, desc:"Pota, harina, aceite, limon", img:"https://www.apega.pe/wp-content/uploads/2025/06/receta-de-chicharron-de-pota-800x445.jpg.webp"},
        {nombre:"Papa a la huancaina", precio:8, desc:"Papa, aceituna, lechuga, huevo, leche, galleta, queso", img:"https://i.ytimg.com/vi/9rHZ4I_HRRw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBw7SgnDtFyaL04E40y4S9kesozRg"},
        {nombre:"Causa limeña", precio:14, desc:"Papa, aceituna, lechuga, huevo, pollo", img:"https://i.ytimg.com/vi/gtCIqYUCekU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCE6OY6PW7IQG2vZu3nI-nc9obUFg"},
        {nombre:"Tacu Tacu", precio:20, desc:"Frijoles, arroz, carne", img:"https://cookeatlivelove.com/wp-content/uploads/2023/04/tacu-tacu-recipe.jpg"},
        {nombre:"Caldo de Gallina", precio:25, desc:"Gallina, papas, zanahoria, huevo, fideo", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARmgFVVYMDn_UP6jAN_9Ux-zld3yg4S18QQ&s"}
    ],
    "Bebidas": [
        {nombre:"Coca Cola", precio:3, desc:"Bebida fria", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBYrjfEuRXwApW3i8WzxvoE5e1b8KLWoHgg&s"},
        {nombre:"Inca Kola", precio:3, desc:"Bebida fria", img:"https://www.tiendaperuonline.com/cdn/shop/files/inca_kola_300_ml_698x700.png?v=1762278041"},
        {nombre:"Sprite", precio:3, desc:"Bebida fria", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzd-kmR16pBtQxlp1ZpuNUtxQdXTeOrM5DA&s"},
        {nombre:"Piña", precio:15, desc:"Fruta fresca", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlG-aYTEFx135KZbvm313T9qNwGTC38wIGQ&s"},
        {nombre:"Maracuya", precio:18, desc:"Fruta fresca", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddhAQe8yteIOqH0BM_U5BMwamCF4Z8wme2g&s"},
        {nombre:"Maracuya Frozen", precio:22, desc:"Fruta fresca", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRR6gxwaUaPYh9q5WGYhOxdPDvIiWprzvCDw&s"},
        {nombre:"Chicha Morada", precio:17, desc:"Fruta fresca", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBb9i502bGNGhM1tJ6q1aqs1O5ppf1f9WYA&s"},
        {nombre:"Limonada", precio:12, desc:"Fruta fresca", img:"https://jameaperu.com/assets/images/limonada-frozen_800x534.webp"},
        {nombre:"Limonada Frozen", precio:16, desc:"Fruta fresca", img:"https://media-cdn.tripadvisor.com/media/photo-m/1280/13/56/13/71/limonada-frozen.jpg"}
    ],
    "Licores": [
        {nombre:"Cerveza Pilsen", precio:10, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFf8X40l-bK0QpNezp9xfzi2GveXi47VJYuA&s"},
        {nombre:"Cerveza Cristal", precio:10, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3GsROEGydN5EhpXaeOMt2o8JciNqw_HjWg&s"},
        {nombre:"Cerveza Corona", precio:9, desc:"Bebida alcoholica", img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ75y5MxIWdyr7CE5dsTRtpu-mNZbKt-0NBFhwthG9qZvEBkHtA"},
        {nombre:"Pisco Sour", precio:25, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNRQMsSaMcSP7v65l02-h-z-xBx7mjZrNOA&s"},
        {nombre:"Laguna Azul", precio:55, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcgJOBl3gIAzEpjCnetdeZdh6F2WMBHP2ww&s"},
        {nombre:"Piña Colada", precio:30, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLB4RM1toK-TrNCdjVBJNL0hsG4-ieVRFyQ&s"},
        {nombre:"Vino Tinto", precio:35, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemMdRSqd99kH4k66lqDlsSMyftzgOMDzfrw&s"},
        {nombre:"Whisky", precio:150, desc:"Bebida alcoholica", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIx4BHeB_2rJD_mzqmKD9DA911g7OWbV2mA&s"}
    ],
    "Carnes": [
        {nombre:"Lomo a la plancha", precio:30, desc:"Carne, papas, arroz", img:"https://comedera.com/wp-content/uploads/sites/9/2024/06/Lomo-de-cerdo-a-la-plancha.jpg"},
        {nombre:"Seco de carne", precio:30, desc:"Carne, papas, arroz", img:"https://i.ytimg.com/vi/rMsbGQ2xw-M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1VSUK1nRo80Bdwo12ASfldK6ofA"},
        {nombre:"Lomo Saltado", precio:30, desc:"Carne, papas, arroz, pimiento, cebolla, tomate", img:"https://i.ytimg.com/vi/ErRIA_Owc58/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZHq6bDGR9KRIWFxTMjA5QU2p9Jw"},
        {nombre:"Parrilla", precio:45, desc:"Mix de carnes", img:"https://elchaparral.com.pe/archivos/producto/25-27-parrilla-familiar-chaparral-muestra.webp"},
        {nombre:"Parrilla familiar", precio:65, desc:"Mix de carnes", img:"https://elchaparral.com.pe/archivos/producto/25-27-parrilla-familiar-chaparral-muestra.webp"}
    ],
    "Postres": [
        {nombre:"Arroz con leche", precio:5, desc:"Arroz, leche, canela, clavo de olor", img:"https://www.recetasnestle.com.co/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/8b80d005d2b35d7a583470e3f19c9c1f.jpeg?itok=7TbncD74"},
        {nombre:"Mazamorra morada", precio:7, desc:"   ", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mazamorra_morada_peruana.jpg/330px-Mazamorra_morada_peruana.jpg"},
        {nombre:"Arroz con leche combinado", precio:9, desc:"   ", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZIj9NvSv-nRoZHGJC_TNsGBr-It0VxG8UA&s"},
        {nombre:"Picarones", precio:9, desc:"   ", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgXvshybDLzAkqawXISmX3Y72oUQXxWcU07N7QHcF3cc54UWtAAmU0BMMTFxVLO89pqeNSAADwEd3CzsxwZEOh5NYBOpX5dXqCJwnCg&s=10"},
        {nombre:"Alfajores", precio:2, desc:"   ", img:"https://www.somewhatsimple.com/wp-content/uploads/2019/08/alfajores_1.jpg"},
        {nombre:"Cheesecake de maracuyá", precio:6, desc:"   ", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeoPua4vqS_qyvfECuc0gRIsyiuzm5XzfOQ&s"},
        {nombre:"Cheesecake de mango", precio:6, desc:"   ", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXObfktkaBNyIzA52Kl0isQQgSBpY1HTzgFw&s"},
        
    ]

};

const categoryImages = {
    "Platos a la carta": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    "Bebidas": "https://www.supercash.es/wp-content/uploads/2022/02/bebidas-refrescantes.jpg",
    "Carnes": "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
    "Postres": "https://i.blogs.es/e90432/vasitos/450_1000.jpg"
};

const heroSection = document.getElementById("heroSection");
const categoriesDiv = document.getElementById("categories");
const menuSection = document.getElementById("menuSection");
const menu = document.getElementById("menu");
const sectionTitle = document.getElementById("sectionTitle");
const sectionSubtitle = document.getElementById("sectionSubtitle");
const backBtn = document.getElementById("backBtn");
const cartItems = document.getElementById("cartItems");

let categoriaActual = "Platos a la carta";
let vistaActual = "inicio";
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let productoActual = null;
let metodoEntrega = "tienda";
let origenCategorias = "menu";
let sliderActual = 0;
let sliderTimer = null;
let mesaSeleccionada = "Mesa 1";

const ofertasSlider = [
    {
        tipo: "producto",
        categoria: "Platos a la carta",
        nombre: "Ceviche",
        etiqueta: "Especialidad",
        titulo: "Ceviche fresco de la casa",
        texto: "Entra directo al plato estrella y agregalo al pedido en segundos.",
        imagen: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
    },
    {
        tipo: "producto",
        categoria: "Carnes",
        nombre: "Lomo Saltado",
        etiqueta: "Favorito",
        titulo: "Lomo saltado para compartir",
        texto: "Uno de los mas pedidos para almuerzo y cena, listo para ordenar.",
        imagen: "https://images.pexels.com/photos/8477293/pexels-photo-8477293.jpeg"
    },
    {
        tipo: "categoria",
        categoria: "Bebidas",
        etiqueta: "Delivery rapido",
        titulo: "Bebidas, jugos y frozen",
        texto: "Revisa toda la seccion de bebidas frias y acompana tu pedido.",
        imagen: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg"
    },
    {
        tipo: "categoria",
        categoria: "Postres",
        etiqueta: "Antojo dulce",
        titulo: "Postres para cerrar perfecto",
        texto: "Picarones, mazamorra y cheesecakes para sumar al carrito.",
        imagen: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
    }
];

function mostrarInicio(event) {
    if (event) event.preventDefault();
    vistaActual = "inicio";
    heroSection.classList.remove("hidden");
    document.getElementById("homeSections").classList.remove("hidden");
    categoriesDiv.style.display = "none";
    menuSection.style.display = "none";
}

function mostrarCategorias(event) {
    if (event) event.preventDefault();
    vistaActual = "categorias";
    origenCategorias = "categorias";
    heroSection.classList.add("hidden");
    document.getElementById("homeSections").classList.add("hidden");
    menuSection.style.display = "none";
    categoriesDiv.style.display = "grid";
}

function mostrarCategoria(cat) {
    categoriaActual = cat;
    vistaActual = "categoria";
    heroSection.classList.add("hidden");
    document.getElementById("homeSections").classList.add("hidden");
    categoriesDiv.style.display = "none";
    menuSection.style.display = "block";
    backBtn.textContent = origenCategorias === "menu-completo" ? "Volver al menu completo" : "Volver a categorias";
    sectionTitle.textContent = cat;
    sectionSubtitle.classList.add("hidden");
    renderMenuCategoria();
}

function mostrarEspecialidad(event) {
    if (event) event.preventDefault();
    vistaActual = "especialidad";
    heroSection.classList.add("hidden");
    document.getElementById("homeSections").classList.add("hidden");
    categoriesDiv.style.display = "none";
    menuSection.style.display = "block";
    backBtn.textContent = "Volver al inicio";
    sectionTitle.textContent = "Especialidad de la casa";
    sectionSubtitle.textContent = "Una seccion especial para destacar lo mejor del restaurante.";
    sectionSubtitle.classList.remove("hidden");
    renderEspecialidad();
}

function mostrarCartaCompleta(event) {
    if (event) event.preventDefault();
    vistaActual = "menu-completo";
    heroSection.classList.add("hidden");
    document.getElementById("homeSections").classList.add("hidden");
    menuSection.style.display = "none";
    categoriesDiv.style.display = "grid";
    origenCategorias = "menu-completo";
    renderCategorias("menu-completo");
}

function volverVistaAnterior() {
    if (vistaActual === "categoria") {
        if (origenCategorias === "menu-completo") {
            mostrarCartaCompleta();
            return;
        }
        mostrarCategorias();
        return;
    }
    mostrarInicio();
}

function renderCategorias(modo = "categorias") {
    categoriesDiv.innerHTML = "";
    sectionSubtitle.classList.add("hidden");
    Object.keys(data).filter(cat => cat !== "Licores").forEach(cat => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.style.backgroundImage = `url('${categoryImages[cat] || "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg"}')`;
        card.innerHTML = `
            <div class="category-overlay">
                <span>${cat}</span>
            </div>
        `;
        card.onclick = () => mostrarCategoria(cat);
        categoriesDiv.appendChild(card);
    });

    if (modo === "menu-completo" && data.Licores) {
        const licorCard = document.createElement("div");
        licorCard.className = "category-card";
        licorCard.style.backgroundImage = "url('https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg')";
        licorCard.innerHTML = `
            <div class="category-overlay">
                <span>Licores</span>
            </div>
        `;
        licorCard.onclick = () => mostrarCategoria("Licores");
        categoriesDiv.appendChild(licorCard);
    }
}

function renderMenuCategoria() {
    menu.innerHTML = "";
    if (categoriaActual === "Bebidas") {
        renderGrupo("Bebidas", data.Bebidas || []);
        renderGrupo("Bebidas con alcohol", data.Licores || []);
        return;
    }
    (data[categoriaActual] || []).forEach(p => menu.appendChild(crearCardProducto(p)));
}

function renderEspecialidad() {
    menu.innerHTML = "";

    const banner = document.createElement("div");
    banner.className = "special-banner";
    banner.innerHTML = `
        <span>Recomendado</span>
        <h3>Ceviche especial del chef</h3>
        <p>Una vista especial para destacar el plato principal de la casa y acompanarlo con otras recomendaciones.</p>
    `;
    menu.appendChild(banner);

    const especiales = [
        data["Platos a la carta"][0],
        data["Platos a la carta"][1],
        data["Platos a la carta"][8],
        data["Platos a la carta"][7],
        data["Platos a la carta"][4],
        data["Bebidas"][6],
        data["Bebidas"][4],
        data["Postres"][0],
        data["Postres"][3],
        data["Postres"][2]
    ].filter(Boolean);

    especiales.forEach(p => menu.appendChild(crearCardProducto(p)));
}

function renderGrupo(titulo, items) {
    if (!items || !items.length) return;
    const heading = document.createElement("h3");
    heading.className = "menu-group-title";
    heading.textContent = titulo;
    menu.appendChild(heading);
    items.forEach(p => menu.appendChild(crearCardProducto(p)));
}

function crearCardProducto(p) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}">
        <div class="info">
            <h4>${p.nombre}</h4>
            <p>S/ ${p.precio}</p>
            <button type="button">Ver</button>
        </div>
    `;

    card.onclick = () => abrirModal(p);
    card.querySelector("button").onclick = event => {
        event.stopPropagation();
        abrirModal(p);
    };

    return card;
}

function abrirModal(p) {
    productoActual = p;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = p.img;
    document.getElementById("modalName").innerText = p.nombre;
    document.getElementById("modalDesc").innerText = p.desc;
    document.getElementById("modalPrice").innerText = p.precio;
}

function irACategoria(cat) {
    origenCategorias = "menu-completo";
    mostrarCategoria(cat);
}

function irAProducto(categoria, nombre) {
    const producto = (data[categoria] || []).find(item => item.nombre === nombre);
    if (!producto) return;
    categoriaActual = categoria;
    origenCategorias = "menu-completo";
    mostrarCategoria(categoria);
    abrirModal(producto);
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function agregarProducto() {
    if (!productoActual) return;

const index = carrito.findIndex(p => p.nombre === productoActual.nombre);

if (index !== -1) {
    carrito[index].cantidad++;
} else {
    carrito.push({ ...productoActual, cantidad: 1 });
}    renderCarrito();
    cerrarModal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
	
    //  animación del carrito
    const boton = document.querySelector(".cart-icon");
    boton.style.transform = "scale(1.2)";
    boton.style.background = "#25d366";

    setTimeout(() => {
        boton.style.transform = "scale(1)";
        boton.style.background = "black";
    }, 300);
}

function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    renderCarrito();
}
function renderCarrito() {
    const total = carrito.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);
    document.getElementById("total").innerText = total;
    document.getElementById("cartCount").innerText = carrito.length;

    if (!carrito.length) {
        cartItems.innerHTML = '<p class="cart-empty">Tu carrito esta vacio por ahora.</p>';
        return;
    }

    cartItems.innerHTML = "";

    carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <img src="${producto.img}">
            <div class="cart-item-info">
                <h4>${producto.nombre}</h4>
                <p>S/ ${producto.precio}</p>

                <div class="cantidad">
                    <button onclick="event.stopPropagation(); cambiarCantidad(${index}, -1)">-</button>
                    <span>${producto.cantidad}</span>
                    <button onclick="event.stopPropagation(); cambiarCantidad(${index}, 1)">+</button>
                </div>
            </div>

            <button class="cart-remove" onclick="event.stopPropagation(); quitarProducto(${index})">X</button>
        `;

        cartItems.appendChild(item);
    });
}

function quitarProducto(index) {
    carrito.splice(index, 1);
    renderCarrito();
}

function setFogonPeruanoMethod(metodo) {
    metodoEntrega = metodo;
    document.getElementById("tiendaBtn").classList.toggle("active", metodo === "tienda");
    document.getElementById("deliveryBtn").classList.toggle("active", metodo === "delivery");
    document.getElementById("direccionField").classList.toggle("hidden", metodo !== "delivery");
    document.getElementById("stateSection").classList.toggle("hidden", metodo === "delivery");
    document.getElementById("mesaSection").classList.toggle("hidden", metodo === "delivery");
}

function seleccionarMesa(mesa, event) {
    mesaSeleccionada = mesa;
    document.querySelectorAll(".table-btn").forEach(btn => {
        btn.classList.toggle("active", btn.textContent.trim() === mesa);
    });
    if (event) event.preventDefault();
}

function actualizarMetodoPago() {
    const metodoPago = document.getElementById("metodoPago").value;
    const paymentNote = document.getElementById("paymentNote");
    const paymentStatus = document.getElementById("paymentStatus");
    const paymentQr = document.getElementById("paymentQr");

    paymentStatus.classList.add("hidden");
    paymentQr.classList.add("hidden");

    if (metodoPago === "Efectivo") {
        paymentNote.textContent = "Pago en efectivo al momento de recibir tu pedido.";
        paymentQr.src = "";
        return;
    }

    if (metodoPago === "Yape") {
        paymentNote.textContent = "Escanea el QR para pagar con Yape.";
        paymentQr.src = "img/yape.png.jpeg";
        paymentQr.alt = "Codigo QR de Yape";
        paymentQr.classList.remove("hidden");
        return;
    }

    if (metodoPago === "Plin") {
        paymentNote.textContent = "Escanea el QR para pagar con Plin.";
        paymentQr.src = "img/QR.png";
        paymentQr.alt = "Codigo QR de Plin";
        paymentQr.classList.remove("hidden");
        return;
    }

    paymentNote.textContent = "Transferencia bancaria.";
    paymentStatus.textContent = "Pronto agregaremos los datos de transferencia para este metodo de pago.";
    paymentStatus.classList.remove("hidden");
    paymentQr.src = "";
}

function scrollToCart() {
    document.getElementById("cartPanel").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function cerrarCarrito() {
    document.getElementById("cartPanel").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
function scrollToReservas() {
    mostrarInicio();
    setTimeout(() => {
        document.getElementById("reservasSection").scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
}

function comprar() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito");
        return;
    }

    const total = carrito.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);
    const tipoPedido = metodoEntrega === "delivery" ? "Delivery" : "Pedido en tienda";

    // construir mensaje
const nombre = document.getElementById("clienteNombre").value || "Cliente";
const direccion = document.getElementById("clienteDireccion").value || "No especificada";
const estado = document.getElementById("clienteEstado").value;
const piso = document.getElementById("clientePiso").value;
const metodoPago = document.getElementById("metodoPago").value;

    if (metodoEntrega === "delivery" && !document.getElementById("clienteDireccion").value.trim()) {
        alert("Agrega la direccion para el delivery.");
        return;
    }

let mensaje = "🛒 *NUEVO PEDIDO*%0A%0A";

mensaje += `👤 *Cliente:* ${nombre}%0A`;
mensaje += `🧾 *Tipo:* ${tipoPedido}%0A`;
mensaje += `💳 *Pago:* ${metodoPago}%0A`;

    if (metodoEntrega === "delivery") {
mensaje += `📍 *Direccion:* ${direccion}%0A`;
    } else {
mensaje += `📍 *Ubicacion:* ${piso} - ${estado}%0A`;
mensaje += `🍽️ *Mesa:* ${mesaSeleccionada}%0A`;
    }

mensaje += `%0A`;
    carrito.forEach(p => {
        mensaje += `• ${p.nombre} x${p.cantidad} = S/ ${p.precio * p.cantidad}%0A`;
    });

    mensaje += `%0A💰 *Total:* S/ ${total}%0A`;
    mensaje += `🚚 *Metodo:* ${tipoPedido}%0A`;

    const telefono = "51984594013";

    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    // abrir WhatsApp
    window.open(url, "_blank");

    // limpiar carrito
    carrito = [];
    localStorage.removeItem("carrito");
    renderCarrito();
}

function enviarReservacion(event) {
    event.preventDefault();
    const nombre = document.getElementById("reservaNombre").value;
    const fecha = document.getElementById("reservaFecha").value;
    const personas = document.getElementById("reservaPersonas").value;
    alert("Reservacion enviada para " + nombre + " el " + fecha + " para " + personas + ".");
    event.target.reset();
}

function actualizarUbicacion(event) {
    event.preventDefault();
    const nombre = document.getElementById("ubicacionNombre").value.trim();
    const direccion = document.getElementById("ubicacionDireccion").value.trim();
    const referencia = document.getElementById("ubicacionReferencia").value.trim();

    if (nombre) document.getElementById("localNombre").innerText = nombre;
    if (direccion) document.getElementById("localDireccion").innerText = direccion;
    if (referencia) document.getElementById("localReferencia").innerText = "Referencia: " + referencia;

    alert("Ubicacion actualizada correctamente.");
    event.target.reset();
}

function renderHeroSlider() {
    const track = document.getElementById("heroSliderTrack");
    const dots = document.getElementById("sliderDots");
    if (!track || !dots) return;

    track.innerHTML = "";
    dots.innerHTML = "";

    ofertasSlider.forEach((oferta, index) => {
        const slide = document.createElement("div");
        slide.className = "hero-slide";
        slide.style.backgroundImage = `url('${oferta.imagen}')`;
        slide.innerHTML = `
            <div class="hero-slide-content">
                <span class="hero-slide-tag">${oferta.etiqueta}</span>
                <h3>${oferta.titulo}</h3>
                <p>${oferta.texto}</p>
                <span class="hero-slide-cta">Pedir ahora</span>
            </div>
        `;
        slide.onclick = () => activarOferta(oferta);
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = "slider-dot";
        dot.type = "button";
        dot.onclick = () => irASlide(index);
        dots.appendChild(dot);
    });

    actualizarSlider();
    reiniciarSliderAuto();
}

function activarOferta(oferta) {
    if (oferta.tipo === "producto") {
        irAProducto(oferta.categoria, oferta.nombre);
        return;
    }
    irACategoria(oferta.categoria);
}

function actualizarSlider() {
    const track = document.getElementById("heroSliderTrack");
    const dots = document.querySelectorAll(".slider-dot");
    if (!track) return;
    track.style.transform = `translateX(-${sliderActual * 100}%)`;
    dots.forEach((dot, index) => dot.classList.toggle("active", index === sliderActual));
}

function moverSlider(direccion) {
    sliderActual = (sliderActual + direccion + ofertasSlider.length) % ofertasSlider.length;
    actualizarSlider();
    reiniciarSliderAuto();
}

function irASlide(index) {
    sliderActual = index;
    actualizarSlider();
    reiniciarSliderAuto();
}

function reiniciarSliderAuto() {
    if (sliderTimer) clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
        sliderActual = (sliderActual + 1) % ofertasSlider.length;
        actualizarSlider();
    }, 5000);
}

renderCategorias();
renderCarrito();
renderHeroSlider();
setFogonPeruanoMethod("tienda");
seleccionarMesa("Mesa 1");
actualizarMetodoPago();
mostrarInicio();
