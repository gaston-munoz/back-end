## El desarrollo lo he dividido en Dos Ramas: development y with-server

# Development
En esta Rama se encuentra el desarrollo sin ningún agregado. Cumple con lo pedido en las especificaciones. Se peden ejecutar los comandos:
- **npm test** Corre los test y al final muestra el la consola el code coverage
- **npm run after-30-days** muestar en la consola la info de los productos en un plazo de 30 días

# with-server
En esta rama agregue lo necesario para montar un pequeño servidor que provea a la aplicacion cliente de los datos que se generan. Los comandos que se pueden ejecutar son:
- **npm test** Corre los test y al final muestra el la consola el code coverage
- **npm run after-30-days** muestar en la consola la info de los productos en un plazo de 30 días
- **npm run dev** Inicia el server en modo desrrollo y a travez de nodemon para que se reinicie cuando salvamos los cambios 
- **npm start** Inicia el server directamente con node

## Para correr con front end:
- Clonar este repo y el de Front end
- Ejecutar en este **git fetch origin with-server:with-server**
- En este repo situarse en la rama with-server: **git checkout with-server**
- ejecutar **npm install**
- ejecutar **npm start** o **npm run dev**
- En el repo de front end ejecutar **npm start**
