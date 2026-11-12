# Migración de RA a BDA - etapa 2 (11-11-2026)

Rama de trabajo: `migration/ra-a-bda-20261111`.

Integrados en BDA la portada de RA, tres páginas de categorías, módulos JS, estilos CSS y el índice de búsqueda. La tarjeta principal de BDA ahora dirige a la sección interna.

## Límites y pendientes

- Las siete imágenes WebP originales siguen almacenadas en RA. El conector no permite copiar binarios entre repositorios; hay que trasladarlas antes de desactivar RA.
- Los catálogos siguen consultando la tabla pública `repositorio_recursos` de Supabase. La migración del administrador y las pruebas de permisos corresponden a la etapa 3.
- Es necesario verificar CSS, CSP, enlaces, imágenes, accesibilidad y navegación en escritorio y móvil antes de publicar.
- La rama `main` de RA y BDA no se altera. No archivar ni desconectar GitHub Pages de RA durante estas etapas.
