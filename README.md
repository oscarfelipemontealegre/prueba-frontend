# Proyecto Sitio Web de Viajes

## Descripción General
Un sitio web de viajes desarrollado en React que presenta experiencias de viaje, viajes grupales, alianzas estratégicas y contenido de blog. El sitio web cuenta con un diseño moderno y responsive con varios componentes interactivos.

## Características
- Banner dinámico con título y subtítulo
- Barra de navegación con logo de la empresa
- Visualización de categorías de viaje
- Exhibición de experiencias grupales
- Sección de alianzas estratégicas
- Suscripción a boletín informativo
- Sección de blog
- Información de contacto
- Diseño responsive para todas las pantallas

## Estructura del Proyecto
```
src/
├── components/
│   ├── Cards.js
│   ├── Experiencias.js
│   ├── ImgHeader.js
│   ├── Navbar.js
│   ├── Parthers.js
│   └── Suscription.jsx
└── css/
    ├── blogs.css
    ├── card.css
    ├── experiencias.css
    ├── footer.css
    ├── navbar.css
    ├── nosotros.css
    ├── parthers.css
    ├── personalizadas.css
    ├── suscribe.css
    └── viajes.css
```

## Detalles de Componentes

### Navbar (Barra de Navegación)
- Posición fija en la parte superior
- Muestra el logo de la empresa
- Enlaces de navegación responsive
- Fondo semi-transparente
- Menú adaptable para móviles

### ImgHeader (Cabecera con Imagen)
- Visualización de banner dinámico
- Texto superpuesto con título y subtítulo
- Integración con el componente Cards
- Diseño adaptable

### Cards (Tarjetas)
- Diseño en cuadrícula para categorías de viaje
- Efectos al pasar el mouse
- Superposición de imagen con iconos
- Tamaño de tarjetas responsive

### Experiencias
- Visualización de paquetes de viaje
- Indicadores de estado
- Información de precios y fechas
- Botones de llamada a la acción
- Estilos personalizados para cada estado

### Parthers (Alianzas)
- Cuadrícula de visualización de logos
- Diseño responsive
- Imagen predeterminada para logos faltantes
- Efectos de hover suaves

### Formulario de Suscripción
- Registro para boletín por email
- Input y botón estilizados
- Diseño con tema oscuro
- Validación de entrada de correo

## Estilos

### Colores
- Principal: #d09b48 (Dorado)
- Secundario: #03033e (Azul Oscuro)
- Texto: Varios tonos de gris y blanco
- Acento: #e67e22 (Naranja)

### Características de Diseño
- Radio de borde consistente (5-25px)
- Sombras para dar profundidad
- Animaciones al pasar el mouse
- Puntos de quiebre responsive
- Superposiciones semi-transparentes

## Integración con API
El proyecto se integra con varios endpoints:
- `/api/get-categories/`: Obtiene categorías de viaje
- `/api/get-travels/`: Obtiene lista de viajes
- `/api/get-banners/`: Obtiene banners promocionales
- `/api/get-companies/`: Obtiene información de la empresa
- `/api/get-partners/`: Obtiene aliados estratégicos

URL Base: `https://api.test.interactiva.net.co`

## Diseño Responsive
- Enfoque mobile-first
- Punto de quiebre principal en 768px
- Sistema de cuadrícula flexible
- Tipografía adaptable
- Menú de navegación adaptativo

## Requisitos de Instalación
1. Node.js y npm instalados
2. React.js
3. Dependencias:
   - bootstrap
   - bootstrap-icons
   - react-router-dom

## Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## Dependencias CSS
- Bootstrap 4.5.2
- Bootstrap Icons
- Módulos CSS personalizados

## Compatibilidad con Navegadores
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Diseño responsive para dispositivos móviles y tablets

## Cómo Contribuir
1. Hacer fork del repositorio
2. Crear una rama para la nueva funcionalidad
3. Hacer commit de los cambios
4. Hacer push a la rama
5. Crear un Pull Request

## Estructura de los Commits
Se recomienda seguir el siguiente formato:
- feat: nueva característica
- fix: corrección de error
- docs: cambios en documentación
- style: cambios de estilo
- refactor: refactorización de código

## Licencia
[Agregar Información de Licencia]

## Contacto
Para soporte o consultas:
- Email: [correo de soporte]
- Teléfono: [número de contacto]


 Documentación de Componentes React

## Componente Blogs (Blogs.js)

### Descripción General
Un componente de React que obtiene y muestra entradas de blog en un diseño de cuadrícula desde un punto final de API.

### Características
- Obtiene datos de blog desde una API externa
- Muestra blogs en un diseño de cuadrícula responsive
- Cada tarjeta de blog incluye:
  - Imagen de portada
  - Título
  - Descripción
  - Enlace "Leer más"

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-blogs/`
- Respuesta esperada: Array de objetos de blog con propiedades:
  - `id`
  - `image_cover`
  - `title`
  - `description`
  - `url_front`

### Dependencias
- React
- CSS personalizado (blogs.css)

---

## Componente Footer (footer.js)

### Descripción General
Un componente de pie de página responsive que muestra información de la empresa, enlaces de navegación y detalles de contacto.

### Características
- Obtiene datos de la empresa desde una API
- Muestra el logo de la empresa
- Integración con redes sociales
- Menú de navegación
- Sección de información de contacto

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-companies/`
- Respuesta esperada: Array con objeto de empresa que contiene:
  - `logo`
  - `name`

### Dependencias
- React
- CSS personalizado (footer.css)
- Archivos de imagen:
  - mailIcon
  - phoneIcon
  - locationIcon
  - socialLogos

---

## Componente Nosotros (nosotros.js)

### Descripción General
Un componente que muestra información de la empresa y feed de Instagram en formato carrusel.

### Características
- Carrusel de feed de Instagram
- Visualización de información de la empresa
- Enlace a cuenta de Instagram
- Diseño responsive

### Integración con API
- API de Feed de Instagram: `https://api.test.interactiva.net.co/api/get-feed_instagram/`
- API de Empresa: `https://api.test.interactiva.net.co/api/get-companies/`

### Dependencias
- React
- React Bootstrap
- Bootstrap CSS
- Bootstrap Icons
- CSS personalizado (nosotros.css)

---

## Componente de Experiencias Personalizadas (Personalizadas.js)

### Descripción General
Muestra experiencias de viaje personalizadas en un diseño basado en tarjetas.

### Características
- Obtiene datos de experiencias desde API
- Diseño de cuadrícula responsive
- Tarjetas con imágenes y descripciones
- Botón "Cotizar Viaje" para cada experiencia

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-customer_experiences/`
- Respuesta esperada: Array de objetos de experiencia con:
  - `id`
  - `image`
  - `title`
  - `description`
  - `diference_description`

### Dependencias
- React
- CSS personalizado (personalizadas.css)

---

## Componente de Formulario de Viajes (viajes.js)

### Descripción General
Un componente de formulario interactivo para personalizar experiencias de viaje.

### Características
- Selección de destino
- Preferencias de experiencia
- Selección de fechas de viaje
- Conteo de viajeros (adultos/niños)
- Descripción de preferencias de viaje
- Manejo de envío de formulario

### Gestión de Estado
Gestiona el estado del formulario para:
- Destinos
- Experiencias
- Fechas de viaje
- Número de viajeros
- Preferencias de viaje

### Dependencias
- React
- CSS personalizado (viajes.css)

### Campos del Formulario
- Selector de destino principal
- Selector de destino secundario
- Multi-selector de tipo de experiencia
- Inputs de fecha de viaje
- Inputs de conteo de viajeros
- Área de texto libre para preferencias adicionales

### Uso
Importar y usar el componente:
```jsx
import ViajesForm from './components/viajes';

function App() {
  return <ViajesForm />;
}
```

Los datos del formulario pueden ser procesados en la función `handleSubmit` que actualmente registra los datos del formulario en la consola.


 Documentación de Componentes React Adicionales

## Componente de Tarjetas (card.js)

### Descripción General
Componente que muestra una cuadrícula de tarjetas con categorías, cada una con una imagen y un nombre.

### Características
- Obtiene datos de categorías desde una API
- Muestra imágenes con efecto overlay al pasar el mouse
- Diseño responsive en cuadrícula
- Icono de flecha y texto superpuesto en cada tarjeta

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-categories/`
- Respuesta esperada: Array de objetos con:
  - `id`
  - `image_banner`
  - `name`

### Dependencias
- React
- CSS personalizado (card.css)
- Bootstrap Icons

---

## Componente de Experiencias Grupales (experiencias.js)

### Descripción General
Muestra una colección de experiencias de viaje grupales en formato de tarjetas.

### Características
- Obtiene datos de viajes desde una API
- Muestra tarjetas con información detallada
- Barra de estado con código de color
- Información de fechas y costos
- Manejo de errores en carga de imágenes

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-travels/`
- Respuesta esperada: Array de experiencias con:
  - `image_cover`
  - `title`
  - `status`
  - `date_start`
  - `date_end`
  - `cost`
  - `description`

### Dependencias
- React
- Bootstrap
- Bootstrap Icons
- CSS personalizado (experiencias.css)

---

## Componente de Cabecera con Imagen (imgHeader.js)

### Descripción General
Componente que maneja la sección superior de la página, incluyendo la barra de navegación y un banner principal.

### Características
- Integración con barra de navegación
- Banner dinámico con imagen de fondo
- Título y subtítulo superpuestos
- Integración con componente de tarjetas

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-banners/`
- Respuesta esperada: Array con objeto banner conteniendo:
  - `image`
  - `title`
  - `subtitle`

### Dependencias
- React
- Componente Navbar
- Componente Cards
- CSS personalizado (navbar.css)

---

## Componente de Barra de Navegación (navbar.js)

### Descripción General
Barra de navegación responsiva con logo de la empresa y enlaces de navegación.

### Características
- Logo dinámico de la empresa
- Enlaces de navegación con React Router
- Diseño responsivo
- Integración con API para datos de la empresa

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-companies/`
- Respuesta esperada: Array con objeto empresa conteniendo:
  - `logo`
  - `name`

### Dependencias
- React
- React Router (react-router-dom)
- CSS personalizado (navbar.css)

---

## Componente de Alianzas Estratégicas (parthers.js)

### Descripción General
Muestra los logos de las empresas aliadas en un diseño de cuadrícula.

### Características
- Obtiene datos de alianzas desde API
- Muestra logos en diseño responsivo
- Manejo de casos sin logo disponible
- Efectos de sombra en las tarjetas

### Integración con API
- Endpoint: `https://api.test.interactiva.net.co/api/get-partners/`
- Respuesta esperada: Array de alianzas con:
  - `id`
  - `logo`
  - `name`

### Dependencias
- React
- CSS personalizado (parthers.css)

---

## Componente de Suscripción (suscription.jsx)

### Descripción General
Formulario simple para suscripción al boletín de noticias.

### Características
- Formulario de correo electrónico
- Validación de campo requerido
- Diseño limpio y minimalista
- Botón de suscripción

### Dependencias
- React
- CSS personalizado (suscribe.css)

### Uso
```jsx
import SuscribeteForm from './components/suscription';

function App() {
  return <SuscribeteForm />;
}
```

## Estructura del Proyecto

### Componentes Principales
- `ImgHeader`: Cabecera principal con banner y navegación
- `Nosotros`: Sección "Acerca de Nosotros"
- `Blogs`: Sección de blogs y artículos
- `Experiencias`: Muestra de experiencias grupales
- `Alianzas`: Visualización de alianzas estratégicas
- `ViajesForm`: Formulario para cotización de viajes
- `Personalizadas`: Experiencias personalizadas
- `Footer`: Pie de página
- `SuscribeteForm`: Formulario de suscripción a newsletter

### Organización de Archivos
```
src/
│
├── components/
│   ├── imgHeader.js
│   ├── experiencias.js
│   ├── parthers.js
│   └── suscription.jsx
│
├── pages/
│   ├── nosotros.js
│   ├── Blogs.js
│   ├── viajes.js
│   ├── Personalizadas.js
│   └── footer.js
│
└── App.js
```

## Dependencias Principales
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-router-dom": "^6.x",
    "bootstrap-icons": "^1.x"
  }
}
```

## Configuración e Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

## Estructura de la Aplicación
La aplicación está construida siguiendo una estructura modular donde:

- Los componentes reutilizables se encuentran en la carpeta `components/`
- Las páginas principales están en la carpeta `pages/`
- La navegación se maneja a través de React Router
- Los estilos utilizan una combinación de CSS personalizado y Bootstrap Icons

## Uso

Para implementar la aplicación en tu proyecto:

```jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Importar componentes necesarios
import ImgHeader from './components/imgHeader';
import Nosotros from './pages/nosotros';
import Blogs from './pages/Blogs';
import Experiencias from './components/experiencias';
import Alianzas from './components/parthers';
import ViajesForm from './pages/viajes';
import Personalizadas from './pages/Personalizadas';
import Footer from './pages/footer';
import SuscribeteForm from './components/suscription';

function App() {
  return (
    <Router>
      {/* Implementar estructura de rutas y componentes */}
    </Router>
  );
}

export default App;
```

## Características Principales

1. **Navegación Responsive**
   - Menú de navegación adaptable
   - Integración con React Router

2. **Gestión de Contenido Dinámico**
   - Blogs y artículos
   - Experiencias de viaje
   - Alianzas estratégicas

3. **Formularios Interactivos**
   - Cotización de viajes
   - Suscripción a newsletter

4. **Integración con APIs**
   - Conexión con backend para datos dinámicos
   - Gestión de imágenes y contenido

## Mantenimiento

Para mantener la aplicación:

1. Actualizar dependencias regularmente
2. Revisar las llamadas a API
3. Mantener los estilos CSS organizados
4. Seguir las mejores prácticas de React

## Contribución

1. Hacer fork del repositorio
2. Crear una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Hacer commit de los cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear un Pull Request

## Notas Adicionales

- La aplicación requiere una conexión a Internet para cargar recursos externos
- Se recomienda usar Node.js versión 14 o superior
- Los endpoints de API deben configurarse según el ambiente de desarrollo/producción
