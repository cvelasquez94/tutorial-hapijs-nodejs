'use strict'

module.exports = {
	name: 'ApiRoutes',
	register: async ( server, options) => {
			server.route([
				{
					method: 'GET',
					path: '/',
					handler: async (req, res) => {
						return 'Hi my friend';
					}
				}, {
					method: 'GET',
					path: '/user/{name?}',
					handler: async (req, res) => {
						const name = (req.params.name) ? req.params.name : 'envited';
						return `Hi ${name}`;
					}
				}, {
					method: 'POST',
					path: '/newUser',
					handler: async (req, res) => {
						const newUser = {
							name: req.payload.name,
							lastName: req.payload.lastName
						};
						return res.response({
							data: newUser
						}).type('application/json');

					}
				}, {
					method: 'PUT',
					path: '/user/{id}',
					handler: async (req, res) => {	
						const { id } = req.params;
						const newUser = {
							name: req.payload.name,
							lastName: req.payload.lastName
						};
						return res.response({
							datos: newUser,
							message: `User ID: ${id} successfully modified`
						}).type('application/json');
					}
				}, {
					method: 'DELETE',
					path: '/user/{id}',
					handler: async (req, res) => {
						const { id } = req.params;
						return res.response({
							message: `User ID: ${id} successfully removed`
						}).type('application/json');
					} 
				}	
			]);
		}
};


