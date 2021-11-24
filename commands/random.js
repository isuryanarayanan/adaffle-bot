/* Imports */
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
/* Imports */

/* Main */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Generates a random number between 1-9"),
  async execute(interaction) {
    await interaction.reply(""+Math.floor((Math.random() * 10) + 1));
  },
};
/* Main */
