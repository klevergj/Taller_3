# Taller 3 - API Backend & MongoDB

Este proyecto contiene la API Backend desarrollada en Node.js/TypeScript y la configuración para desplegar la base de datos MongoDB con Docker.

---

## 🚀 Requisitos Previos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) en ejecución
- npm run dev

---

## 🛠️ 1. Levantar la Base de Datos con Docker

Desde la raíz del proyecto (`code-main`), ejecuta el siguiente comando para levantar el contenedor de MongoDB:

```bash
docker run -d --name mongodb-mean -p 27017:27017 mongo:latest
