# Usa la imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que está escuchando la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]