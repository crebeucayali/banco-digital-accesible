# Etapa 2.2 - Validación técnica de RA integrado en BDA
Fecha: 2026-11-11
Rama: `migration/ra-a-bda-20261111`
Estado: validación estática y contraste de datos completados; pruebas dinámicas y humanas pendientes.

## Alcance revisado
- Portada y tres páginas de categorías.
- Diez archivos relevantes de HTML/CSS/JavaScript para enlaces y rutas locales.
- Árbol Git de la rama y ocho WebP migrados.
- Registro público de recursos en Supabase (consultas SQL de solo lectura; sin cambios en la base).

## Resultados
1. Resolución estática de referencias relativas `href` y `src` de los diez archivos: **0 referencias a archivos inexistentes** en el árbol de trabajo analizado.
2. Cuatro páginas con un elemento `main`, un encabezado `h1`, enlace para saltar al contenido y política CSP con conectividad a Supabase.
3. Tres contenedores `#catalogo-ra` presentes, con categorías de datos identificadas.
4. Ocho WebP integrados en BDA, con SHA Git iguales al origen.
5. Supabase `public.repositorio_recursos`: **47 recursos publicados** (27 materiales disponibles, 5 equipos tecnológicos y 15 materiales elaborados). Se contabilizan 43 imágenes y 4 recursos sin fotografía.
6. Orígenes de las 43 imágenes: 36 en Supabase Storage y siete rutas locales bajo `assets/`; sus 43 rutas cumplen los patrones permitidos por el catálogo. Las siete rutas locales coinciden con archivos copiados a la rama BDA.
7. Se corrigieron las tres entradas del buscador de RA para que lleven a las categorías correctas y el enlace alternativo para compartir por Facebook.
8. Los cambios siguen en una rama separada; la página de GitHub Pages de producción no se alteró.

## Límites de esta validación
La inspección estática NO acredita que el catálogo cargue en un navegador, que el CORS/RLS de consulta funcionen para clientes anónimos, que los 36 objetos almacenados respondan HTTP 200, que la paginación, los filtros y la ampliación funcionen con interacción humana, ni que todas las dimensiones móviles sean correctas. El entorno de ejecución no tiene acceso DNS directo a GitHub para clonar/probar localmente la rama; esta rama no está publicada como GitHub Pages.

## Bloqueo de cierre integral
La etapa 2.2 se considera **validada en comprobaciones estáticas y datos**, pero **pendiente de validación dinámica** antes de fusionar a `main`. Mantener RA activo.

## Comprobación posterior
- Publicar vista previa aislada o ejecutar servidor local de la rama y navegador real.
- Verificar teclado, zoom y lector de pantalla, PC/móvil, fichas ampliadas, filtros y paginación (páginas 1, 2 y última).
- Probar enlaces `#recurso-ID`, casos sin imagen y ausencia de imagen 404.
- Verificar desde navegador solicitudes públicas a Supabase, errores CSP y permisos.
- Continuar con la etapa 3 de administración de BDA tras la validación visual.
