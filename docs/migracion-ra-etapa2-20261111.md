# Migración de RA a BDA - etapas 2 y 2.1

Fecha: 2026-11-11. Rama: `migration/ra-a-bda-20261111`.

## Etapa 2: estructura
Se integraron la portada, las tres categorías de RA, los módulos de catálogo, los estilos y el buscador en `repositorio-accesible/` dentro de BDA. La tarjeta de RA en la portada de BDA fue cambiada a un acceso interno. No se publicaron cambios en `main`.

## Etapa 2.1: recursos gráficos
Se copiaron los siete WebP de materiales y equipos, junto con el patrón shipibo, a `repositorio-accesible/` en BDA. Los ocho objetos binarios conservan exactamente los SHA de Git identificados en el repositorio de origen, verificados durante la copia.

- `assets/imagenes/equipos-tecnologicos/amplificador-de-imagen.webp` - `02327bcd704f2cf6834cb21f5c49f0e2a24f1e28`
- `assets/imagenes/equipos-tecnologicos/lectora-inteligente.webp` - `e89c7ce7944a1c4a811f34db9bd382aeab1f8f64`
- `assets/imagenes/equipos-tecnologicos/maquina-perkins.webp` - `11ab619366cc306e37d8a41b744fe734711b0312`
- `assets/imagenes/materiales-elaborados/inclumemoria.webp` - `52416faee28be5b9b1d1ecaa6d8ae1259b22d1b7`
- `assets/imagenes/materiales-elaborados/monstruos-geometricos.webp` - `37e86a3813367c4f37d94173affeec01890c2c03`
- `assets/imagenes/materiales-elaborados/silabario.webp` - `cdd15a45baaa44fb8f6956f0919daf44dad46075`
- `assets/imagenes/materiales-elaborados/sumario-inclusivo.webp` - `74cb1d57697edcf643db50f1bbceb6cfce1fcca1`
- `patron-shipibo.webp` - `099ffe8800938bdec8caeebf34d572c87266fada`

El logo ya se comparte desde el repositorio BDA y no requiere una segunda copia. El catálogo transforma los enlaces de imágenes del repositorio RA antiguo al nuevo espacio interno de BDA, preservando los enlaces legítimos de Supabase Storage. El CSS del patrón shipibo usa el recurso local.

## Pendiente antes de publicar
- Verificación real en navegador y móvil de las tres categorías, imágenes ampliadas, CSP, navegación, paginación y accesibilidad.
- Comprobar las imágenes guardadas en la base de datos, incluidas las rutas no enumeradas por el árbol Git.
- En etapa 3 adaptar administración, referencias del panel EVA y comprobar permisos RLS, auditoría y datos.
- Revisar accesos externos, enlaces antiguos y redirecciones antes de desactivar RA.

La migración binaria de los ocho WebP identificados está completa. No se declara la independencia funcional integral ni se autoriza archivar/desactivar RA hasta concluir las validaciones posteriores.
