
const token = process.env['TOKEN']
const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "mc:";

const fs = require("fs");

client.commands = new Discord.Collection();

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

const commandFiles = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("[INFO] DiscordCraft is online!");
  console.log("[DEBUG] Current Date in MS is: " + Date.now())
    setInterval(() => {
    const statuses = [
      'creepers exploding',
      'players mining',
      'skeletons spawning',
      'mc:help for commands!',
      'mc:help for commands!',
    ]
    
    const status = statuses[Math.floor(Math.random()  * statuses.length)]
    client.user.setActivity(status, { type: 'WATCHING'})
  }, 5000)
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args, Discord);
  }
  if (command === "help") {
    client.commands.get("help").execute(message, args, Discord);
  }
  if (command === "server") {
    client.commands.get("server").execute(message, args, Discord);
  }
  if (command === "block") {
    client.commands.get("block").execute(message, args, Discord);
  }
  if (command === "item") {
    client.commands.get("item").execute(message, args, Discord);
  }
  if (command === "test") {
    client.commands.get("test").execute(message, args, Discord);
  }

});

client.login(token).catch();
