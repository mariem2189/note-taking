import Hapi from '@hapi/hapi';
import { noteRoutes } from './routes/noteRoutes';
import { requestLogger } from './middleware/requestLogger';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    // Register middleware
    server.ext('onRequest', requestLogger);

    noteRoutes.forEach((route) => server.route(route));

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
