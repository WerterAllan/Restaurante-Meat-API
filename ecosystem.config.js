module.exports = {
  apps : [{
    name   : "meat-api",
    script : "./dist/main.js",
    instances: 2,
    exec_mode: "cluster",
    watch: true,
    time: true,
    env: {
      SERVER_PORT: 5000,
      DB_URL: 'mongodb://localhost/meat-api',
      NODE_ENV: "development"
    },
    env_production: {
      SERVER_PORT: 5010,
      DB_URL: 'mongodb://localhost/meat-api',
      NODE_ENV: "production"
    }


  }]
}
