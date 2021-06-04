module.exports = {
  name: "help",
  description: "list commands",
  execute(message, args, Discord) {
    console.log("[COMMAND] +help was used");
    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle("__Discordcraft Help__")
      .setDescription("*Prefix is `mc:` | <###> means required*")
      .addFields(
        { name: "help", value: "Displays this list" },
        { name: "ping", value: "Get Bot Ping" },
        { name: "server <server ip> <port>", value: "Get server info" },
        { name: "block <block id>", value: "Get block info" },
        { name: "item <item id>", value: "Get item info" },
      );
    message.channel.send(helpEmbed);
  }
};
