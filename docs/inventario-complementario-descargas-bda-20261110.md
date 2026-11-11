> **Decisión posterior (11 de noviembre de 2026):** la propuesta de instrumentar impresiones Braille de BDA fue descartada. Su implementación temporal se revirtió y el seguimiento vigente de descargas BDA abarca solo PNG de LSP. La futura integración RA+BDA se analiza en `docs/verificacion-previa-reestructuracion-ra-bda-20261111.md`; la práctica Braille de BDA aún no se elimina y las modalidades de MEA se conservan. Las prioridades originales siguientes se muestran únicamente como antecedente histórico.

# Etapa 1. Inventario complementario de descargas e interacciones BDA

**Fecha de revisión:** 10 de noviembre de 2026 (Perú).  
**Repositorio revisado:** `crebeucayali/banco-digital-accesible`, rama `main`.  
**Naturaleza:** auditoría de código y contenido del catálogo; no incorpora instrumentación adicional, tablas nuevas, eventos ni cambios funcionales.

## 1. Criterios de clasificación

- **Descarga local solicitada:** el usuario pulsa un enlace `download` o un botón que inicia la obtención de un archivo del repositorio. El evento no certifica que el navegador haya guardado el archivo.
- **Impresión o exportación iniciada:** se abre el diálogo nativo `window.print()`; no es correcto contarlo como PDF descargado o constancia emitida.
- **Apertura externa:** se pulsa un vínculo HTTPS hacia un proveedor externo. Se puede medir un clic de salida, pero no confirmar que allí se haya descargado el recurso.
- **Consulta interna:** búsqueda, visualización de ficha, navegación, ampliación o lectura. No debe incorporarse al contador de descargas.
- **Pendiente:** recurso sin destino configurado o acción inactiva; no medir como descarga.
- **Compartir:** función social distinta de la descarga; conservar sus estadísticas separadas cuando existan.

## 2. Matriz de funciones examinadas

| Código | Ubicación / archivos | Interacción real en el código | Clasificación | Situación de medición | Decisión recomendada |
|---|---|---|---|---|---|
| BDA-01 | `lsp/visor-senas.js`, `lsp/index.html` | Enlace «Descargar imagen original», PNG en el propio origen HTTPS | Descarga solicitada local | **Ya instrumentada y validada** como `lsp/png/descarga_solicitada` | Mantener sin duplicar |
| BDA-02 | `lsp/app.js`, `lsp/visor-senas.js` | Búsquedas, filtros, secuencias, apertura y cierre del visor | Consulta / navegación interna | Correctamente excluida de descargas | No medir como descarga |
| BDA-03 | `braille/practica.js`, `braille/index.html` | Al acertar 100 %, se habilita una constancia simbólica; «Imprimir o guardar en PDF» ejecuta `window.print()` | **Impresión/exportación iniciada** | No instrumentada en estadísticas de descargas | Candidata prioritaria a evento `braille/impresion/impresion_iniciada`, solo tras revisión de privacidad; no declarar PDF guardado |
| BDA-04 | `braille/app.js`, `braille/braille.json` | Buscador y presentación visual de letras, signos y recursos Braille | Consulta interna | Sin descarga de archivo detectada | No añadir evento de descarga |
| BDA-05 | `biblioteca/biblioteca.js`, `biblioteca/datos/recursos.json` | Catálogo institucional: «Ver criterios» dirige a `criterios.html` | Apertura de página interna | No instrumentada como descarga | Mantener como navegación; opcional medir consulta en otra familia |
| BDA-06 | `biblioteca/datos/recursos.json` | Otras 3 fichas («Libros digitales», «Bases académicas» y «Solicitud de materiales») tienen `enlace` vacío y estado `pendiente` | Pendiente de configuración | No hay botón activo hacia archivo | No registrar hasta que se publiquen destinos |
| BDA-07 | `biblioteca/biblioteca.js` | Resultados dinámicos de Gutendex/Project Gutenberg: enlaces HTTPS externos con etiquetas «Leer en línea», «Descargar EPUB», «Ver PDF», «Texto simple» o «Acceder» según formato disponible | **Apertura externa**, incluso si el rótulo dice «Descargar EPUB» | Sin seguimiento de clics específicos | Candidato a `biblioteca/enlace_externo/apertura_solicitada` por categoría/formato general, sin título ni búsqueda; nunca afirmar descarga terminada |
| BDA-08 | `biblioteca/recurso.js`, `biblioteca/biblioteca.js` | Acceso desde ficha individual o tarjeta de catálogo; enlace validado y, si el origen es externo, abre pestaña nueva | Apertura de recurso (interna o externa según URL) | No instrumentada | Diseñar medición solo cuando haya enlaces activos y confirmar el destino; no duplicar clics entre ficha y catálogo |
| BDA-09 | `index.html`, `lsp/index.html`, `braille/index.html` y otras páginas | Enlaces «Compartir en Facebook» y otros accesos institucionales | Compartir / navegación | Fuera del conteo de descargas BDA | Mantener separados de descargas y del contador de visitas |
| BDA-10 | `braille/index.html` y páginas informativas | «Conoce el sistema Braille», «Practica lo aprendido», preguntas frecuentes, créditos, condiciones de uso | Navegación/consulta interna | No instrumentada como descarga | No medir como descarga |

## 3. Inventario del catálogo bibliográfico, revisado en código

Se encontraron **cuatro registros locales** en `biblioteca/datos/recursos.json`:
1. `gu-criterios-biblioteca`: estado `abierto`, acción «Ver criterios» y enlace interno `criterios.html`.
2. `ld-libros-libres`: estado `pendiente`; sin enlace.
3. `ba-articulos-repositorios`: estado `pendiente`; sin enlace.
4. `sm-solicitud-materiales`: estado `pendiente`; sin enlace.

Estos cuatro registros **no equivalen** a cuatro materiales descargables. Por separado, la interfaz consulta resultados externos dinámicos de Gutendex y sus formatos, que varían según la respuesta del servicio y no constituyen un catálogo local almacenado en GitHub.

## 4. Priorización de una futura ampliación

**Prioridad A: constancia simbólica de práctica Braille.** Hay una acción local explícita de imprimir/guardar PDF. Si se decide medirla, el nombre estadístico correcto será `impresion_iniciada` o `dialogo_impresion_abierto`, sin afirmar que el usuario guardó el PDF. No enviar nombre del participante, código de constancia, respuestas, puntaje, fecha individual de evaluación ni contenido de la constancia. La constancia es simbólica y no oficial.

**Prioridad B: aperturas a Project Gutenberg desde Biblioteca.** Solo registrar una petición de salida hacia un dominio permitido, sin título de libro, consulta, URL completa ni datos identificables. Distinguir formato solicitado (HTML, EPUB, PDF, TXT u otro) si el formato se deduce de la opción elegida; la prioridad de formatos del código hace que habitualmente se ofrezca HTML antes que EPUB, por lo que la presencia de «Descargar EPUB» no debe asumirse universal.

**Prioridad C: fichas bibliográficas activadas en el futuro.** Reevaluar el inventario cuando existan enlaces reales; no registrar interacciones de fichas pendientes. Si una ficha y una tarjeta conducen al mismo recurso, medir cada acción voluntaria una vez, sin duplicación automática por navegación.

**No priorizar** búsquedas del diccionario LSP, consultas visuales de Braille, lectura de descripciones, ampliaciones del visor y navegación institucional como «descargas».

## 5. Riesgos y salvaguardas

- Diferenciar contador de **visitas**, solicitudes de **descarga**, acciones de **impresión** y **aperturas externas**, con descripciones comprensibles en el panel.
- Evitar enviar palabras LSP, términos de búsqueda bibliográfica, títulos de libros, nombres de estudiantes o códigos de constancia a Supabase.
- Los enlaces externos dependen del proveedor: abrirlos no demuestra entrega de archivo ni disponibilidad posterior.
- Antes de crear una nueva combinación admitida por el RPC de BDA, acordar un nombre estable, permisos, conservación de datos, comportamiento sin red, pruebas de idempotencia y actualización de la política de privacidad.
- Aplicar las pruebas en PostgreSQL temporal y navegador antes de cualquier despliegue, seguidas de una acción humana genuina y su contraste con la estadística real.

## 6. Resultado y siguiente etapa

**Inventario complementario completado a nivel de los archivos funcionales inspeccionados.** La búsqueda de código no mostró otros mecanismos locales explícitos de exportación como `createObjectURL`, `saveAs` o `window.print` fuera de la constancia Braille. La inspección no sustituye una auditoría exhaustiva de activos nuevos, enlaces que cambien en el futuro ni comportamientos impuestos por proveedores externos.

**No se autoriza aún una implementación de nuevos eventos con esta matriz.** La etapa 2 debe especificar y validar primero el evento de impresión de constancia Braille y, después, las aperturas bibliográficas externas, sin alterar los contadores cerrados de BDA-LSP y MEA.
