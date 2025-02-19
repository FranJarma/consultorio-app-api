# Usa una imagen de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre el backend
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]