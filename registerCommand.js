import dotenv from "dotenv";
dotenv.config();
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "1.0" }).setToken(process.env.token);

try {
  rest.put(Routes.applicationCommand("1", "1"), { body: commands });
} catch (error) {
  console.error(error);
}
