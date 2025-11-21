# Política de Seguridad

## 🔒 Versiones Soportadas

| Versión | Soporte          |
| ------- | ---------------- |
| 1.0.x   | ✅ Soportada     |

## 🛡️ Medidas de Seguridad Implementadas

### Headers de Seguridad

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Validaciones

- Validación de formularios en frontend
- Sanitización de inputs antes de enviar a WhatsApp
- Enlaces externos con `rel="noopener noreferrer"`

### Archivos Protegidos

El archivo `robots.txt` bloquea el acceso a:
- `/config.js` - Archivo de configuración
- `/*.json$` - Archivos JSON con datos

## 🚨 Reportar Vulnerabilidades

Si encuentras alguna vulnerabilidad de seguridad, por favor:

1. **NO** abras un issue público
2. Contacta directamente por:
   - WhatsApp: +503 7511-1948
   - Instagram: @postres_corinto_

## ✅ Buenas Prácticas Recomendadas

### Para Despliegue en Producción:

1. **Usar HTTPS** - Siempre
2. **CSP Headers** - Implementar Content Security Policy
3. **Rate Limiting** - Limitar solicitudes si usas backend
4. **Validación Backend** - Si implementas servidor
5. **Actualizar Dependencias** - Mantener CDNs actualizados

### Configuración Recomendada (`.htaccess` para Apache):

```apache
# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Force HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Para Netlify (`_headers`):

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📋 Checklist de Seguridad

- [x] Meta tags de seguridad implementados
- [x] robots.txt configurado
- [x] Enlaces externos seguros
- [x] Validación de formularios
- [x] .gitignore configurado
- [ ] HTTPS configurado (después del despliegue)
- [ ] CSP headers (recomendado)
- [ ] Rate limiting (si hay backend)

## 🔄 Actualizaciones

Última actualización: 21 de noviembre de 2025

---

**Mantenerse seguro es responsabilidad de todos. Gracias por ayudar a proteger Postres Corinto.**
