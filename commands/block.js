const mc = require("minecraft-data")("1.16.5");

module.exports = {
  name: "block",
  description: "get mc block",
  execute(message, args, Discord) {
    console.log("[COMMAND] +block was used");
    if (!args[0]) return message.channel.send("Please specify a block!");
    const output = mc.blocksByName[args[0]];
    console.log(output)
    message.channel.send(output)
    if (output === undefined)
      return message.channel.send("No block exists for " + args[0]);
    const embed = new Discord.MessageEmbed()
      .setColor("#0000ff")
      .setTitle("__Block Info for " + output.displayName + "__")
      .addFields(
        { name: "Name:", value: output.displayName },
        { name: "Size of Stack:", value: output.stackSize },
        { name: "Material:", value: output.material },
        { name: "Transparent:", value: output.transparent },
        { name: "Light Level:", value: output.emitLight },
        { name: "ID:", value: output.id }
      );
    message.channel.send(embed);
  }
};
