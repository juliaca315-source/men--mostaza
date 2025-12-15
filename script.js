// 1. DATOS DEL MENÚ ACTUALIZADOS ("MOSTAZA")
// Copiamos exactamente los productos y precios de la imagen proporcionada
const menu = [
    // --- HAMBURGUESAS ---
    { id: 101, nombre: "Junior Carne", precio: 10000, categoria: "HAMBURGUESAS", descripcion: "Pan, carne junior, queso, lechuga, tomate, ripio fosforito y salsas.", icono: "🍔" },
    { id: 102, nombre: "De La Casa", precio: 16000, categoria: "HAMBURGUESAS", descripcion: "Pan, pepinillos, jamón, huevo frito, carne o pollo, tocineta, maíz, queso, lechuga, tomate, ripio.", icono: "🏠" },
    { id: 103, nombre: "Jumbo Carne", precio: 12500, categoria: "HAMBURGUESAS", descripcion: "Pan, carne jumbo, tocineta, maíz, queso, lechuga, tomate, ripio y salsas.", icono: "🥩" },
    { id: 104, nombre: "Jumbo Doble", precio: 18000, categoria: "HAMBURGUESAS", descripcion: "Pan, doble carne, doble pollo o mixto, jamón, tocineta, maíz, queso, lechuga, tomate, ripio.", icono: "🥓" },
    { id: 105, nombre: "Jumbo Pollo", precio: 12500, categoria: "HAMBURGUESAS", descripcion: "Pan, pollo jumbo, tocineta, maíz, queso, lechuga, tomate, ripio fosforito y salsas.", icono: "🍗" },
    { id: 106, nombre: "Junior Mixta", precio: 14000, categoria: "HAMBURGUESAS", descripcion: "Pan, carne y pollo junior, queso, lechuga, tomate, ripio fosforito y salsas.", icono: "🔄" },
    { id: 107, nombre: "Junior Pollo", precio: 10000, categoria: "HAMBURGUESAS", descripcion: "Pan, pollo junior, queso, lechuga, tomate, ripio fosforito y salsas.", icono: "🐤" },
    { id: 108, nombre: "Arepa Burguer", precio: 11000, categoria: "HAMBURGUESAS", descripcion: "Exquisita hamburguesa pero con tapas de arepa doradita.", icono: "🫓" },

    // --- PERROS CALIENTES ---
    { id: 201, nombre: "Perro Clásico", precio: 7000, categoria: "PERROS CALIENTES", descripcion: "Pan, salchicha, queso, papa fosforito y salsas.", icono: "🌭" },
    { id: 202, nombre: "Choriperro", precio: 12000, categoria: "PERROS CALIENTES", descripcion: "Pan, chorizo, tocineta, queso, papa fosforito y salsas.", icono: "🌭" },
    { id: 203, nombre: "Perro Especial", precio: 8500, categoria: "PERROS CALIENTES", descripcion: "Pan, salchicha, tocineta, queso, papa fosforito y salsas.", icono: "🥓" },
    { id: 204, nombre: "Perro Suizo", precio: 12500, categoria: "PERROS CALIENTES", descripcion: "Pan, suiza, tocineta, queso, papa fosforito y salsas.", icono: "🧀" },

    // --- SALCHIPAPAS ---
    { id: 301, nombre: "Salchipapa Pequeña", precio: 12000, categoria: "SALCHIPAPAS", descripcion: "Salchicha, pollo, tocineta, papas a la francesa, queso, huevo codorniz y salsas.", icono: "🍟" },
    { id: 302, nombre: "Salchipapa Grande", precio: 16000, categoria: "SALCHIPAPAS", descripcion: "La misma delicia pero tamaño GIGANTE.", icono: "🍟" },
    { id: 303, nombre: "Suiza Especial", precio: 13000, categoria: "SALCHIPAPAS", descripcion: "Suiza, ensalada, arepa y queso.", icono: "🥗" },
    { id: 304, nombre: "Choripapa", precio: 15000, categoria: "SALCHIPAPAS", descripcion: "Papa, chorizo, pollo, tocineta, queso, huevo codorniz y salsas.", icono: "🥓" },

    // --- BEBIDAS (Gaseosas - 250ml) ---
    {
        id: 401,
        nombre: "Gaseosa 250ml",
        precio: 2500,
        categoria: "BEBIDAS",
        descripcion: "Refrescante gaseosa fría.",
        icono: "🥤",
        tieneOpciones: true,
        opciones: ["Manzana Postobón", "Uva Postobón", "Naranja Postobón", "Hit Mora", "Hit Mandarina", "Hit Frutos Rojos", "Hit Piña"]
    },
    // --- JUGOS (En Leche) ---
    {
        id: 402,
        nombre: "Jugo en Leche",
        precio: 6500,
        categoria: "BEBIDAS",
        descripcion: "Jugo natural cremso preparado en leche.",
        icono: "🥛",
        tieneOpciones: true,
        opciones: ["Mora", "Fresa", "Maracuyá"]
    },

    // --- ADICIONES ---
    { id: 501, nombre: "Papas Pequeñas", precio: 3500, categoria: "ADICIONES", descripcion: "Porción pequeña de papas a la francesa", icono: "🍟" },
    { id: 502, nombre: "Papas Grandes", precio: 5000, categoria: "ADICIONES", descripcion: "Porción grande de papas a la francesa", icono: "🍟" },
    { id: 503, nombre: "Jamón", precio: 1000, categoria: "ADICIONES", descripcion: "Jamón extra", icono: "🥓" },
    { id: 504, nombre: "Queso", precio: 1000, categoria: "ADICIONES", descripcion: "Queso extra", icono: "🧀" },
    { id: 505, nombre: "Huevo de Codorniz", precio: 700, categoria: "ADICIONES", descripcion: "Huevo de codorniz", icono: "🥚" },
    { id: 506, nombre: "Huevo Frito", precio: 1200, categoria: "ADICIONES", descripcion: "Huevo frito", icono: "🍳" },
    { id: 507, nombre: "Tocineta", precio: 1200, categoria: "ADICIONES", descripcion: "Tocineta crujiente", icono: "🥓" },
    { id: 508, nombre: "Pepinillos", precio: 800, categoria: "ADICIONES", descripcion: "Pepinillos encurtidos", icono: "🥒" },
    { id: 509, nombre: "Maíz", precio: 1500, categoria: "ADICIONES", descripcion: "Maíz tierno", icono: "🌽" },

    // --- COMBOS ---
    // Combos de Hamburguesas
    { id: 701, nombre: "Combo Junior Carne", precio: 15000, categoria: "COMBOS HAMBURGUESAS", descripcion: "Junior Carne + Papas Pequeñas + Gaseosa", icono: "🍔" },
    { id: 702, nombre: "Combo Jumbo Carne", precio: 17000, categoria: "COMBOS HAMBURGUESAS", descripcion: "Jumbo Carne + Papas Pequeñas + Gaseosa", icono: "🍔" },
    { id: 703, nombre: "Combo Jumbo Doble", precio: 22000, categoria: "COMBOS HAMBURGUESAS", descripcion: "Jumbo Doble + Papas Pequeñas + Gaseosa", icono: "🍔" },
    { id: 704, nombre: "Combo Jumbo Pollo", precio: 17000, categoria: "COMBOS HAMBURGUESAS", descripcion: "Jumbo Pollo + Papas Pequeñas + Gaseosa", icono: "🍗" },
    { id: 705, nombre: "Combo Junior Mixta", precio: 18000, categoria: "COMBOS HAMBURGUESAS", descripcion: "Junior Mixta + Papas Pequeñas + Gaseosa", icono: "🍔" },
    { id: 706, nombre: "Combo Junior Pollo", precio: 15000, categoria: "COMBOS HAMBURGUESAS", descripcion: "Junior Pollo + Papas Pequeñas + Gaseosa", icono: "🍗" },
    // Combos de Perros
    { id: 707, nombre: "Combo Perro Clásico", precio: 12000, categoria: "COMBOS PERROS", descripcion: "Perro Clásico + Papas Pequeñas + Gaseosa", icono: "🌭" },
    { id: 708, nombre: "Combo Choriperro", precio: 16500, categoria: "COMBOS PERROS", descripcion: "Choriperro + Papas Pequeñas + Gaseosa", icono: "🌭" },
    { id: 709, nombre: "Combo Perro Especial", precio: 13500, categoria: "COMBOS PERROS", descripcion: "Perro Especial + Papas Pequeñas + Gaseosa", icono: "🌭" },
    { id: 710, nombre: "Combo Perro Suizo", precio: 17000, categoria: "COMBOS PERROS", descripcion: "Perro Suizo + Papas Pequeñas + Gaseosa", icono: "🌭" },

    // --- ESPECIALES ---
    { id: 601, nombre: "Suiza Especial", precio: 13000, categoria: "ESPECIALES", descripcion: "Suiza, ensalada, arepa y queso", icono: "⭐" },
    { id: 602, nombre: "Choripapa", precio: 15000, categoria: "ESPECIALES", descripcion: "Papa, chorizo, pollo, tocineta, queso, huevo de codorniz y salsas", icono: "🌟" }
];

// Estado del Carrito
let carrito = [];

// ELEMENTOS DEL DOM
const contenedorProductos = document.getElementById('contenedorProductos');
const listaCarrito = document.getElementById('listaCarrito');
const totalPrecioElemento = document.getElementById('totalPrecio');
const btnCheckout = document.getElementById('btnCheckout');
const modalCliente = document.getElementById('modalCliente');
const btnCancelar = document.getElementById('btnCancelar');
const formPedido = document.getElementById('formPedido');
const btnTema = document.getElementById('btnTema');
// Header para cambiar el nombre dinámicamente si se quiere, por ahora está en HTML

// Estado de navegación
let categoriaActual = null; // null = menú principal, string = categoría seleccionada

// 2. FUNCIÓN: Mostrar Menú Principal de Categorías
function mostrarMenuCategorias() {
    categoriaActual = null;
    contenedorProductos.innerHTML = '';

    // Obtenemos las categorías únicas, EXCLUYENDO subcategorías de COMBOS
    const todasCategorias = [...new Set(menu.map(p => p.categoria))];
    const categorias = todasCategorias.filter(cat =>
        cat !== "COMBOS HAMBURGUESAS" && cat !== "COMBOS PERROS"
    );

    // Agregar "COMBOS" manualmente si no existe
    if (!categorias.includes("COMBOS")) {
        categorias.push("COMBOS");
    }

    categorias.forEach(categoria => {
        // Determinar qué imagen usar
        let imagenSrc = '';
        if (categoria === "HAMBURGUESAS") imagenSrc = 'hamburguesa_hero.jpg';
        else if (categoria === "PERROS CALIENTES") imagenSrc = 'perro_hero.jpg';
        else if (categoria === "SALCHIPAPAS") imagenSrc = 'salchipapa_hero.jpg';
        else if (categoria === "BEBIDAS") imagenSrc = 'bebidas_hero.jpg';
        else if (categoria === "ADICIONES") imagenSrc = 'adiciones_menu.jpg';
        else if (categoria === "COMBOS") imagenSrc = 'combos_hero.jpg';
        else if (categoria === "ESPECIALES") imagenSrc = 'especiales_hero.jpg';

        // Crear tarjeta de categoría (clickeable)
        const divCategoria = document.createElement('div');
        divCategoria.className = 'category-card';
        divCategoria.onclick = () => mostrarProductosCategoria(categoria);

        divCategoria.innerHTML = `
            <img src="${imagenSrc}" alt="${categoria}" class="category-card-image">
            <h2 class="category-card-title">${categoria}</h2>
            <p class="category-card-subtitle">Ver productos →</p>
        `;

        contenedorProductos.appendChild(divCategoria);
    });
}

// 3. FUNCIÓN: Mostrar Productos de una Categoría
function mostrarProductosCategoria(categoria) {
    categoriaActual = categoria;
    contenedorProductos.innerHTML = '';

    // Determinar a dónde debe volver el botón
    let volverDestino = mostrarMenuCategorias;
    let volverTexto = '← Volver al Menú';

    // Si estamos en una subcategoría de COMBOS, volver a COMBOS
    if (categoria === "COMBOS HAMBURGUESAS" || categoria === "COMBOS PERROS") {
        volverDestino = () => mostrarProductosCategoria("COMBOS");
        volverTexto = '← Volver a COMBOS';
    }

    // Botón de Volver
    const btnVolver = document.createElement('button');
    btnVolver.className = 'btn-volver';
    btnVolver.innerHTML = volverTexto;
    btnVolver.onclick = volverDestino;
    btnVolver.style.width = '100%';
    btnVolver.style.gridColumn = '1 / -1';
    contenedorProductos.appendChild(btnVolver);

    // CASO ESPECIAL: COMBOS muestra subcategorías
    if (categoria === "COMBOS") {
        const tituloCombo = document.createElement('h2');
        tituloCombo.className = 'category-title';
        tituloCombo.textContent = 'COMBOS';
        tituloCombo.style.width = '100%';
        tituloCombo.style.gridColumn = '1 / -1';
        tituloCombo.style.textAlign = 'center';
        tituloCombo.style.margin = '20px 0';
        contenedorProductos.appendChild(tituloCombo);

        // Subcategoría: COMBOS HAMBURGUESAS
        const divComboHamb = document.createElement('div');
        divComboHamb.className = 'category-card';
        divComboHamb.onclick = () => mostrarProductosCategoria('COMBOS HAMBURGUESAS');
        divComboHamb.innerHTML = `
            <div class="category-card-icon">🍔</div>
            <h2 class="category-card-title">COMBOS HAMBURGUESAS</h2>
            <p class="category-card-subtitle">Ver combos →</p>
        `;
        contenedorProductos.appendChild(divComboHamb);

        // Subcategoría: COMBOS PERROS
        const divComboPerros = document.createElement('div');
        divComboPerros.className = 'category-card';
        divComboPerros.onclick = () => mostrarProductosCategoria('COMBOS PERROS');
        divComboPerros.innerHTML = `
            <div class="category-card-icon">🌭</div>
            <h2 class="category-card-title">COMBOS PERROS</h2>
            <p class="category-card-subtitle">Ver combos →</p>
        `;
        contenedorProductos.appendChild(divComboPerros);

        return; // Salir aquí, no mostrar productos
    }

    // Título de la categoría actual
    const tituloCat = document.createElement('div');
    tituloCat.className = 'category-title-wrapper';
    tituloCat.style.width = '100%';
    tituloCat.style.gridColumn = '1 / -1';

    let imagenSrc = '';
    if (categoria === "HAMBURGUESAS") imagenSrc = 'hamburguesa_hero.jpg';
    else if (categoria === "PERROS CALIENTES") imagenSrc = 'perro_hero.jpg';
    else if (categoria === "SALCHIPAPAS") imagenSrc = 'salchipapa_hero.jpg';
    else if (categoria === "BEBIDAS") imagenSrc = 'bebidas_hero.jpg';
    else if (categoria === "ADICIONES") imagenSrc = 'adiciones_menu.jpg';
    else if (categoria === "COMBOS HAMBURGUESAS") imagenSrc = 'hamburguesa_hero.jpg';
    else if (categoria === "COMBOS PERROS") imagenSrc = 'perro_hero.jpg';
    else if (categoria === "ESPECIALES") imagenSrc = 'especiales_hero.jpg';

    tituloCat.innerHTML = `
        <h3 class="category-title">${categoria}</h3>
        <img src="${imagenSrc}" alt="${categoria}" class="category-icon">
    `;
    contenedorProductos.appendChild(tituloCat);

    // Productos de esta categoría
    const productosCat = menu.filter(p => p.categoria === categoria);

    productosCat.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'card-producto';

        let htmlOpciones = '';
        if (producto.tieneOpciones) {
            htmlOpciones = `
                <div class="product-options">
                    <select id="select-producto-${producto.id}">
                        ${producto.opciones.map(op => `<option value="${op}">${op}</option>`).join('')}
                    </select>
                </div>
            `;
        }

        div.innerHTML = `
            <div class="info-producto" style="padding-top: 20px;">
                <h3>${producto.nombre}</h3>
                <p class="descripcion">${producto.descripcion || ''}</p>

                ${htmlOpciones}

                <div class="precio">$${producto.precio.toLocaleString('es-CO')}</div>
                <button onclick="agregarAlCarrito(${producto.id}, event)" class="btn-agregar">Agregar</button>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });

    // Botón de Volver INFERIOR (después de todos los productos)
    const btnVolverInferior = document.createElement('button');
    btnVolverInferior.className = 'btn-volver';
    btnVolverInferior.innerHTML = volverTexto;
    btnVolverInferior.onclick = volverDestino;
    btnVolverInferior.style.width = '100%';
    btnVolverInferior.style.gridColumn = '1 / -1';
    btnVolverInferior.style.marginTop = '20px';
    contenedorProductos.appendChild(btnVolverInferior);
}

// 4. FUNCIÓN INICIAL: Mostrar menú de categorías al cargar
function mostrarMenu() {
    mostrarMenuCategorias();
}

// 3. FUNCIÓN: Agregar al Carrito (Maneja Opciones)
window.agregarAlCarrito = function (idProducto, event) {
    // Usamos 'find' pero creamos COPIA del objeto para no modificar el original del menú
    const productoOriginal = menu.find(p => p.id === idProducto);

    // Clonamos el objeto
    let productoAgregado = { ...productoOriginal };

    // Si tiene opciones, buscamos qué eligió el usuario
    if (productoOriginal.tieneOpciones) {
        const select = document.getElementById(`select-producto-${idProducto}`);
        const opcionElegida = select.value;
        productoAgregado.nombre = `${productoOriginal.nombre} (${opcionElegida})`;
        productoAgregado.eleccion = opcionElegida;
    }

    // Lo agregamos a la lista
    carrito.push(productoAgregado);

    // ✨ FEEDBACK VISUAL PERMANENTE: Cambiar el botón hasta confirmar pedido
    const boton = event.target;

    // Cambiar apariencia (SE QUEDA ASÍ)
    boton.textContent = "✓ AGREGADO";
    boton.style.backgroundColor = "#25D366"; // Verde WhatsApp
    boton.style.color = "white";
    boton.classList.add('btn-agregado'); // Clase para identificar después

    // Actualizamos la vista del carrito
    renderizarCarrito();
};

// NUEVA FUNCIÓN: Resetear todos los botones después de confirmar pedido
function resetearBotones() {
    const botonesAgregados = document.querySelectorAll('.btn-agregado');
    botonesAgregados.forEach(boton => {
        boton.textContent = "Agregar";
        boton.style.backgroundColor = "";
        boton.style.color = "";
        boton.classList.remove('btn-agregado');
    });
}

// 4. FUNCIÓN: Renderizar Carrito y Total
function renderizarCarrito() {
    listaCarrito.innerHTML = '';

    let total = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<li class="empty-msg">Tu pedido está vacío. 🌭</li>';
        btnCheckout.disabled = true;
    } else {
        btnCheckout.disabled = false;

        carrito.forEach((producto, index) => {
            total += producto.precio;

            const li = document.createElement('li');
            li.className = 'cart-item';

            li.innerHTML = `
                <div class="item-details">
                    <span class="cart-item-name">${producto.nombre}</span>
                </div>
                <div style="display:flex; align-items:center;">
                    <span class="cart-item-price">$${producto.precio.toLocaleString('es-CO')}</span>
                    <button onclick="eliminarDelCarrito(${index})" class="btn-remove">&times;</button>
                </div>
            `;
            listaCarrito.appendChild(li);
        });
    }

    totalPrecioElemento.textContent = "$" + total.toLocaleString('es-CO');
}

// 5. FUNCIÓN: Eliminar del Carrito
window.eliminarDelCarrito = function (index) {
    carrito.splice(index, 1);
    renderizarCarrito();
};

// 6. LÓGICA DEL CHECKOUT
btnCheckout.addEventListener('click', () => {
    // Calcular totales
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    const cantidad = carrito.length;

    // Generar Resumen HTML
    const resumenDiv = document.getElementById('resumen-modal');
    resumenDiv.innerHTML = `
        <div class="summary-row">
            <span>Productos:</span>
            <span>${cantidad}</span>
        </div>
        <div class="summary-total">
            TOTAL: $${total.toLocaleString('es-CO')}
        </div>
        <div style="text-align:center; font-size:0.8rem; margin-top:5px;">
            (Pago Contra Entrega)
        </div>
    `;

    modalCliente.classList.remove('hidden');
});

btnCancelar.addEventListener('click', () => {
    modalCliente.classList.add('hidden');
});

// 7. ENVIAR A WHATSAPP (ACTUALIZADO CON DATOS REALES)
formPedido.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('clienteNombre').value;
    const direccion = document.getElementById('clienteDireccion').value;
    const telefono = document.getElementById('clienteTelefono').value;

    let mensaje = `*¡NUEVO PEDIDO MOSTAZA!* 🌭💛%0A%0A`;
    mensaje += `*Cliente:* ${nombre}%0A`;
    mensaje += `*Dirección:* ${direccion}%0A`;
    mensaje += `*Teléfono:* ${telefono}%0A`;
    mensaje += `*Pago:* Efectivo contra entrega%0A%0A`;
    mensaje += `*DETALLE DEL PEDIDO:*%0A`;

    carrito.forEach(producto => {
        mensaje += `- ${producto.nombre} ... $${producto.precio.toLocaleString('es-CO')}%0A`;
    });

    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    mensaje += `%0A*TOTAL A PAGAR: $${total.toLocaleString('es-CO')}*`;

    // NÚMERO REAL DEL PROPIETARIO
    const numeroWhatsApp = "573174749662";

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');

    modalCliente.classList.add('hidden');
    carrito = [];
    renderizarCarrito();

    // ✨ RESETEAR TODOS LOS BOTONES
    resetearBotones();
});

// 8. MODO OSCURO
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// INICIAR
mostrarMenu();
renderizarCarrito();
