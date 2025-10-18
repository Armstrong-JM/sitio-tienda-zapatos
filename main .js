document.addEventListener('DOMContentLoaded', () => {
    // 1. SIMULACIÓN DE CONTADOR DE CARRITO
    const contadorCarrito = document.getElementById('contador-carrito');
    const btnCarrito = document.getElementById('btn-carrito');
    let itemsEnCarrito = 0; // Estado inicial

    // Función para actualizar el contador en la interfaz
    function actualizarContador() {
        contadorCarrito.textContent = itemsEnCarrito;
    }

    // SIMULACIÓN: Añadir un producto (por ejemplo, desde un botón "Añadir al Carrito" en la página de productos)
    function agregarProducto() {
        itemsEnCarrito++;
        actualizarContador();
        console.log('Producto añadido. Total en carrito: ' + itemsEnCarrito);
    }

    // Evento de ejemplo para el botón de carrito (lo simula como un botón de "Checkout")
    btnCarrito.addEventListener('click', () => {
        if (itemsEnCarrito > 0) {
            alert(`Dirigiendo al Checkout. Tienes ${itemsEnCarrito} artículos en tu carrito.`);
            // Aquí se redirigiría a 'carrito.html'
        } else {
            alert('Tu carrito está vacío. ¡Empieza a comprar!');
        }
    });

    // Inicializar el contador al cargar
    actualizarContador();

    // **********************************************
    // 2. EJEMPLO DE INTERACCIÓN EN PRODUCTOS (DEBERÍA ESTAR EN 'hombres.html', 'mujeres.html', etc.)
    // **********************************************
    
    // Si estuviéramos en una página de productos, podríamos hacer:
    const botonesAgregar = document.querySelectorAll('.btn-add-to-cart'); 
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            // En un proyecto real, se obtendría el ID del producto y se usaría una API
            agregarProducto(); // Llamar a la función simulada de añadir
            // Bootstrap Toast o Alerta
            alert('¡Producto añadido a tu carrito!'); 
        });
    });

});