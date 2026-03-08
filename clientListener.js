import dotenv from "dotenv";
dotenv.config();
import { Client, Events, GatewayIntentBits } from "discord.js";

const TOKEN = 1234;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, (readyClient) => {
  console.log(`logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.token);
