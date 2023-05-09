import { DataSourceOptions } from 'typeorm';

const config = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'saj_dev',
  entities: ['dist/**/*.entity.js']
}

export const dataSourceOptions: DataSourceOptions = { 
  type: 'postgres',
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  entities: config.entities,
  migrations: ['dist/database/migrations/*.js']
}

export const dataSourceOptionsSeeds: DataSourceOptions = { 
  type: 'postgres',
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  entities: config.entities,
  migrations: ['dist/database/seeds/*.js']
}
