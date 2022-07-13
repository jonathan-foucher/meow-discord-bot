const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

require('./common/discord-commands');
require('./discord-bot');
