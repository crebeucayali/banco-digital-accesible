# Verificación técnica previa: reestructuración RA + BDA

**Fecha:** 11 de noviembre de 2026 (Perú).  
**Estado:** análisis de compatibilidad y dependencias completado; **la migración funcional no se ha ejecutado**.  
**Destino propuesto:** `crebeucayali/banco-digital-accesible`, con catálogo RA integrado y retirada posterior de la sección Braille duplicada respecto de MEA.  
**Origen:** `crebeucayali/repositorio-accesible`, conservado como respaldo y para enlaces históricos durante la transición.

## 1. Estado de partida comprobado

### BDA
Su portada ofrece tres accesos principales: Lengua de Señas Peruana, Sistema Braille y Biblioteca Accesible. El visor de LSP incorpora descargas de imágenes PNG con seguimiento agregado en Supabase. La biblioteca contiene un catálogo local y resultados dinámicos de Project Gutenberg/Gutendex mediante enlaces externos. El Braille de BDA ofrece consulta visual y una práctica sencilla con constancia; **esta práctica no es la de MEA**.

### RA
RA tiene una portada y tres categorías públicas independientes:
- `materiales-disponibles/`, clave de base `materiales_disponibles`.
- `equipos-tecnologicos/`, clave `equipos_tecnologicos`.
- `materiales-elaborados/`, clave `materiales_elaborados`.

Las páginas actuales utilizan `componentes/iniciar-categoria-ra.mjs`, `componentes/catalogo-vista-ra.mjs` y `componentes/catalogo-ra.mjs`; muestran hasta 9 recursos por página, admiten vínculos individuales `#recurso-ID` y usan `public.repositorio_recursos` de Supabase bajo acceso público de solo lectura, filtrando categoría, `visible=true` y `estado_publicacion=publicado`.

### Inventario de producción verificado (solo lectura)
El 11 de noviembre de 2026 Supabase devolvió **47 recursos publicados y visibles**, todos con identificador distinto y título presente:
- Materiales disponibles: **27**.
- Equipos tecnológicos: **5**.
- Materiales elaborados: **15**.

El expediente histórico de RA del 10 de noviembre consignaba 22 materiales, pero la tabla actual contiene 47; **no debe utilizarse el inventario antiguo como base para una migración**.

De los 47 recursos actuales: **36 imágenes de Supabase Storage**, **7 referencias a rutas locales `assets/...` de RA** y **4 fichas sin imagen**. La ausencia de imagen es un estado permitido, no un error a subsanar inventando fotografías. No se observaron imágenes HTTPS de dominios ajenos a RA o al Storage autorizado entre los recursos publicados.

`public.repositorio_recursos` mantiene RLS habilitada y acceso de lectura `anon` condicionado por sus políticas; el catálogo no requiere privilegios administrativos.

## 2. Compatibilidad y dependencias

| Elemento | Hallazgo | Acción necesaria antes de migrar |
| --- | --- | --- |
| Datos de Supabase | Los 47 recursos están en una sola tabla ya administrada desde el panel EVA | **Reutilizar la tabla**, sin copiar filas ni cambiar sus ID/categorías en primera instancia |
| Recursos de RA | Tres categorías y páginas independientes, con paginación y anclas | Mantener las tres subsecciones dentro de BDA, con navegación directa a `#recurso-ID` |
| URL y rutas del frontend | `catalogo-ra.mjs` fija `ORIGEN_RA` y enlaces `/repositorio-accesible/`; el iniciador verifica el último segmento de la ruta | Adaptar enlaces canónicos, generador de URLs, imports, rutas y CSP al destino BDA, sin hacer simples copias ciegas |
| Imágenes | Siete referencias locales `assets/...` resuelven contra RA, 36 imágenes vienen de Storage | Copiar/verificar los siete activos y modificar el resolutor de rutas solo tras validar su equivalencia; conservar fallback temporal al dominio RA si se utiliza |
| Fichas sin imagen | Cuatro recursos publicados no tienen imagen | Preservar el aviso accesible existente, no asignar imágenes ficticias |
| Panel administrativo | Gestión RA desde el panel privado EVA con rol/autorización y MFA AAL2; hay funciones de destacados y «materiales de la semana» | Mantener escritura y auditoría existentes con las mismas categorías. No duplicar panel ni modificar permisos de DB |
| Biblioteca BDA | Catálogo bibliográfico/links externos independiente | Mantenerlo; no mezclarlo con `repositorio_recursos` sin análisis semántico posterior |
| LSP BDA | Diccionario propio y contador `lsp/png/descarga_solicitada` | Conservar rutas, descargas y estadísticas sin cambios |
| Braille BDA | Práctica sencilla duplicada funcionalmente frente a MEA; estadística de impresión ya retirada | Preparar retiro del acceso en portada y redirección informativa a MEA; **no eliminar todavía** archivos, constancias ni enlaces hasta revisión de dependencias |
| Braille MEA | Práctica básica y práctica progresiva/personalizada con seguimiento mediante Google Apps Script y hoja de cálculo | No alterar, copiar ni migrar datos personales a BDA |
| Contadores de visitas | RA registra `repositorio_accesible`, BDA registra `bda` | Conservar históricos separados; definir medición futura sin sumar visitantes como si fueran únicos ni disparar doble registro por una misma página |
| Enlaces históricos | RA utiliza `/repositorio-accesible/{categoria}/#recurso-ID`, además de portada, QR y referencias externas | Crear redirecciones estables que preserven categoría **y fragmento**, comprobando recursos paginados, antes de retirar accesos RA de la portada EVA |
| Accesibilidad y difusión | Ambas webs integran estilos, alto contraste y scripts institucionales, redes, políticas y ventanas emergentes | Verificar foco, lector de pantalla, pantalla móvil, contraste, cache, CSP, rutas de iconos y scripts para la nueva ubicación |

## 3. Arquitectura propuesta para comprobar en prototipo

```text
banco-digital-accesible/
  index.html                        (LSP, Biblioteca, Recursos accesibles)
  lsp/                              (se conserva)
  biblioteca/                       (se conserva)
  recursos/
    index.html                      (portada del catálogo integrado)
    materiales-disponibles/
    equipos-tecnologicos/
    materiales-elaborados/
  componentes/ra/                   (catálogo adaptado, no duplicado funcional)
  assets/ra/                        (activos locales RA verificados)
```

Las rutas propuestas son una **opción de diseño, no direcciones públicas ya creadas**. La antigua sección Braille de BDA se mantendría sin cambios hasta que un prototipo nuevo y sus redirecciones estuvieran validados.

## 4. Riesgos críticos detectados

1. Copiar `componentes/catalogo-ra.mjs` sin modificar `ORIGEN_RA` puede mantener vínculos de retorno a RA o hacer que imágenes locales dependan del repositorio antiguo.
2. Modificar `public.repositorio_recursos` para «mover» los recursos generaría un riesgo innecesario en el panel administrativo, IDs y auditoría. No hace falta migrar la tabla para cambiar el frontend.
3. Eliminar RA antes de instalar redirecciones rompería fichas con anclas, QR y enlaces ya compartidos. En GitHub Pages, un fragmento `#recurso-ID` se gestiona del lado del navegador; hay que preservarlo explícitamente.
4. La fusión de contadores históricos RA+BDA no puede tratar visitas agregadas como usuarios únicos.
5. Quitar Braille de BDA sin revisar sus enlaces en navegación, buscador, sitemap, páginas externas y material difundido puede dejar rutas rotas. Las prácticas de MEA deben mantenerse plenamente funcionales.
6. La cantidad real de recursos cambia con la administración. El inventario de aceptación se deberá volver a leer en el instante de migración y contrastar IDs/categorías, no congelar el número 47 como límite definitivo.

## 5. Protocolo de validación de la futura migración

1. Crear una **rama de trabajo aislada** en BDA y un subacceso de validación no indexable; no tocar `main` ni RA.
2. Integrar las tres categorías con consultas de solo lectura a la tabla RA actual; comparar conteos, IDs, títulos, fotografías y fichas sin imagen.
3. Verificar enlaces profundos `#recurso-ID` con y sin paginación, filtrado por nivel educativo y vista ampliada de equipos.
4. Revisar biblioteca, descargas LSP, accesibilidad (incluido alto contraste) y carga en computadora/teléfono.
5. Comprobar con la sesión administrativa real que altas, ediciones y visibilidad de recursos se reflejen en la nueva visualización, sin duplicar escrituras ni cambiar permisos.
6. Validar un esquema de redirección compatible con páginas y anclas antiguas de RA y la ruta de Braille BDA hacia las prácticas MEA.
7. Tras aprobación humana, publicar primero BDA integrado; mantener RA vivo como respaldo/redirección y actualizar portal EVA, buscador, sitemap, tarjetas y material de difusión.
8. Solo cuando la integridad y enlaces públicos estén comprobados, decidir archivo de RA y retirada física de archivos Braille de BDA mediante una intervención separada.

## 6. Dictamen

**Reestructuración RA + BDA técnicamente viable, pero todavía no implementada.** Recomendación: migrar la experiencia pública de RA dentro de BDA y mantener el repositorio RA y su base de datos actuales como infraestructura de respaldo durante la transición. No destruir ni duplicar registros. El recurso de Braille BDA se retirará de la navegación solo después de comprobar las rutas hacia MEA.

La etapa de seguimiento de descargas de BDA está cerrada en el alcance vigente de LSP PNG. No se reactiva el seguimiento de impresión de Braille.
