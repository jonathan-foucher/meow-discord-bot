const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const logger = require('./logger');

const appId = process.env.DISCORD_APP_ID;
const botToken = process.env.DISCORD_BOT_TOKEN;

const commands = [
    {
        type: 1,
        name: 'meow',
        description: 'Meow ?',
    },
    {
        type: 1,
        name: 'get-kitty',
        description: 'Get a kitty cat picture !',
    },
];

const rest = new REST({version: '9'}).setToken(botToken);

(async () => {
    try {
        logger.info('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(appId),
            {body: commands},
        );

        logger.info('Successfully reloaded application (/) commands.');
    } catch (error) {
        logger.error(error);
    }
})();
