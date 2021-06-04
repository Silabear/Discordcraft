const mc = require("minecraft-data")("1.16.5");

module.exports = {
  name: "item",
  description: "get mc item",
  execute(message, args, Discord) {
    console.log("[COMMAND] +item was used");
    if(!args[0]) return message.channel.send("Please specify an item!");
    const output = mc.itemsByName[args[0]];
    console.log(output);
    const embed = new Discord.MessageEmbed()
      .setColor("#0000ff")
      .setTitle("__Item Info for " + output.displayName + "__")
      .addFields(
        { name: "Name:", value: output.displayName },
        { name: "Size of Stack:", value: output.stackSize },
        { name: "Item ID:", value: output.id },
      );
    message.channel.send(embed);
  }
};
