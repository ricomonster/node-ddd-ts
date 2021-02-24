// Dependencies
import path from 'path';
import * as dotenv from 'dotenv';

// Env helper
import env from './env';

// Get the path of the .env
const dotEnvPath = path.resolve('.env');

// Load up the config
dotenv.config({ path: dotEnvPath });

const environment = process.env.NODE_ENV || 'development';

const database = {
  [env(environment)]: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    host: process.env.DB_HOST || '',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306,
  },
};

export = database;
