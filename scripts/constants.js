const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;
const isDevelopment = process.env.NODE_ENV === 'development';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 9000;
console.log(`project path:${PROJECT_PATH}`);
console.log(`project name:${PROJECT_NAME}`);
console.log(`isDevelopment:${isDevelopment}`);
module.exports = {
  isDev: isDevelopment,
  PROJECT_NAME,
  PROJECT_PATH,
  SERVER_HOST,
  SERVER_PORT,
};
