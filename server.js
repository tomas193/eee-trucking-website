const express = require('express');
const multer = require('multer');
const sqlite3 = require('sqlite3');

const server = express();

// ✅ Servir archivos estáticos como CSS, JS, imágenes, fuentes
server.use(express.static(__dirname));

// ✅ Procesar formularios
server.use(express.urlencoded({ extended: true }));

// ✅ Rutas HTML
server.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

server.get('/contacto', function (req, res) {
	res.sendFile(__dirname + '/contact.html');
});

server.get('/info', function (req, res) {
	res.sendFile(__dirname + '/about.html');
});

server.get('/servicio', function (req, res) {
	res.sendFile(__dirname + '/service.html');
});

server.get('/clientes', function (req, res) {
	res.sendFile(__dirname + '/testimonial.html');
});

server.get('/proyectos', function (req, res) {
	res.sendFile(__dirname + '/project.html');
});

server.listen(3000, function () {
	console.log('Servidor corriendo en http://localhost');
});
