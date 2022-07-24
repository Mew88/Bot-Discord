const Discord = require('discord.js');
const Command = require('./command')

module.exports = class Blague extends Command {



	static match(message) {
		return message.content.startsWith('_blague')
	}

	static action(message) {

		let randnum = Math.floor(Math.random() * 29)

		if (randnum == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Quand est ce que Windows ne bug pas ? \n Quand l\'ordinateur est éteint.')
			.setFooter("Les meilleurs blagues de Soptytoz")
		    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('De quelle couleur sont tes yeux ? ;) \n #1292f4 et toi ? :smiley:')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Que dit une mère à son fils geek quand le diner est servi ? \n Alt Tab !!!')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 3) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('De nos jours, le zip ça devient rar...')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 4) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Comment un informaticien répare sa voiture quand elle est en panne ? \n Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et la redémarre.')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 5) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Un geek ne descend pas du métro\n Il libère la RAM...')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 6) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('A quoi sert Internet Explorer ? \n à télécharger Google Chrome.')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 7) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Un geek sait compter jusqu\'a 403 après pour lui c\'est introuvable')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 8) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Quand quelqu\'un de triste joue aux jeux vidéo pour oublier, on peut dire qu\'il se console...')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)

		} else if(randnum == 9) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Les filles c\'est comme les noms de domaine. \n Celles que j\'aime sont déjà prises. :sob:')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		
		} else if(randnum == 10) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Pk les belugas sont t'il en voit de disparition ?. \n Parce que y'a pas assez de belufille :sob:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		
	} else if(randnum == 11) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Comment appelle t'on une fille qui suce pas? \n On l'appel pas :kissing_smiling_eyes:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		
} else if(randnum == 12) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Que dit un chat qui rentre dans une pharmacie ? \n Vous avez du sirop pour matou ? :cat:')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		
} else if(randnum == 13) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Comment s'appelle le dinosaures gay ? \n Le tripotanus :stuck_out_tongue_closed_eyes:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		
} else if(randnum == 14) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Qu'est-ce qui est mou et qui ce jette ? \n Un paraplégique :no_mouth: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		} else if(randnum == 15) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Pk les mexicains mangent t'il au toilettes ? \n Parce qu'ils aime mangé et pissé :laughing: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 16) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Quel est le point commun entre un tampon et téléphone ? \n On sait qui est au bout du fil :wink:')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 17) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Un électricien est mort \n On va mettre sa famille au courant ! :zap:')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 18) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("C'est 2 chinois qui joue au bowling y'en n'a un qui fait un strike \n et son pote lui dit `c'est beau ling` :laughing: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 19) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription('Quel est le poisson le moins lourd de la mer ? \n La palourde :sob:')
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 20) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Quel est la différence entre la sodomie et les brocoli ? \n Y'en n'a pas même avec du beurres les enfants aime pas sa ::slight_smile: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 21) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Qu'est-ce qu'un hamster dans l'espace ? \n Un hamsteroide :sob:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 22) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Comment on n'appelle un nain qui travail à la poste? \n Un nain posteur :sob:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 23) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Pourquoi les policiers n'ont pas de rides ? \n Parce qu'ils ont la peau lisse :slight_smile: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 24) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("C'est 2 fou qui marche dans la rue t'en n'a il ce baisse il ramasse une merde et dit à l'autre ptn regarde dans quoi j'ai failli marché :laughing: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
		message.channel.sendEmbed(embed)
				}else if(randnum == 25) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Tu savais que l'iPhone X ce plie? \n nn prq ? \n parce que l'apple store :smirk:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
			}else if(randnum == 26) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Que fait un zoophiles qui veut sauté ? \n Bah il prend son élan :upside_down: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
			}else if(randnum == 27) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Pk le film Harry Potter est classé fantastique ? \n Parce que le roux à des amis :upside_down: ")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
		}else if(randnum == 28) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Comment appele t'on un grand rouquin ? \n Un coton tige usagé :sob:")
			.setFooter("Les meilleurs blagues de Soptytoz")
					    .setAuthor(bot.user.username, bot.user.avatarURL);
			message.channel.sendEmbed(embed)
	}

	}

}
