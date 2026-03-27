web application/stitch/projects/8165507700225463590/screens/94f5e25b1d9e4f36b7238f717643ee99
# Guía de Componentes React: Portfolio "Crimson Noir" (Light Mode)

Para construir este portfolio con **React** y **Tailwind CSS** (recomendado por su velocidad y fidelidad al diseño), aquí tienes el desglose de componentes necesarios.

## 1. Configuración de Estilos (Tailwind Config)
Antes de los componentes, define tu paleta en `tailwind.config.js` basada en la imagen de referencia:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          darkRed: '#590404',
          blood: '#8C0808',
          vibrant: '#BF0F0F',
          void: '#260303',
          bgLight: '#F2F2F2', // Fondo para la versión clara
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
```

---

## 2. Componentes Globales (Layout)

### `Navigation.jsx`
*   **Descripción:** Navbar fija con efecto blur.
*   **Elementos:** Logo a la izquierda (`CAST3C.DEV`), links centrales (`Home`, `Projects`, `About`, `Contact`), y CTA a la derecha (`Resume`).
*   **Interacción:** Cambio de opacidad al hacer scroll.

### `Footer.jsx`
*   **Descripción:** Pie de página minimalista.
*   **Elementos:** Copyright, links sociales (GitHub, LinkedIn, Layers) y el indicador de "SYSTEMS OPERATIONAL".

---

## 3. Componentes de la Página de Inicio (Home)

### `Hero.jsx`
*   **Descripción:** El primer impacto visual.
*   **Elementos:** Título gigante (`h1`), subtítulo descriptivo, y botones principales (`View Projects` y `Read Manifesto`).
*   **Pauta:** Mucho espacio en blanco (Restricción Intencional).

### `FeaturedWork.jsx`
*   **Descripción:** Sección de trabajos destacados.
*   **Sub-componente:** `ProjectCardLarge.jsx` (Diseño horizontal para escritorio, vertical para móvil).
*   **Datos:** Título del proyecto, descripción técnica, métricas (ej. 99.99% Uptime) y tags de tecnología.

### `Philosophy.jsx`
*   **Descripción:** Sección de texto tipográfico.
*   **Pauta:** Usa `text-balance` y resalta palabras clave en el color rojo vibrante.

---

## 4. Componentes de Proyectos (Projects)

### `ProjectGrid.jsx`
*   **Descripción:** Contenedor de la galería de proyectos.
*   **Sub-componente:** `ProjectCard.jsx`.
*   **Pauta:** Usa un sistema de rejilla asimétrica o limpia para mantener el "buen gusto".

### `TechTag.jsx`
*   **Descripción:** Pequeñas píldoras para las tecnologías (React, Rust, etc.).
*   **Estilo:** Fondo oscuro con texto claro o borde fino rojo.

---

## 5. Componentes de Contacto y Perfil (About/Contact)

### `ProfileHeader.jsx`
*   **Descripción:** Imagen de perfil estilizada y biografía corta.
*   **Estilo:** Imagen con filtro grayscale o duotono rojo para consistencia.

### `ServiceCard.jsx`
*   **Descripción:** Tarjetas pequeñas para "Frontend", "Backend", "Performance".
*   **Elementos:** Icono minimalista, título y descripción corta.

### `ContactForm.jsx`
*   **Descripción:** Formulario de "Protocolo de Iniciación".
*   **Inputs:** Nombre, Email, Mensaje (estilizados con bordes finos y focus en rojo).
*   **Boton:** `SubmitButton.jsx` con hover animado.

---

## 6. Recomendaciones de Librerías

1.  **Framer Motion:** Para las transiciones entre páginas y las entradas suaves de los elementos (esencial para el toque "premium").
2.  **Lucide React:** Para iconografía técnica y minimalista.
3.  **React Hook Form:** Para la gestión limpia del formulario de contacto.

¿Te gustaría que profundice en el código de alguno de estos componentes en específico?