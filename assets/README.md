# /assets

Acá van las imágenes del portfolio. Mientras un archivo no exista,
el sitio muestra el contenedor reservado con la ruta esperada
(no se rompe el layout).

| Archivo | Dónde se usa | Proporción sugerida | Medida recomendada |
| --- | --- | --- | --- |
| `hero-visual.webp` | Composición del hero (fondo transparente) | ~6:5 | 1600 × 1335 px |
| `nuve-main.jpg` | NÜVE · captura general (home) | 16:9 | 1600 × 900 px |
| `nuve-1.jpg` | NÜVE · catálogo | 4:3 | 800 × 600 px |
| `nuve-2.jpg` | NÜVE · panel admin (productos) | 4:3 | 800 × 600 px |
| `nuve-3.jpg` | NÜVE · panel admin (editar producto) | 4:3 | 800 × 600 px |
| `kabodhi-main.jpg` | Kabodhi · captura general (home) | 16:9 | 1600 × 900 px |
| `kabodhi-1.jpg` | Kabodhi · tienda con filtros | 4:3 | 800 × 600 px |
| `kabodhi-2.jpg` | Kabodhi · sección melena de león | 4:3 | 800 × 600 px |
| `kabodhi-3.jpg` | Kabodhi · panel admin | 4:3 | 800 × 600 px |
| `griflor-main.jpg` | Griflor · captura general (arriba) | 16:9 | 1600 × 900 px |
| `griflor-1.jpg` | Griflor · captura chica 1 | 4:3 | 800 × 600 px |
| `griflor-2.jpg` | Griflor · captura chica 2 | 4:3 | 800 × 600 px |
| `griflor-3.jpg` | Griflor · captura chica 3 | 4:3 | 800 × 600 px |
| `og-cover.jpg` | Vista previa al compartir el link | 1.91:1 | 1200 × 630 px |

## Iconos de la franja resumen

PNG con fondo transparente, cuadrados. Se muestran a 44 px,
así que conviene exportarlos a 96 px para que se vean nítidos
en pantallas retina. Mientras el archivo no exista, la franja
muestra el glifo de respaldo y no se ve ninguna imagen rota.

| Archivo | Bloque |
| --- | --- |
| `icon-developer.png` | DEVELOPER |
| `icon-uxui.png` | UX/UI DESIGN |
| `icon-design.png` | DESIGN |
| `icon-tools.png` | HERRAMIENTAS |

## Iconos del flujo (tarjeta de Sobre mí)

Mismo formato: PNG transparente, cuadrado, exportado a 96 px.
Se muestran a 46 px.

| Archivo | Paso |
| --- | --- |
| `step-idea.png` | IDEA |
| `step-uxui.png` | UX / UI |
| `step-desarrollo.png` | DESARROLLO |
| `step-producto.png` | PRODUCTO |

## Notas

- Usar capturas reales del sistema o la web, no ilustraciones genéricas.
- Exportar en JPG (o WebP cambiando la extensión en `index.html`) a menos de ~300 KB.
- El hero es una composición gráfica propia: no lleva fotografía personal.
- Si cambiás el nombre de un archivo, actualizá el `src` y el texto
  del `<code>` dentro del `.media-hint` correspondiente en `index.html`.
