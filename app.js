const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Routes = require('./controller');
const { checkDbConnection }= require( './helpers/appHelper');

(async () => {

    const server = await new Hapi.Server({
        host: 'localhost',
        port: 3010,
    });

    const healthCheck = () => Promise.all([
        checkDbConnection(),
    ]);

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    healthCheck()
        .then(async () => {
          await server.start();
        })
        .catch(healthErr => console.log(['error'], healthErr));

    /*try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }*/

    server.route(Routes);
})();