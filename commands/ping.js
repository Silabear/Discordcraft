module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        console.log("[COMMAND] +ping was used");
        message.channel.send(`Pong 🏓! Latency is ${Date.now() - message.createdTimestamp}ms`);
    }
}