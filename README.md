# V-Doctor System – Landing Page del Software de Gestión Veterinaria

> **Landing page oficial** para el sistema de gestión veterinaria V‑Doctor, desarrollada con **Nuxt 3 (Vue 3)** y **Tailwind CSS**.  
> Esta página web está diseñada para **promocionar el producto** y permitir a los usuarios **descargar la aplicación móvil (APK)** para probar una demo funcional con el backend ya desplegado en un servidor en la nube.

---

## 📋 Descripción del proyecto

Este repositorio contiene el **frontend de la landing page** del proyecto V‑Doctor System, un sistema integral de gestión para clínicas veterinarias en Cuba.  
El proyecto completo consta de:

- **Backend API** (Node.js + Express) alojada en un servidor en la nube.
- **Base de datos centralizada** (PostgreSQL).
- **Aplicación móvil Android** (nativa o híbrida) que se comunica con la API.
- **Landing page** (este repositorio) para dar a conocer el producto y facilitar la descarga del APK de demostración.

**La landing page no requiere instalación ni configuración**; está desplegada como sitio estático (GitHub Pages) y su único propósito es informar y permitir la descarga de la app.  
Los usuarios finales solo deben descargar el APK, instalarlo en su dispositivo Android y seguir las instrucciones de configuración (ingresar la URL del servidor) para comenzar a usar la demo.

---

## 🎯 Objetivo de esta landing

- Presentar las funcionalidades del sistema de forma clara y atractiva.
- Proporcionar acceso rápido a la demo mediante la descarga del APK.
- Mostrar capturas de pantalla del software en acción.
- Ofrecer información de contacto para soporte y ventas.

---

## ✨ Características de la landing page

- **Diseño responsive** (Tailwind CSS) con menú fijo y efecto de scroll.
- **Secciones claras**: Inicio, Producto, Funcionalidades, Demo, Requisitos, Sobre mí y Contacto.
- **Lightbox** para ampliar las imágenes del software.
- **Animaciones suaves** al hacer scroll (fadeInUp) y gradiente animado en el hero.
- **Botones de copia** de contraseñas de usuarios de demo (para facilitar la prueba).
- **Enlace directo** a descarga del APK de la aplicación móvil.
- **SEO configurado** mediante composable `useSeo` (para mejorar visibilidad en buscadores).

---

## 🖼️ Capturas de la aplicación móvil (APK)

A continuación se muestran algunas pantallas representativas de la aplicación V‑Doctor en funcionamiento. Todas las imágenes se encuentran en la carpeta [`public/software-imagenes/`](./public/software-imagenes/).

<div align="center">
  <img src="public/software-imagenes/image1.jpeg" alt="Vista general del sistema" width="200" />
  <img src="public/software-imagenes/image2.jpeg" alt="Módulo de pacientes / historias" width="200" />
  <img src="public/software-imagenes/image3.jpeg" alt="Inventario y medicamentos" width="200" />
  <br>
  <img src="public/software-imagenes/image4.jpeg" alt="Ventas y facturación" width="200" />
  <img src="public/software-imagenes/image5.jpeg" alt="Contabilidad en dos monedas" width="200" />
  <img src="public/software-imagenes/image6.jpeg" alt="Calendario y recordatorios" width="200" />
  <br>
  <img src="public/software-imagenes/image7.jpeg" alt="Gestión de usuarios" width="200" />
  <img src="public/software-imagenes/image8.jpeg" alt="Perfil de usuario" width="200" />
  <img src="public/software-imagenes/image9.jpeg" alt="Método de consulta / impresión" width="200" />
  <br>
  <img src="public/software-imagenes/image10.jpeg" alt="Consulta e historial clínico" width="200" />
  <img src="public/software-imagenes/config.jpeg" alt="Pantalla de configuración de la app" width="200" />
</div>

> **Nota:** Estas imágenes son ejemplos del aspecto de la aplicación móvil. La demo completa incluye todas las funcionalidades descritas.

---

## 🚀 Cómo usar la demo (para usuarios finales)

1. Visita la landing page: [https://davidquintanajob.github.io/V-Doctor/](https://davidquintanajob.github.io/V-Doctor/)
2. Descarga el archivo APK desde el botón "Descargar V-Doctor (APK)".
3. Instala la aplicación en tu dispositivo Android (permite instalaciones desde orígenes desconocidos).
4. Abre la app y, en la pantalla de configuración, ingresa la URL del servidor: `http://31.170.165.44:8787` y guarda.
5. Inicia sesión con uno de los usuarios de prueba (se proporcionan en la misma landing).

**No es necesario instalar ningún servidor ni dependencias.** Todo el backend ya está operativo en la nube.

---

## 🛠️ Herramientas y tecnologías utilizadas (para el desarrollo completo)

| Área                | Tecnologías / Herramientas                                                                                     |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| **Frontend (landing)** | ![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.0-00DC82?logo=nuxt.js&logoColor=white) ![Vue.js](https://img.shields.io/badge/Vue.js-3.0-4FC08D?logo=vue.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github&logoColor=white) |
| **Backend API**        | ![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white) |
| **Base de datos**      | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-336791?logo=postgresql&logoColor=white)  |
| **App móvil**          | ![Android](https://img.shields.io/badge/Android-13.x-3DDC84?logo=android&logoColor=white)        |
| **Control de versiones** | ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white) |
| **Editor / IDE**       | ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white)               |
| **Despliegue**         | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white) (para CI/CD) |

---

## 📦 Tecnologías específicas de la landing

- [Nuxt 3](https://nuxt.com/) – Framework Vue.js con SSR/SSG (usado en modo estático).
- [Vue 3](https://vuejs.org/) – Composition API y reactividad.
- [Tailwind CSS](https://tailwindcss.com/) – Estilos utilitarios y diseño responsive.
- [VueUse](https://vueuse.org/) – Composición de utilidades (no usado directamente, pero disponible).

---

## 👨‍💻 Acerca del desarrollador

Este proyecto ha sido desarrollado por **David Quintana**, ingeniero informático con experiencia en el diseño e implementación de sistemas de gestión, APIs RESTful y aplicaciones móviles.  
El sistema V‑Doctor nace de una necesidad real en el sector veterinario cubano, y se ha construido con un enfoque en la eficiencia, seguridad y facilidad de uso.

---

## 📬 Contacto

- **Correo:** [davidquintanajob@gmail.com](mailto:davidquintanajob@gmail.com)
- **WhatsApp:** [+53 56242671](https://wa.me/5356242671)
- **Landing:** [https://davidquintanajob.github.io/V-Doctor/](https://davidquintanajob.github.io/V-Doctor/)

---

> **Nota para reclutadores:** Este repositorio demuestra habilidades en desarrollo frontend con Nuxt/Vue, integración con GitHub Pages, manejo de assets, SEO, y diseño responsive. El proyecto completo incluye también backend, base de datos y app móvil, lo que refleja una visión full-stack y capacidad para llevar un producto desde la idea hasta su despliegue.