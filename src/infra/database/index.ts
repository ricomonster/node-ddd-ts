import { Sequelize } from 'sequelize-typescript';
import {Options} from 'sequelize';

// Config
import config from './../../../config';

export const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    ...config.db,
    models:  [__dirname + '/models'],
  } as Options,
);

// export const sequelize = new Sequelize({
//   database: config.db.database,
//   username: config.db.username,
//   password: config.db.password,
//   host: config.db.host,
//   dialect: config.db.dialect,
//   port: config.db.port,
//   models:  [__dirname + '/models'],
// });
