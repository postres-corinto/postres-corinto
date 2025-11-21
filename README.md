# 🍰 Postres Corinto - Sitio Web Oficial

Sitio web de repostería artesanal en Corinto, Morazán, El Salvador.

## 📋 Descripción

Landing page moderna y responsive para Postres Corinto, especializada en repostería artesanal: pasteles personalizados, tres leches, cheesecakes y cupcakes.

## ✨ Características

- 🎨 Diseño moderno y elegante con Tailwind CSS
- 📱 Completamente responsive (mobile-first)
- 🚀 Carga rápida y optimizado para SEO
- 💬 Integración con WhatsApp para pedidos
- 🗺️ Mapa interactivo de Google Maps
- 🎯 Filtros de productos por categoría
- 📞 Enlaces directos para llamadas telefónicas
- 🔒 Headers de seguridad implementados

## 🛠️ Tecnologías

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Vanilla)
- Google Fonts (Playfair Display, Lato)
- Font Awesome Icons
- Google Maps API

## 📂 Estructura del Proyecto

```
paguina_postres/
├── index.html           # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidad JavaScript
├── config.js           # Configuración (WhatsApp, redes)
├── productos.json      # Catálogo de productos
├── robots.txt          # Configuración para bots
├── sitemap.xml         # Mapa del sitio
├── .gitignore          # Archivos ignorados por Git
└── imagenes/           # Recursos visuales
    ├── postre_corinto_logo.svg
    ├── postre1.jpeg
    └── postres2.jpeg
```

## 🚀 Instalación y Uso

### Opción 1: Uso Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/postres-corinto.git
cd postres-corinto
```

2. Abre `index.html` en tu navegador

### Opción 2: GitHub Pages

1. Sube el proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `/ (root)`
4. Guarda y espera el despliegue

## ⚙️ Configuración

### 1. WhatsApp y Contacto

Edita `config.js`:

```javascript
const CONFIG = {
    whatsapp: {
        numero: '50375111948', // Tu número real
        mensajeBienvenida: 'Hola! Me gustaría hacer un pedido'
    },
    // ... más configuración
};
```

### 2. Productos

Edita `productos.json` para agregar/modificar productos:

```json
{
    "id": 1,
    "nombre": "Nombre del producto",
    "categoria": "pasteles",
    "descripcion": "Descripción",
    "precio": 25.00,
    "imagen": "./imagenes/producto.jpg",
    "alt": "Texto alternativo"
}
```

### 3. Ubicación

Actualiza el mapa en `index.html` con tu ubicación real de Google Maps.

## 🔐 Seguridad

- Headers de seguridad implementados
- Validación de formularios
- Enlaces externos con `rel="noopener noreferrer"`
- Protección contra XSS básica
- robots.txt configurado

## 📱 Redes Sociales

Actualiza los enlaces en `config.js`:

- Instagram: [@postres_corinto_](https://www.instagram.com/postres_corinto_/)
- Facebook: [Postres Corinto](https://www.facebook.com/postrescorinto)
- WhatsApp: +503 7511-1948

## 📄 Licencia

© 2025 Postres Corinto. Todos los derechos reservados.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ para Postres Corinto

## 📞 Soporte

Para soporte técnico o consultas:
- WhatsApp: +503 7511-1948
- Instagram: @postres_corinto_

---

**Nota**: Recuerda actualizar las URLs de `https://postrescorinto.com/` con tu dominio real una vez desplegado.
