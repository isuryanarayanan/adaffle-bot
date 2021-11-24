require("dotenv").config();

const GUILD_ID = process.env["DEV_GUILD_ID"];
const BOT_TOKEN = process.env["DEV_BOT_TOKEN"];

const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Creating command collection
// Each file under the commands folder
// with a .js extention will be deployed as a command
const fs = require("fs");
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
	console.log("Ready!")
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
  }
});

client.login(BOT_TOKEN);
