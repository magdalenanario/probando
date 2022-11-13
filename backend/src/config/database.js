require('dotenv').config();

const config = {
  default: {
    username: process.env.DB_USERNAME || 'e0',
    password: process.env.DB_PASSWORD || 'e0',
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME || 'e0',
    host: process.env.DB_HOST || 'db',
  },
  development: {
    extend: 'default',
    database: process.env.DB_NAME || 'e0',
  },
  test: {
    extend: 'default',
    database: 'iic2513template_test',
  },
  production: {
    extend: 'default',
    use_env_variable: 'DATABASE_URL',
  },
};

Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = { ...config[configValue.extend], ...configValue };
  }
});

module.exports = config;
