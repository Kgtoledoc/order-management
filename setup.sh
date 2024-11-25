#!/bin/bash

# Crear la estructura de carpetas para el proyecto
mkdir -p services/auth-service/src/{controllers,models,routes,services,middleware,config} \
          services/user-service/src/{controllers,models,routes,services,middleware,config} \
          services/product-service/src/{controllers,models,routes,services,middleware,config} \
          services/order-service/src/{controllers,models,routes,services,middleware,config} \
          services/shipping-service/src/{controllers,models,routes,services,middleware,config} \
          services/api-gateway/src/routes

# Crear carpetas para pruebas
mkdir -p services/auth-service/tests \
          services/user-service/tests \
          services/product-service/tests \
          services/order-service/tests \
          services/shipping-service/tests \
          services/api-gateway/tests

# Crear archivos de configuración y Dockerfile
for service in auth-service user-service product-service order-service shipping-service api-gateway; do
    touch services/$service/src/app.js
    touch services/$service/Dockerfile
    touch services/$service/package.json
done


