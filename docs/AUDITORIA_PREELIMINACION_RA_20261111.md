# Auditoría de preeliminación del repositorio independiente RA

Fecha de referencia: 11 de noviembre de 2026. Revisión de resultados de GitHub Actions del 12 de noviembre UTC.
Repositorio a evaluar: `crebeucayali/repositorio-accesible`.
Destino operativo: `crebeucayali/banco-digital-accesible/repositorio-accesible/`.

## Dictamen

**APTO FUNCIONALMENTE PARA EL RETIRO, CON ELIMINACIÓN IRREVERSIBLE CONDICIONADA.** No eliminar antes de:
1. Obtener y comprobar un respaldo **externo al repositorio RA**, preferentemente `git clone --mirror` para incluir historial y ramas, o ZIP si solo se requiere el estado actual.
2. Aceptar expresamente que los enlaces anteriores `/repositorio-accesible/` y tres rutas de categoría dejarán de redirigir (404) tras borrar el repositorio.
3. Dar aprobación explícita separada para la eliminación de GitHub. Esta auditoría no elimina ni archiva el repositorio.

## Evidencias favorables

- El usuario validó visualmente la integración de RA en BDA y las redirecciones de las cuatro rutas antiguas.
- BDA GitHub Pages desplegó satisfactoriamente el contenido definitivo y su sitemap actualizado.
- Panel administrativo EVA integrado en AC bajo rótulo BDA · Repositorio; conserva tabla `public.repositorio_recursos` y permisos internos `repositorio`.
- Supabase: 47 registros publicados y visibles al corte del cierre; 27 materiales disponibles, 5 equipos tecnológicos y 15 materiales elaborados. Se había registrado transitoriamente una tarjeta de prueba, no presente en este corte. No se cambió ningún registro desde la auditoría.
- Imágenes referenciadas: 36 URLs en Supabase Storage; 7 rutas relativas `assets/`; 4 recursos sin imagen; **0 URLs de imágenes almacenadas en la base apuntan al GitHub Pages antiguo de RA**.
- Comparación del árbol: 8 archivos gráficos de materiales coinciden exactamente por SHA Git entre el origen y la carpeta de RA dentro de BDA; los 2 logos `logo-crebe.png` y `logo-crebe.webp` tienen exactamente los mismos SHA Git en la raíz de BDA. Total 10/10 activos conservados.
- RLS de `public.repositorio_recursos`: habilitado y forzado. Las tablas y vistas `ra_materiales_semana`, `ra_materiales_semana_publicos` y `repositorio_recursos` permanecen bajo el proyecto Supabase compartido. Ninguna depende de la existencia del repo GitHub RA como base de datos.
- Buscador y accesos EVA apuntan al destino dentro de BDA.
- Se retiró el sitemap RA del índice de EVA, se añadieron portada y tres categorías al sitemap BDA; NI se mantiene.
- Se corrigieron referencias a RA como repositorio independiente en configuraciones y verificadores activos de `crebe-agent`: alcance de auditorías SEO, funcionales, seguridad y accesibilidad, tareas que clonaban el repositorio, inventario y pruebas de recuento. El monitoreo de la sección RA ahora usa el repositorio BDA y su nueva ruta. El histórico de auditorías y datos de visitas NO debe reescribirse.
- GitHub Actions `Accesibilidad EVA - Fase 8 Etapa 3` terminó satisfactoriamente tras actualizar el criterio de inventario vigente: https://github.com/crebeucayali/crebe-agent/actions/runs/43154358370 .

## Observaciones que no bloquean la independencia funcional de RA

- Algunas verificaciones generales de accesibilidad mantienen incidencias independientes de RA, entre ellas contraste de un acceso destacado de MEA en la portada EVA y validaciones con recuentos históricos fijos. No equivale a que el sitio migrado dependa de RA.
- El contenido histórico de `crebe-agent` puede seguir citando RA; estos registros no son fuentes activas de publicación.
- La revisión HTTP desde herramientas externas no pudo abrir el sitio, aunque GitHub Pages confirmó despliegues satisfactorios y el usuario validó la navegación en navegador.
- La validación administrativa humana confirma al menos creación/publicación de una tarjeta, pero no un ciclo completo de archivado, borrado y auditoría. Estas operaciones se realizan en Supabase, no en el repositorio GitHub original.

## Respaldo y carácter irreversible

Las ramas `backup/antes-redireccion-bda-20261111` y demás ramas **dentro de RA se perderán si se elimina RA**, por lo que NO constituyen un respaldo externo. Los archivos funcionales y diez imágenes ya migradas se conservan en BDA, pero ello no preserva el historial completo de commits, ramas y documentación exclusiva de RA.

Procedimiento recomendado antes de eliminar:

```bash
git clone --mirror https://github.com/crebeucayali/repositorio-accesible.git RA-respaldo-git.git
```

Guardar la carpeta resultante fuera del repositorio que será eliminado y verificar `git -C RA-respaldo-git.git show-ref` y `git -C RA-respaldo-git.git fsck --full`.
Alternativa limitada: GitHub > repositorio RA > Code > Download ZIP (no conserva historial).

## Delimitación del alcance

NI no ha sido migrado, editado ni desactivado en esta auditoría. El siguiente trabajo sobre NI se iniciará **solo después de confirmar y ejecutar por separado la eliminación de RA**.

La cuenta `crebeucayali` contiene también `crebe-agent` como repositorio técnico adicional. Por ello la reducción de los ocho repositorios EVA a seis no implica necesariamente solo seis repositorios totales de la cuenta; `crebe-agent` se conserva como auxiliar.

## Condiciones para liberar la eliminación

- [x] Contenido funcional y archivos principales copiados a BDA
- [x] Recursos e imágenes existentes sin dependencia de GitHub Pages RA
- [x] Integración pública y administrativa preparada
- [x] Redirecciones antiguas aprobadas por el usuario durante la transición
- [x] Sitemaps y monitorización principal actualizados
- [x] GitHub Actions de línea base de accesibilidad con resultado favorable
- [ ] Respaldo independiente completo, comprobado
- [ ] Aprobación explícita para eliminación definitiva y aceptación de enlaces antiguos 404

**Estado: NO ELIMINAR TODAVÍA.** La autorización final requiere acreditar el respaldo externo y la instrucción explícita del usuario.
