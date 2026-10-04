# Viajes Travel — Trabajo Final, Opción A

Migración de mi sitio original de HTML y CSS a React,
conservando sus imágenes, contenido y estilos.

## Tecnologías
React, Vite, JavaScript, CSS y React Router DOM.

## Contenido
- Inicio.
- Destinos nacionales y galería.
- Páginas de Jujuy, El Chaltén, El Calafate y Buenos Aires.
- Sobre mí.
- Contacto.

## Componentes
Navbar, Layout, Card, Gallery, Contact y Footer.

Card recibe los datos de cada destino mediante props.
Layout recibe el contenido mediante children.

## Formulario
Utiliza useState para controlar los campos.
Los cambios de los inputs y los datos del envío aparecen en consola.
El envío utiliza preventDefault y el botón Limpiar vacía los campos.
No envía correos ni se conecta a un servidor.

## Cómo ejecutar
Se necesita Node.js y npm.

Dentro de la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abrir la dirección que indique la terminal.

## Verificación
```bash
npm run build
npm run lint
```

## Sitio original
https://novasystems32.github.io/Viajes-Travel/