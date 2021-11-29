/* Imports */
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
/* Imports */
function randomInteger(min, max) {
  return Math.random() * (max - min + 1) + min;
}
/* Main */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Generates a random number")
    .addIntegerOption((options) =>
      options
        .setName("max")
        .setDescription("Maximum number to guess from")
        .setRequired(true)
    )
    .addIntegerOption((options) =>
      options
        .setName("min")
        .setDescription("Miniumum number to guess from")
        .setRequired(true)
    ),
  async execute(interaction) {
    const maximum = interaction.options.getInteger("max");
    const minimum = interaction.options.getInteger("min");

    if (maximum <= minimum) {
      await interaction.reply("Range is invalid");
    } else {
      await interaction.reply(
        "A random number between " +
          minimum +
          " and " +
          maximum +
          " : " +
				randomInteger(minimum, maximum).toFixed(5)
      );
    }
  },
};
/* Main */
