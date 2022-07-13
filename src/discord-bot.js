const {Client, Intents, MessageAttachment} = require('discord.js');
const logger = require('./common/logger');

const {getKittyPictureUrl} = require('./cat-api');

const botToken = process.env.DISCORD_BOT_TOKEN;

function manageUnexpectedError(error, interaction) {
    logger.error(error);
    interaction.reply({content: 'An unexpected error has occured, please contact an administrator', ephemeral: true});
}

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]});

client.on('ready', () => {
    logger.info(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
    try {
        if (!interaction.isCommand()) return;

        if (interaction.commandName === 'meow') {
            interaction.reply({content: 'Meow ! :3'});

        } else if (interaction.commandName === 'get-kitty') {
            getKittyPictureUrl().then(kittyPictureUrl => {
                interaction.reply({content: 'Here is your kitty cat picture ! :3', files: [kittyPictureUrl]})
            });
        }

    } catch (error) {
        manageUnexpectedError(error, interaction);
    }
});

client.login(botToken);
