# 🧩 Proyecto: Hat.sh - Ingenieria Inversa
### 👥 Grupo 2  

---

## 💡 Presentación del Proyecto  

**Hat.sh Grupo 2** es una versión reforzada y personalizada de la aplicación web de código abierto [Hat.sh](https://github.com/sh-dv/hat.sh), centrada en la implementación de prácticas **DevSecOps** y en la mejora tanto de la **seguridad** como de la **interfaz gráfica**.  

El objetivo del proyecto es crear una versión más segura, optimizada y profesional, lista para ser desplegada en entornos de producción mediante Docker.  

---

## ⚙️ Objetivo General  

El proyecto busca transformar Hat.sh en una aplicación reforzada, mediante:

- Identificación y mitigación de vulnerabilidades en dependencias y código fuente.  
- Implementación de buenas prácticas DevSecOps en cada fase del ciclo de vida.  
- Construcción de una imagen Docker endurecida, liviana y segura.  
- Rediseño completo de la interfaz gráfica para ofrecer una experiencia moderna y orientada a ciberseguridad.  
- Publicación de una imagen final optimizada en Docker Hub lista para despliegue.


---

## 🧱 Tecnologías Utilizadas  

- **JavaScript**  
- **HTML5 / CSS3**  
- **Node.js**  
- **Docker**  
- **DevSecOps Tools (SAST & SCA)**  
- **PowerShell**  
- **Docker Hub**
- **Docker Scout**

---

## 🧰 Refuerzo de Seguridad  

Durante el proceso de análisis, auditoría del código y endurecimiento del contenedor, se aplicaron correcciones clave para mejorar la seguridad, reducir riesgos y optimizar la imagen final.

| Tipo de vulnerabilidad              | Riesgo | Acción correctiva aplicada |
|------------------------------------|--------|----------------------------|
| Dependencias desactualizadas       | Medio  | Actualización controlada mediante `npm install --legacy-peer-deps`, auditoría con `npm audit` y verificación con Docker Scout. |
| Ejecución como root en el contenedor | Alto | Creación del usuario no root `hat` y ejecución del contenedor con permisos mínimos. |
| Superficie de ataque amplia        | Medio  | Optimización del contexto de build mediante `.dockerignore` para excluir archivos innecesarios. |
| Falta de verificación del estado del contenedor | Medio | Implementación de `HEALTHCHECK` basado en respuesta HTTP del servicio. |
| Imagen con capas innecesarias y exceso de tamaño | Bajo | Limpieza de caches, reestructuración del Dockerfile y reducción del tamaño final de la imagen. |
| Ausencia de pipeline automatizado de seguridad | Medio | Integración de GitHub Actions para revisar dependencias, validar builds y ejecutar análisis automáticos. |

---

## 🎨 Interfaz Gráfica (Nueva versión UI)

La interfaz de **Hat.sh Reforged – Grupo 2** fue rediseñada con un enfoque visual moderno y alineado a proyectos orientados a ciberseguridad.

**Principales mejoras:**
- Tema oscuro estilo consola, con acentos neón verde–azulados.
- Tipografía **Roboto Mono** para una estética técnica, minimalista y legible.
- Botones rediseñados con animaciones fluidas y microinteracciones.
- Diseño completamente **responsive**, optimizado para escritorio y móvil.
- Fondo con degradado oscuro que mejora el contraste visual.
- Nuevo logo textual: *“Hat.sh Reforged – Grupo 2”*.
- Footer actualizado: `Mejorado por el grupo 2 sh-dv`.
  

---

## 🔗 Repositorios del Proyecto  

🐳 **Docker Hub:** [(https://hub.docker.com/r/javierprias/hatsh-ing_inversa_grupo2) ](https://hub.docker.com/r/javierprias/hatsh-ing_inversa_grupo2)
💻 **GitHub:** [(https://github.com/javierprias/hat.sh-grupo2.git)  ](https://github.com/javierprias/hat.sh-grupo2.git)

---

## 📜 Licencia  

Este proyecto se distribuye bajo los términos de la **licencia MIT**, respetando los derechos del repositorio original [Hat.sh](https://github.com/sh-dv/hat.sh).

---

## 👥 Créditos  

Desarrollado por el **Grupo 2** como parte del proceso de análisis, refuerzo y despliegue seguro de aplicaciones FOSS bajo un enfoque **DevSecOps**.
