// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Cargar productos dinámicamente
async function cargarProductos() {
    try {
        const response = await fetch('productos.json');
        const productos = await response.json();
        
        const grid = document.getElementById('products-grid');
        grid.innerHTML = ''; // Limpiar productos existentes
        
        productos.forEach(producto => {
            const card = crearTarjetaProducto(producto);
            grid.appendChild(card);
        });
        
        // Reinicializar las tarjetas para el filtrado
        window.productCards = document.querySelectorAll('.product-card');
        
    } catch (error) {
        console.error('Error al cargar productos:', error);
        const grid = document.getElementById('products-grid');
        grid.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-red-500">Error al cargar los productos. Por favor, intenta de nuevo.</p></div>';
    }
}

function crearTarjetaProducto(producto) {
    const div = document.createElement('div');
    div.className = 'product-card bg-white rounded-xl overflow-hidden shadow-sm';
    div.setAttribute('data-category', producto.categoria);
    
    div.innerHTML = `
        <div class="h-64 overflow-hidden">
            <img src="${producto.imagen}" 
                 alt="${producto.alt}" 
                 class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 onerror="this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop'">
        </div>
        <div class="p-6 text-center">
            <h3 class="font-serif text-xl font-bold text-corinto-brown mb-2">${producto.nombre}</h3>
            <p class="text-gray-500 text-sm mb-4">${producto.descripcion}</p>
            <span class="block text-corinto-gold text-lg font-bold mb-4">$${producto.precio.toFixed(2)}</span>
            <button onclick="abrirPedido('${producto.nombre}')" 
                    class="w-full py-2 border border-corinto-brown text-corinto-brown rounded hover:bg-corinto-brown hover:text-white transition-colors uppercase text-xs font-bold">
                Ordenar
            </button>
        </div>
    `;
    
    return div;
}

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', cargarProductos);

// Filtrado de Productos
const filterBtns = document.querySelectorAll('.filter-btn');
let productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos
        filterBtns.forEach(b => b.classList.remove('active'));
        // Añadir active al clickeado
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        
        // Usar las tarjetas actualizadas
        const currentCards = window.productCards || document.querySelectorAll('.product-card');

        currentCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden-item');
                card.classList.add('fade-in');
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden-item');
                    card.classList.add('fade-in');
                } else {
                    card.classList.add('hidden-item');
                    card.classList.remove('fade-in');
                }
            }
        });
    });
});

// Función para abrir WhatsApp con mensaje genérico
function abrirWhatsApp() {
    const mensaje = encodeURIComponent(CONFIG.whatsapp.mensajeBienvenida);
    window.open(`https://wa.me/${CONFIG.whatsapp.numero}?text=${mensaje}`, '_blank');
}

// Función para el botón de "Ordenar" en las tarjetas con WhatsApp
function abrirPedido(producto) {
    // Obtener el producto del JSON
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            const productoEncontrado = productos.find(p => p.nombre === producto);
            
            if (productoEncontrado) {
                // Crear mensaje para WhatsApp
                const mensaje = `Hola! Me interesa ordenar:%0A%0A` +
                    `🍰 *${productoEncontrado.nombre}*%0A` +
                    `💰 Precio: $${productoEncontrado.precio.toFixed(2)}%0A` +
                    `📝 ${productoEncontrado.descripcion}%0A%0A` +
                    `¿Podrían darme más información?`;
                
                // Abrir WhatsApp
                window.open(`https://wa.me/${CONFIG.whatsapp.numero}?text=${mensaje}`, '_blank');
            }
        })
        .catch(error => {
            console.error('Error al cargar producto:', error);
            // Fallback si falla la carga
            const mensajeGenerico = encodeURIComponent(`Hola! Me interesa ordenar: ${producto}`);
            window.open(`https://wa.me/${CONFIG.whatsapp.numero}?text=${mensajeGenerico}`, '_blank');
        });
}

// Envío de formulario con WhatsApp
function enviarFormulario(e) {
    e.preventDefault();
    
    const nombre = e.target.querySelector('input[type="text"]').value;
    const telefono = e.target.querySelector('input[type="tel"]').value;
    const producto = e.target.querySelector('#productSelect').value;
    const mensaje = e.target.querySelector('textarea').value;
    
    // Construir mensaje para WhatsApp
    const mensajeWhatsApp = `*Nuevo Pedido*%0A%0A` +
        `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A` +
        `📞 *Teléfono:* ${encodeURIComponent(telefono)}%0A` +
        `🍰 *Producto:* ${encodeURIComponent(producto)}%0A` +
        `📝 *Detalles:* ${encodeURIComponent(mensaje)}`;
    
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    
    btn.innerText = "Redirigiendo a WhatsApp...";
    btn.classList.add('opacity-75');
    
    setTimeout(() => {
        // Abrir WhatsApp
        window.open(`https://wa.me/${CONFIG.whatsapp.numero}?text=${mensajeWhatsApp}`, '_blank');
        
        // Resetear formulario
        btn.innerText = originalText;
        btn.classList.remove('opacity-75');
        e.target.reset();
        
        // Mensaje de confirmación
        alert("Te hemos redirigido a WhatsApp para completar tu pedido. ¡Gracias!");
    }, 500);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('py-2');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('py-2');
    }
});
