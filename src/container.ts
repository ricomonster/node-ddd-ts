import { createContainer, Lifetime, asClass } from 'awilix';
// import { scopePerRequest } from "awilix-express";

import Server from './interfaces/http/Server';

// Create the container
const container = createContainer();

// Register manually
container.register({
  server: asClass(Server).singleton(),
});

// Dynamically register app, infra components
container.loadModules(
  [
    'app/**/*.js',
    'infra/authentication/*.js',
    'infra/encryption/*.js',
    'infra/repositories/*!(BaseRepository).js',
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    cwd: __dirname,
  }
);

console.log('Modules loaded:', Object.keys(container.registrations));

export default container;
