# 📘 Clase 20  
## 🚀 Node, React y Ecosistema Frontend

---

## ⚡ Node & NPM
- **Node** → Programa que ejecuta JS (runtime), usa el mismo motor que el navegador.  
- **NPM** → Node Package Manager (el "Playstore" de Node).  

---

## ⚛️ React
- Librería creada por **Facebook** para construir interfaces de usuario.  
- ¿Framework de React? → **Next.js**  

---

## 🖥️ SPA (Single Page Application)
- Carga una sola página HTML y luego JS reescribe el contenido.  
- No hay recarga → la navegación se siente instantánea.  

---

## 🧩 DOM vs Virtual DOM
- **DOM** → Al cambiar un dato se recalcula el layout y se repinta la pantalla.  
  Ejemplo: `innerHTML`, `element.classList.add`  

- **Virtual DOM**  
  ```diff
  + Copia liviana del DOM en memoria
  + React arma la copia de nuevo y compara con la versión anterior
  + Calcula el cambio mínimo y lo aplica al DOM real
  + Mucho más rápido que el DOM tradicional
