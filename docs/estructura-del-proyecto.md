# Estructura del proyecto

Este documento registra la estructura **vigente** del Banco Digital Accesible (BDA), módulo del Ecosistema Virtual Accesible (EVA).

La organización actual separa la portada general, los módulos internos de Lengua de Señas Peruana y Braille, la Biblioteca Accesible, los datos compartidos, las extensiones específicas y la documentación de respaldo.

## Estructura general vigente

```text
banco-digital-accesible/
├── index.html
├── estilos.css
├── index-csp.css
├── app.js
├── accesibilidad-bda.css
├── accesibilidad-bda.js
├── creditos.html
├── creditos.css
├── logo-crebe.png
├── logo-crebe.webp
├── patron-shipibo.webp
├── datos/
│   └── buscador.json
├── biblioteca/
│   ├── index.html
│   ├── biblioteca.css
│   ├── biblioteca.js
│   ├── recurso.html
│   ├── recurso.js
│   ├── criterios.html
│   └── datos/
│       └── recursos.json
├── braille/
│   ├── index.html
│   ├── app.js
│   ├── braille.json
│   ├── teoria.html
│   ├── faq.html
│   ├── accesibilidad.html
│   ├── practica.js
│   └── hojas de estilo específicas
├── lsp/
│   ├── index.html
│   ├── app.js
│   ├── diccionario_lsp.json
│   ├── faq.html
│   ├── creditos.html
│   ├── accesibilidad.html
│   ├── imagenes/
│   └── hojas de estilo específicas
└── docs/
    └── documentación pedagógica, autoral, institucional y técnica
```

## Archivos principales

- `index.html`: portada general del Banco Digital Accesible.
- `estilos.css` e `index-csp.css`: estilos de la portada y reglas externalizadas para mantener la política CSP.
- `app.js`: comportamiento general de la portada.
- `accesibilidad-bda.js` y `accesibilidad-bda.css`: extensión específica del recorrido guiado de BDA. No sustituyen el núcleo central de accesibilidad de EVA.
- `datos/buscador.json`: índice de búsqueda del módulo.
- `logo-crebe.png`: copia canónica PNG del logo institucional dentro de BDA.
- `logo-crebe.webp`: variante WebP para usos donde resulte conveniente.
- `patron-shipibo.webp`: recurso visual compartido.

## Módulos internos

### Lengua de Señas Peruana

La carpeta `lsp/` reúne el banco de Lengua de Señas Peruana, su diccionario estructurado, páginas de apoyo, créditos, accesibilidad de contenido e imágenes organizadas por categorías.

### Braille

La carpeta `braille/` reúne teoría, práctica, datos Braille, preguntas frecuentes y páginas de apoyo específicas.

### Biblioteca Accesible

La carpeta `biblioteca/` contiene su propia interfaz, datos de recursos, página de detalle y criterios de publicación.

## Accesibilidad

El sistema general de accesibilidad se consume desde el núcleo central ubicado en Accesos Complementarios.

Los archivos `accesibilidad-bda.js` y `accesibilidad-bda.css` se conservan únicamente como extensión funcional del recorrido guiado de BDA.

## Documentación

La carpeta `docs/` contiene documentos con funciones diferenciadas: autoría, sustento del proyecto, alcance pedagógico, fuentes generales, fuentes específicas de LSP, uso permitido, uso institucional, criterios de integración, respaldo institucional, estructura y bitácora.

Los documentos con temas relacionados no deben fusionarse automáticamente si cumplen alcances distintos.

## Criterio de mantenimiento

- Evitar copias de logos o recursos compartidos dentro de subcarpetas cuando puedan utilizar la fuente canónica.
- No crear implementaciones generales paralelas de accesibilidad.
- Mantener datos de cada módulo junto a su funcionalidad correspondiente.
- Actualizar este documento cuando se creen, retiren o reorganicen componentes estructurales.
