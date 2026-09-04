NODE WEB

NODE -> programa que ejecuta js (runtime), usa el mismo motor que el navegador.  
NPM -> node package manager ("playstore" de node)  

REACT (js) -> (Facebook).  
- ibreria -> Construir interfaces de usuario  
- Hay framework de react? si -> NEXT.JS  

SPA single page application -> Carga una sola pagina html y de ahi js reescribe el contenido  
No hay recarga, la navegacion se siente instantanea.  

DOM -> Al cambiar un dato tenes que recalcular el layout y repintar la pantalla.  
innerHTML, element.classlist.add  

VIRTUAL DOM 
- Copia liviana del DOM en memoria, cuando algo cambia react arma esa copia de nuevo, compara contra la version anterior y calcula el cambio minimo para aplicar. Recien ahi toca el dom real solo en donde cambió.
- Ventaja del virtual dom es que hace todo mucho mas rapido en comparacion del DOM porque no tiene que hacer todo de nuevo.

TECTONOLOGIAS SIMILARES (JS) --> Angular, Vue, Astro

VITE -> herramienta de compilacion y desarrollo. Es rápida.
- Cuando instalas react con VITE genera Scaffolding (andamiaje)
- Comandos de instalación:
    A -> interactiva
        npm init vite@latest
    B -> Directa y rapida
        npm init vite@latest mi-primer-proyecto -- --template react

LINTER --> Un linter es una herramienta de software que analiza el código fuente de manera automática para detectar errores, problemas lógicos e incumplimientos de estilo antes de ejecutarlo


EJECUCION DE PROYECTO
- Luego de la creación del proyecto:
  Ctrl + C --> Bajas el proyecto
  npm run dev --> ELevantas el pro

INSTALAR LIBRERIA
  npm i mathjs --> Instala una libreria,  podes verificar en package.json como se incorporaron las dependencias 
  npm uninstall mathjs --> Desinstala la libreria. 


Con JS se utilizan 2 formas de type
- Module      (Cuando se trabaja JS con librerias como en React)  
- Common JS   (Archivos individuales - Conectando JS con HTML y CSS)


OBSERVACIONES REACT
Componentes Funcionales --> por ejemplo App.jsx  (inician siempre en mayusculas)
- Tiene un retorno en HTML. Esta envuelto en ()
- Fragment  <> </> --> Etiqueta de React para el retorno (react requiere solo tener una etiqueta padre) 
- Para definir un selector de clase en una etiqueta HTML, se utiliza className (en vez de class)
- Para escribir JS em el HTML de retorno se hace entre llaves {}.  Tambien se puede escribir JS fuera del retorno.