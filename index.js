import { Bot } from "grammy";

import { composer } from "./bot.js";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("6401710581:AAGjWL9aat2cEa2vihmfDbDzLR5ShimsFbs"); // <-- put your bot token between the ""

bot.use(composer);

// Start the bot.
bot.start();
