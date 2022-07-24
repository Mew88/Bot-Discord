const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Whatis extends Command {

	static match(message) {
		let content = message.content.toLowerCase();
		return content.startsWith('_whatis')
	}

	static action(message) {
		let content = message.content.toLowerCase();
		if (content.startsWith('_whatis front-end')) {
			message.delete();

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("**Signification du mot front-end**", "_*Lorsque que l'on parle de front-end, il s'agit de la partie vue d'un site web, les élements que l'on voit a l'écran et sur qui l'on peut interagir, ex de languages front-end: HTML, CSS ou JavaScript.*_")
		.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
		message.channel.send(embed)

		} else if(content.startsWith('_whatis back-end')) {
			message.delete();

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("**Signification du mot back-end**", "_*Le back-End, c'est un peu comme la partie immergée de l'iceberg.\nElle est invisible pour les visiteurs mais représente une grande partie du développement d'un projet web. Sans elle, le site web reste une coquille vide.*_")
		.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
		message.channel.send(embed)

		} else if(content.startsWith('_whatis full-stack')) {
			message.delete();

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("**Signification du mot full-stack**", "_*On parle plus du metier de dev full-stack mais ca peut aussi etre un language comme JavaScript, donc full-stack c'est un peu front-end et back-end réunis mais aussi la structure de ton projet web en gros le dev full-stack gere tout le site web.\nPourquoi j'ai cité JavaScript ?\n Parce que c'était un language front-end de base mais avec Node.js, on peut coder coté serveur en js donc en back-end.*_")
			.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
			message.channel.send(embed)

		}
	}
}
