import dotenv from "dotenv";
dotenv.config();
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.token);

try {
  rest.put(Routes.applicationCommands(process.env.appId, 1), {
    body: commands,
  });
} catch (error) {
  console.error(error);
}
