import dotenv from "dotenv";
dotenv.config();
import {
  AttachmentBuilder,
  Client,
  Events,
  GatewayIntentBits,
} from "discord.js";
import generateQR from "./qrGenerator.js";

const TOKEN = 1234;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, (readyClient) => {
  console.log(`logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "qr") {
    const url = interaction.options.getString("url");
    const buffer = await generateQR(url);
    const attachment = new AttachmentBuilder(buffer, { name: "qr.png" });
    await interaction.reply({ files: [attachment] });
  }
});

client.login(process.env.token);
