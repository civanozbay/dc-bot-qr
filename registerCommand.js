import dotenv from "dotenv";
dotenv.config();
import { REST, Routes, SlashCommandBuilder } from "discord.js";

const commands = [
  new SlashCommandBuilder()
    .setName("qr")
    .setDescription("Build your QR!")
    .addStringOption((option) =>
      option.setName("url").setDescription("url for qr").setRequired(true)
    ),
].map((cmd) => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.token);

try {
  rest.put(Routes.applicationCommands(process.env.appId, 1), {
    body: commands,
  });
} catch (error) {
  console.error(error);
}
