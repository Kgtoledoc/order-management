const express = require('express');
const bodyParser = require('body-parser');
const kafka = require('kafka-node');

const app = express();
const port = 8080;

// Middleware para analizar JSON
app.use(bodyParser.json());

// Configuración del cliente Kafka
const kafkaClient = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });
const producer = new kafka.Producer(kafkaClient);
const admin = new kafka.Admin(kafkaClient);

// Crear el topic si no existe
const createTopic = (topic) => {
    admin.createTopics([{
        topic: topic,
        partitions: 1,
        replicationFactor: 1,
    }], (error, result) => {
        if (error) {
            console.error('Error al crear el topic:', error);
        } else {
            console.log('Topic creado:', result);
        }
    });
};

// Crear el topic "order-topic"
createTopic('order-topic');

// Ruta para un "Hello World"
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// Ruta para enviar un mensaje de pedido
app.post('/order', async (req, res) => {
    const order = req.body;

    const payloads = [
        { topic: 'order-topic', messages: JSON.stringify(order) }
    ];

    try {
        await new Promise((resolve, reject) => {
            producer.send(payloads, (err, data) => {
                if (err) {
                    return reject(err);
                }
                console.log('Mensaje enviado:', data);
                resolve(data);
            });
        });
        res.status(200).send('Pedido recibido');
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.status(500).send('Error en el servidor');
    }
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).send('Error no manejado en el servidor');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Manejo de errores de Kafka
producer.on('error', (err) => {
    console.error('Error en el productor Kafka:', err);
    // Aquí podrías implementar lógica adicional para manejar el error
});