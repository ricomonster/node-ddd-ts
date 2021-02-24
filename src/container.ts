import { createContainer, Lifetime, asClass, asValue } from 'awilix';
import { scopePerRequest } from 'awilix-express';

const { log } = console;

// Components to load up
import config from './../config';
import { sequelize } from './infra/database';
import Server from './interfaces/http/Server';

// Create the container
const container = createContainer();

// Register manually
container.register({
  config: asValue(config),
  models: asValue(sequelize.models),
  server: asClass(Server).singleton(),
});

// Dynamically register app, infra components
container.loadModules(
  [
    'app/**/*.ts',
    'infra/authentication/*.ts',
    'infra/encryption/*.ts',
    'infra/repositories/*!(BaseRepository).ts',
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    cwd: __dirname,
  }
);

// Middleware for Express usage
container.register({
  containerMiddleware: asValue(scopePerRequest(container)),
});

log('Modules loaded:', Object.keys(container.registrations));

export default container;
