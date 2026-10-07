# Happy Paws

Tienda veterinaria desarrollada con React, Vite, Bootstrap y React Router.

## Ejecutar el proyecto

Desde esta carpeta:

```bash
npm install
npm run dev
```

Para validar antes de entregar:

```bash
npm run build
npm run lint
```

## Estructura

```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── context/
├── data/
├── pages/
├── services/
└── utils/
```

- `components/`: componentes reutilizables organizados por nivel.
- `context/`: estado global del carrito.
- `data/`: datos iniciales del catálogo.
- `pages/`: vistas asociadas a rutas.
- `services/`: acceso a datos del catálogo.
- `utils/`: funciones auxiliares, como el formato de moneda.
