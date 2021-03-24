const dotenv = require('dotenv');
const fetch = require('node-fetch');

global.fetch = fetch;
dotenv.config();