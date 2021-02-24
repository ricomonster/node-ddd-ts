import container from './container';
import Server from './interfaces/http/Server';

const server = container.resolve<Server>('server');

// Will start the HTTP server
try {
  void server.start();
} catch (error) {
  console.error(error.stack);
  process.exit();
}
