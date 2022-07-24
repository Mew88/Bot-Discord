const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Docs extends Command {

	static match(message) {
		return message.content.startsWith('_doc')
	}

	static action(message) {
		if (message.content === '_doc') {
			message.delete();

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.addField("Voir et consulter les docs des langages ci-dessous", "- _doc -php\n- _doc -js\n- _doc -html/css\n-_doc -python")
			.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)		
			message.channel.send(embed).catch(console.error)

		} else if (message.content.startsWith('_doc -php')) {
			message.delete();

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.addField("__**Voici le(s) meilleur(s) documentations pour le langage php**__", "PHP.net => http://php.net/manual/fr/")
			.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)	
			message.channel.send(embed).catch(console.error)

		} else if (message.content.startsWith('_doc -js')) {
			message.delete();

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.addField("__**Voici le(s) meilleur(s) documentations pour le langage js**__", "MDN Web Docs => https://developer.mozilla.org/fr/docs/Web/JavaScript\nDevDocs.io JS => http://devdocs.io/javascript/")
			.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
			message.channel.send(embed).catch(console.error)

		} else if (message.content.startsWith('_doc -html/css')) {
			message.delete();

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.addField("__**Voici le(s) meilleur(s) documentations pour les langages html et css**__", "DevDocs.io \n (HTML) http://devdocs.io/html/\n (CSS) http://devdocs.io/html/")
			.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
			message.channel.send(embed).catch(console.error)

		} else if(message.content.startsWith('_doc -python')) {
			message.delete();
		
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.addField("__**Voici le(s) meilleur(s) documentations pour le langage python**__", "Docs.python.org => https://docs.python.org/3.6/tutorial/index.html \n DevDocs.io => http://devdocs.io/python~3.6/")
			.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
			message.channel.send(embed).catch(console.error)
	
		}

	}
}
