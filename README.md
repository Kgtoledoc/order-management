# Sistema de Gestión de Pedidos

## Descripción
El **Sistema de Gestión de Pedidos** es una aplicación web diseñada para facilitar la gestión de pedidos en un entorno de comercio electrónico. Este sistema permite a los usuarios registrarse, iniciar sesión, buscar productos, realizar pedidos y rastrear sus envíos. Además, ofrece herramientas de administración para gestionar usuarios, productos y analizar el rendimiento de ventas.

## Funcionalidades
- **Para Usuarios:**
  - Registro e inicio de sesión.
  - Gestión del perfil y acceso al historial de pedidos.
  - Búsqueda y filtrado de productos.
  - Añadir productos al carrito de compras.
  - Realización de pedidos y gestión de pagos.
  - Recibir notificaciones sobre el estado de los pedidos.
  - Rastrear el estado de los envíos.

- **Para Administradores:**
  - Gestión de usuarios (crear, editar, eliminar).
  - Gestión de productos (añadir, editar, eliminar).
  - Acceso a estadísticas de ventas y rendimiento.
  - Herramientas para gestionar envíos y promociones.

## Arquitectura
El sistema está diseñado utilizando una arquitectura de microservicios, con los siguientes componentes:
- **Servicio de Autenticación**
- **Servicio de Usuarios**
- **Servicio de Productos**
- **Servicio de Pedidos**
- **Servicio de Envíos**
- **Base de Datos (MongoDB)**
- **Sistema de Mensajería (Kafka)**
- **Monitoreo (Prometheus)**

## Tecnologías Utilizadas
- **Backend:** Node.js, Express.js
- **Base de Datos:** MongoDB
- **Mensajería:** Kafka
- **Contenerización:** Docker
- **Orquestación:** Kubernetes
- **Monitoreo:** Prometheus

## Instalación

### Requisitos Previos
1. [Node.js](https://nodejs.org/) (versión 14 o superior)
2. [MongoDB](https://www.mongodb.com/try/download/community) (local o en la nube)
3. [Docker](https://www.docker.com/get-started)
4. [Docker Compose](https://docs.docker.com/compose/)

### Clonar el Repositorio
git clone https://github.com/tu_usuario/order-management-system.git
cd order-management-system

## Contribuciones
Las contribuciones son bienvenidas.

## Licencia
Este proyecto está bajo la Licencia MIT.

## Contacto
Para más información, puedes contactar al autor en:
- **Correo Electrónico:** kgtoledoc19@gmail.com
- **GitHub:** [kgtoledoc](https://github.com/kgtoledoc)

---

¡Gracias por tu interés en el **Sistema de Gestión de Pedidos**!