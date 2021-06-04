const util = require('minecraft-server-util');

module.exports = {
	name: 'server',
	description: 'get mc server',
	execute(message, args, Discord) {
		console.log('[COMMAND] +server was used');
		if (!args[0])
			return message.channel.send('Please enter a Minecraft Server IP!');
			
		let port = parseInt(args[1])

		util
			.status(args[0], { port: port })
			.then(response => {
				console.log(response);
				const embed = new Discord.MessageEmbed()
					.setColor('#0000ff')
					.setTitle('__Server Info for ' + args[0] + '__')
					.addFields(
						{ name: 'Server IP:', value: response.host },
						{ name: 'Server Port:', value: response.port },
						{ name: 'Online Player Count:', value: response.onlinePlayers },
						{ name: 'Max Players:', value: response.onlinePlayers },
						{ name: 'Server Version:', value: response.version }
					);
				message.channel.send(embed);
			})
			.catch(error => {
				message.channel.send('Error while finding server!');
				throw error;
			});
	}
};
