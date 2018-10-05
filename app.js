'use strict'

const Hapi = require('hapi');
const routes = require('./routes.js');

const server = Hapi.server({
	port: 3000,
	host: 'localhost',
	app: {}
});



const serverInit = async () => {
	try {
		await server.register(routes); //Registramos las rutas que soportara nuestro servidor hapi.
		await server.start(); 
		console.log(`server run in : ${server.info.uri}`);
	}
	catch (error) {
		console.log(`error running hapi server ${error}`);
	}
};

serverInit();

