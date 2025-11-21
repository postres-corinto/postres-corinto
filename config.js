// Configuración general del sitio
const CONFIG = {
    whatsapp: {
        numero: '50375111948', // numero de teléfono con código de país
        mensajeBienvenida: 'Hola! Me gustaría hacer un pedido'
    },
    contacto: {
        telefono: '+503 7511-1948',
        email: 'postrescorinto@gmail.com',
        direccion: 'Corinto, El Salvador'
    },
    redes: {
        instagram: 'https://www.instagram.com/postres_corinto_/',
        facebook: 'https://www.facebook.com/postrescorinto'
    },
    pedidos: {
        anticipacion: 24, // horas
        horarioAtencion: '8:00 AM - 6:00 PM'
    }
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
