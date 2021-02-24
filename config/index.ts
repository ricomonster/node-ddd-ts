// Dependencies
import * as dotenv from 'dotenv';

// Load up the config
dotenv.config();

import env from './env';
import database from './database';

// Setup the env
const ENV = env(process.env.NODE_ENV || 'development');

const config = {
  env: ENV,
  db: database[ENV],
  jwt: {
    secret: process.env.APP_KEY,
    ttl: process.env.APP_JWT_TTL,
  },
  debug: process.env.APP_DEBUG === 'true' ? true : false,
  port: process.env.APP_PORT,
};

export default config;
