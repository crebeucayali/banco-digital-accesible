# Cierre técnico y documental - migración de RA a BDA

Fecha de cierre documental: 2026-11-11
Alcance: Ecosistema Virtual Accesible del CREBE Ucayali.

## Estado final de la arquitectura

El Repositorio Accesible (RA) queda incorporado funcionalmente a Banco Digital Accesible (BDA) con sus tres categorías: materiales disponibles, equipos tecnológicos y materiales elaborados.

- Nueva ubicación: https://crebeucayali.github.io/banco-digital-accesible/repositorio-accesible/
- Administración: panel EVA en Accesos Complementarios, sección "BDA · Repositorio".
- Datos: tabla pública `repositorio_recursos` bajo RLS; rutas de imágenes locales migradas y archivos de Supabase Storage conservados.
- Dirección antigua: https://crebeucayali.github.io/repositorio-accesible/ . Funciona como redirección, junto con las tres categorías antiguas y anclas individuales cuando JavaScript está disponible.
- La vista preliminar `validacion-ra/` en BDA se conserva como respaldo temporal, no como acceso principal.

## Evidencias de ejecución

1. Estructura y archivos del catálogo transferidos a BDA; ocho archivos WebP verificados por SHA Git.
2. Validación visual de la copia migrada aprobada por el usuario.
3. Usuario confirmó creación y visualización pública de una tarjeta de prueba en el catálogo; persistencia verificada posteriormente en Supabase.
4. Publicación de BDA, panel AC y enlaces principales EVA aplicada; GitHub Pages informó despliegues correctos.
5. Redirecciones del repo original RA publicadas; usuario confirmó que los accesos antiguos llevan correctamente al destino.
6. README de BDA, RA, EVA y AC actualizados con arquitectura vigente y estado de mantenimiento.

## Resguardos de reversión

- `crebeucayali/banco-digital-accesible`: rama `backup/antes-ra-bda-etapa3-2-20261111`.
- `crebeucayali/accesos-complementarios`: rama `backup/antes-ra-bda-etapa3-2-20261111`.
- `crebeucayali/crebeucayali.github.io`: rama `backup/antes-ra-bda-etapa3-2-20261111`.
- `crebeucayali/repositorio-accesible`: rama `backup/antes-redireccion-bda-20261111`.

## Conservación y restricciones

- El repositorio RA queda como histórico y redireccionador, **sin archivar ni borrar**. La operación de archivo puede comprometer GitHub Pages.
- No se borraron registros de Supabase ni se modificaron sus roles/políticas RLS.
- Las operaciones administrativas más sensibles (archivado, eliminación y auditoría con cuenta AAL2) no se declararon verificadas por prueba humana completa.
- No se migró ni modificó NI como parte de este cierre.
- Si se decide retirar en el futuro la vista `validacion-ra/` o consolidar referencias heredadas adicionales, hacerlo en una operación separada con auditoría de enlaces.

## Criterio de cierre

Se da por finalizada la **migración pública y el cierre documental de RA a BDA**, manteniendo el servicio histórico de redirección. El mantenimiento de recursos, nuevas publicaciones y revisiones deben continuar dentro de BDA mediante el panel EVA.
