const { SlashCommandBuilder } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde comandos do Git"),


    async execute(interaction) {
        await interaction.reply("Pong!")
    }
}