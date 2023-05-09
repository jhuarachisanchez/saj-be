var dbConfig = {
  synchronize: false
}

console.log('Start orm config', process.env.NODE_ENV)
switch(process.env.NODE_ENV) {
  case 'development': 
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'localhost',
      port: '5432',
      username: 'postgres',
      password: 'postgres',
      database: 'saj_dev',
      entities: ['**/*.entity.js'],
      keepConnectionAlive: true,
    })
  case 'test': 
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'localhost',
      port: '5432',
      username: 'postgres',
      password: 'postgres',
      database: 'saj_test',
      entities: ['**/*.entity.ts'],
      keepConnectionAlive: true,
    })
  case 'production': 
  default:
}

module.exports = dbConfig