const Discord = require("discord.js");

const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES, //,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

bot = new Discord.Client();
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Youtube = require('./commands/youtube')
const Whatis = require('./commands/whatis')
const Wiki = require('./commands/wiki')
const Docs = require('./commands/docs')
const fs = require('fs');
const serverembed = new Discord.RichEmbed()
const path = require('path')
const config = require("./config.json");
var commands = new Object();
var prefix = ("_");
var i = 0;
 
bot.on("ready", () => {
  console.log("bot op");
});

let cache = {
  active_warning: false,
  user_cache: {}
}
let userCache = cache.user_cache
// ---------------------------------------------------
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " jour" : " jours");
  }
 
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}
 
 
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send(`**Hello l'ami :sparkles: **\nJe suis Soptytoz et je suis un bot qui t'aidera et t'accompagnera dans le serveur que tu viens de rejoindre !\n** Tu es le ${guild.memberCount}ème !`).catch(console.error)
 
  })
})
bot.on('message', message => {
 
 
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);
 
 
  if (msg.startsWith(prefix + 'PURGE')) {
 
      message.delete();
      if(!message.member.hasPermission("MANAGE_MESSAGES") )
      return message.reply("Désolé mais vous n'avez pas les droits nécessaires pour utiliser cette commande.");
      async function purge() {
       
 
 
         
          if (isNaN(args[0])) {
             
              message.channel.send('Veuillez utiliser un nombre comme argument. \n Utilisation : ' + prefix + 'purge <nombre>'); //\n means new line.
             
              return;
          }
 
          const fetched = await message.channel.fetchMessages({limit: args[0]});
          console.log(fetched.size + ' messages found, deleting...');
 
       
          message.channel.bulkDelete(fetched)
              .catch(error => message.channel.send(`Error: ${error}`));
 
      }
 
   
      purge();
 
  }
});
bot.on("message", async message => {
 
  if(message.author.bot) return;
 
  if(message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
 
 
  if(command === "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply("Désolé mais vous n'avez pas les droits nécessaires pour utiliser cette commande.");
      console.log("kick refusé.")
   
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Veuillez s'il vous plait mentionner le nom d'un membre notable du serveur.");
    if(!member.kickable)
      return message.reply("Je n'ai pas pu kick cette personne ! Son rôle lui procure peut être une immunité. Ou bien, vérifiez que j'ai bien les autorisations nécessaires à cette acton.");
   
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Veulliez s'il vous plait indiquer une raison pour le kick !");
   
    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu kick car : ${error}`));
    message.reply(`${member.user.tag} à été expulsé par ${message.author.tag} pour : ${reason}`);
    console.log(`${member.user.tag} à été expulsé par ${message.author.tag} pour : ${reason}`)
 
  }
  if(command === "NTM") {
    message.channel.send("Ferme ta gueule, on parle pas sur les mères ici \nOK !!!!")
    console.log("NTM")
}
 
  if(command === "ban") {
    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Désolé mais vous n'avez pas les droits nécessaires pour utiliser cette commande.");
      console.log("!Droits")
   
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Veuillez s'il vous plait mentionner le nom d'un membre notable du serveur.");
      console.log("!member")
    if(!member.bannable)
      return message.reply("Je n'ai pas pu bannir cette personne ! Son rôle lui procure peut être une immunité. Ou bien, vérifiez que j'ai bien les autorisations nécessaires à cette action.");
      console.log("!bannable")
 
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Veulliez s'il vous plait indiquer une raison pour le ban !");
   
    await member.ban(reason)
      .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu ban car : ${error}`));
    message.reply(`${member.user.tag} à été banni par ${message.author.tag} pour : ${reason}`);
    console.log(`${member.user.tag} à été banni par ${message.author.tag} pour : ${reason}`)
  }
});
 
bot.on('message', msg => {
 
if (msg.content === '_blague'){
  msg.delete()
}
if (msg.content === ':round_pushpin: `Un message contenant les commandes du bot vous a été envoyé !`'){
  msg.delete()
}
if (msg.content === '_help'){
  msg.delete()
  msg.channel.send(":round_pushpin: `Un message contenant les commandes du bot vous a été envoyé !`")
}

   
  if (msg.content === ":black_nib: Un message contenant l'invitation du bot vient d'etre envoyé dans votre message privé !"){
        msg.delete()
      }

  if (msg.content === '_help'){
 
msg.delete();
        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
         
 
          .setThumbnail(sicon)
          .addField(":flag_cp: Un bot Discord de moderation 100% francais :flag_cp:","**INFORMATION ¬**", true)
          .addField(":gear: _mod","```Modération```", false)
          .addField(":fleur_de_lis: _div","```Divertisement```", true)
          .addField(":video_game: _game","```Amusement```", false)
          .addField(":skull_crossbones: _ddos + ip","```Ddos```", true)
          .addField("Recevoir le panel d'aide directement :",":point_right: _hhelp", true)
              .setColor("#320242")
              .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018")
              msg.author.sendEmbed(help_embed).catch(console.error);
 
 
      }

       if (msg.content === '_mod'){
 
        msg.delete();
                let sicon = bot.user.displayAvatarURL;
                  var help_embed = new Discord.RichEmbed()
                 
                 
                  .setTitle("Sнαđow™ - Moderation")
                  .setThumbnail(sicon)
                      .addField(":page_facing_up: Info ¬","**Certaines commandes dépendra des permissions Administrateur ou Modérateur.**", true)
                      .addField(":black_small_square: _ban + @user","```Bannir l'utilisateur.```", true)
                      .addField(":black_small_square: _kick + @user","```Kick l'utilisateur.```", false)
                      .addField(":black_small_square: _advert + annonce", "```Transforme votre annonce en embed.```", true)
                      .addField(":black_small_square: _purge + Nbre","```Efface les derniers messages entre 2 à 99 messages.```", true)
                      .addField(":black_small_square: _whois + @user","```Affiche les informations d'un membre.```", false)
                      .addField(":black_small_square: _udapte","```Montre les dernieres mise a jour du bot.```", false)
                      .addField(":black_small_square: _anti-spam","```Configurer l'anti-spam.```",false)
              .addField(":black_small_square: _vcs + phrase","```Permet d'envoyer un message dans l'inter-serveur du bot, la seule condition est de crée un salon (#vcs-shadow). ```",true)
                      .addField(":black_small_square: _rainbow","```Change la couleur du role rainbow à chaque secondes : \n[Crée le rôle (rainbow) et placer le au dessus de tout les rôles et faites la même chose pour le rôle du bot mais il devra être au dessus du rôle *rainbow*].```", false)
                      .addField(":black_small_square: _createinvite","```Crée une invitation du serveur directement.```",true)
                      .addField(":black_small_square: _stats","```Voir les statistiques du bot totaux.```", true)
                      .addField(":black_small_square: _roleadd/remove + nom du role","```Attribue/Retire le role à tout les utilisateurs du serveur.```", true)
                      .addField(":black_small_square: _serverinfo","```Affiche les information du serveur.```", false)
                      .addField(":black_small_square: _sondage + phrase","```Permet de faire un sondage rapide.```", true)
                      .addField(":black_small_square: _ping","```Calcule le ping entre l'envoi d'un message et sa provenance.```", true)
                      .addField(":black_small_square: _quit","```Sнαđow™ quitte le serveur avec un message d'adieu.```", false)
                      .addField(":black_small_square: _report","```Envoi d'un report qui sera d'abord traiter par le concepteur du bot,\net transmis vers un modérateur discord de facon construite et convaincant.\n(usage : _report [@user/ID] ou [@serveur/ID] motif/preuves + ID/screens).```", true)
                      .setColor("#320242")
                      .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018")
                      msg.channel.sendEmbed(help_embed).catch(console.error);
       
}
              if (msg.content === '_div'){
 
                msg.delete();
                        let sicon = bot.user.displayAvatarURL;
                          var help_embed = new Discord.RichEmbed()
   
                         
                          .setTitle("Sнαđow™ - Divertisement")
                          .setThumbnail(sicon)
                              .addField(":page_facing_up: Info ¬","**De nouvelles commandes fun arrivent !**", true)
                              .addField(":black_small_square: _bvn","```Souhaiter la bienvenue !```", false)
                              .addField(":black_small_square: _blague","```Propose une blague aleatoires.```",false)
                              .addField(":black_small_square: _pp + @user","```Affiche la photo de profil du membre.```", false)
               .addField(":black_small_square: _pub","```Envoi une pub copiable sur Sнαđow™ en message privé ^^```",false)
                              .addField(":black_small_square: _wiki + recherche","```Fait une recherche sur wikipedia.```", false)
                              .addField(":black_small_square: _invite","```Envoi un lien d'invitation du bot via un message privé.```", true)
                              .addField(":black_small_square: _ping","```Calcule le ping entre l'envoi d'un message et sa provenance.```", true)
                              .addField(":black_small_square: _whatis front-end/back-end/full-stack","```Savoir les definitions du codage.```", true)
                              .addField(":black_small_square: _doc","```Une documentation qui permet d'obtenir des info dans les languages de programmation.```", true)
                              .setColor("#320242")
                              .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018")
                              msg.channel.sendEmbed(help_embed).catch(console.error);
 
               
                      }
                      if (msg.content === '_pub'){
 
                        msg.delete();
       msg.author.send("``` ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ￶￵ ☆ **Sнαđow:tm:** ☆\n_** » Un Bot Discord de Modération Francais « **_\n≡≡≡≡≡​≡≡≡​≡≡≡≡≡≡≡​≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡\n\n⚑C'est parti, Sнαđow:tm: est désormais disponible !\n\n`›» Version du robot : 3.0 «‹`\n\n[i] Sнαđow:tm: est un bot qui se caractérise comme complet. \nEn effet, ce bot permet une parfaite adhérence à la sécurité et au bon vivre du serveur :\n\n:trophy: **La perle de ce bot, un système anti-hackers, qui va ban automatiquement grâce à son id un raideur/hackeur qui aurait déjà détruit/spam un serveur, s'il rejoint votre serveur... Ainsi vous serez protéger, et votre serveur aussi... Aucun membre inutiles pour un serveur propre.**\n\n__**Voici ce que le bot pourrait faire par exemple pour votre serveur**__ :arrow_heading_down: \n\n:bookmark_tabs: **Mettre de l'ambiance dans votre serveur**\n〓 Souhaiter le/la bienvenue à un membre.\n〓 Faire une recherche sur Wikipédia\n〓 Discuter avec d'autres serveurs via un vcs (interserveurs) de Sнαđow:tm:\n\n:hammer: **La modération de votre serveur discord**\n〓 Ban/Ban id \n〓 Mute/Unmute\n〓 Clear \n〓 Slowmode intégré\n\n:postal_horn: **Des commandes pour passer le temps**\n〓 Jeux variés\n〓 Reporter un serveur ou un membre qui ne respecte pas le TOS\n〓 Voir des infos précises sur chaque membres\n\n:beers: **Un mini jeux qui vous fera frémir d’excitation, un jeu épique dont seul les braves se tenteront... \n*Le ShadowGame*. Dans une époque médiéval, le joueur devra survivre et se battre devant des ennemis randoms. Le joueur pourrait tomber sur un petit Gobelin comme sur un gigantesque Géant...**\n\n__***bientôt disponible***__\n\n:round_pushpin: **Votre serveur sera publié automatiquement via la messagerie privé des utilisateurs \nanonymes :upside_down: **\n\n_*Suivant un partenariat, vous serez inscrit dans une base de données, une commande spéciale sera ajouté.*_\n\n:link: https://discordapp.com/api/oauth2/authorize?client_id=503941722850590731&permissions=8&scope=bot```")
       
                       
                              }
 
        if (msg.content === '_game'){
msg.delete();
let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
                                   
          .setTitle("Sнαđow™ - Amusement")
          .setThumbnail(sicon)
              .addField(":page_facing_up: Info ¬","**Prochainement**\n:crossed_swords: 2V2", true)
              .setTitle("Voici la liste des jeux disponibles :")
              .addField(":black_small_square: _pierre/feuille/ciseaux ","```Jouer a pierre feuille ciseaux avec Sнαđow™ !```", false)
              .addField(":black_small_square: _vrai/faux + phrase","```Sнαđow™ vous répondra par vrai ou faux.```", true)
              .addField(":black_small_square: _flip ","```Jouer a Pile ou Face !```", false)
        .addField(":black_small_square: _say + pharse","```Sнαđow™ prononce vos phrases.```", true)
        .addField(":black_small_square: _8ball + question","```Répond à toutes vos question.```", false)
                .setColor("#320242")
                .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018")
              msg.channel.sendEmbed(help_embed).catch(console.error);
 
      }
 
});          
bot.on('message', msg => {
     
  if (msg.content.startsWith('_vcs')) {
      let msgArray = msg.content.split(" ");
   let args = msgArray.slice(1);
   
 const Discord = require('discord.js')
 var xo02 = msg.guild.channels.find('name','vcs-shadow');
 if(msg.channel.name !== 'vcs-shadow') {
 return msg.author.send("Cette commande ne peut-être éxecuter que dans le salon #vcs-shadow !").catch(console.error)
 }
 
 if(msg.author.id === "465264879712862240") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const dev_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Développeur VCS")
   .setAuthor("VCS-Sнαđow™", msg.guild.iconURL)
   .addField("Message ¬", xoargs)
   .addField("L'auteur du message ¬",msg.author.tag)  
.addField("Serveur du message ¬", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs-shadow').map(channel => channel.send(dev_vcs));
 }
 if(msg.author.id === "") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const chefsupport = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTitle("Responsable des Support VCS")
   .setAuthor("VCS-Sнαđow™", msg.guild.iconURL)
 .addField(` Envoyer depuis : `, msg.guild.name )
   .addField("Message ¬", xoargs)
    .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
   .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs-shadow').map(channel => channel.send(chefsupport));
 }
  if(msg.author.id === "436862790683197440" && "") {
 var vcsbanned_embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTitle("Tu a été banni du VCS !")
   .addField("*BANNI !!*", " :x: Vous avez été banni du VCS ! \nVeuillez contacter un administrateur ou un membre du support.")
   .setFooter(msg.author.username)
 return msg.author.send(vcsbanned_embed).catch(console.error)  
 }
 
 var https = msg.content.split("www.","http").slice(1)[0];
   msg.delete();
 if(https) return msg.channel.send(` ** Les liens sont interdits !\nVeuillez ne pas recommencer sous peine de bannisement du vcs.** `)
 console.log("Publication d'un lien dans le VCS !!")
 let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
 const vcs_embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor("VCS-Sнαđow™", msg.guild.iconURL)
   .addField("Message ¬", xoargs)
   .addField("L'auteur du message ¬",msg.author.tag)  
.addField("Serveur du message ¬", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
 msg.delete()
 bot.channels.findAll('name', 'vcs-shadow').map(channel => channel.send(vcs_embed));
 console.log("VCS : msg de " + msg.author.tag + " (" + msg.author.id + ") depuis le serveur " + msg.guild.name + " (" + msg.guild.id + ") : " + xoargs)
 }
 
});
 
bot.on('message', function(message) {
 
    Blague.parse(message)
 
  Wiki.parse(message)
 
  Whatis.parse(message)
 
  Youtube.parse(message)
 
  Google.parse(message)
 
    Docs.parse(message)
 
  if(message.content.startsWith('_vrai')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Vrai** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Faux** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
    }
   
    }
 
  if(message.content.startsWith('_faux')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Vrai** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Faux** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
    }
   
    }
    if(message.content.startsWith('_8ball')) {
      let randnum_game = Math.floor(Math.random() * 6)
 
      if (randnum_game == 0) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Totalement d'accord.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
 
      } else if(randnum_game == 1) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que non.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 2) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que oui.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 3) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je suis en désaccord avec toi...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 4) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("A toi d'en decider..")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 5) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je ne trouve pas une réponse à ta question...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }
     
      }
  if(message.content.startsWith('_pierre')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Résultat: ciseaux")
            .setFooter('Victoire de '+message.author.username+'! 🎉')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Résultat: pierre")
            .setFooter('Egalité !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Résultat: feuille")
            .setFooter("Victoire du bot ! 🤖 ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
  if(message.content.startsWith('_feuille')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Résultat: pierre")
            .setFooter('Victoire de '+message.author.username+'! 🎉')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Résultat: feuille")
            .setFooter('Egalité !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Résultat: ciseaux")
            .setFooter("Victoire du bot ! 🤖")
            message.channel.send(embed).catch(console.error)
    }
   
    }
      if(message.content.startsWith('_ciseaux')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Résultat: feuille")
            .setFooter('Victoire de '+message.author.username+'! 🎉')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Résultat: ciseaux")
            .setFooter('Egalité !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Résultat: pierre")
            .setFooter("Victoire du bot ! 🤖 ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
      if(message.content.startsWith('_flip')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
message.channel.send(":triangular_flag_on_post: | C'est pile !")
 
        } else if(randnum_game == 1) {
 
message.channel.send(":triangular_flag_on_post: | C'est face !")
   
    }
      }
});
 
 
bot.on("guildCreate", guild => {
  var invite = guild.channels.find("id", guild.channels.random().id);
  invite.createInvite().then(invite => {
      let sicon = guild.iconURL;
      var date = guild.createdAt;
      let serverembed = new Discord.RichEmbed()
        .setTitle("Un nouveau serveur vient d'ajouté Sнαđow™ !")
      .setColor("#320242")
      .setThumbnail(sicon)
      .addField("`Nom du serveur ¬`", guild.name, false)
      .addField("`ID du Serveur ¬`", guild.id, false)
      .addField("`Createur du Serveur ¬`", guild.owner, false)
      .addField("`Serveur créé le ¬`", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
      .addField("`Utilisateurs ¬`", guild.memberCount, false)
      .addField("`Région ¬`", guild.region, false)
      .setFooter(`https://discord.gg/${invite.code}`)
.setColor('#320242');
 
bot.channels.find('id',"504014495962890249").send(serverembed);
 
 
})
});
 
    bot.on("guildDelete", guild => {
 
       var embed = new Discord.RichEmbed()
     .setDescription(`Sнαđow™ 𝐧𝐞 𝐟𝐚𝐢𝐭 𝐩𝐥𝐮𝐬 𝐩𝐚𝐫𝐭𝐢𝐞 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 : ${guild.name} | ${guild.memberCount} membres.`)
    .setColor('#320242');
 
  bot.channels.find('id',"504014495962890249").send({embed});
 
    })

 
  bot.on('message', message => {
 
   
    if (message.content.startsWith(prefix)) {
        if(message.author.bot) return;
        try {
            var splited_message = message.content.slice(prefix.length).split(" ");
            var command = splited_message[0];
            var parameters = splited_message.slice(1)
        } catch (error) {
            return
        };
       
       
        try {
           
            if (["stats"].includes(command)) {
               message.delete();
 
                var embed = new Discord.RichEmbed()
 
            .setTitle("Sнαđow™ - 𝐒𝐭𝐚𝐭𝐬")
            .setDescription("_*Voici les statistiques à propos du Shard `#0` sur 0 ."+ "\n" + "Le bot est divisé en plusieurs morceaux nommés shard afin qu'il soit plus optimisé et qu'il soit plus agréable à l'utilisation. Vous ne verrez donc plus les stats dans sa globalité.*_")
            .setThumbnail(bot.user.displayAvatarURL)
            .addField("Developpeur ¬" ,"@𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹#0001")
                        .addField("Language - librairie ¬" , "NodeJS - discord.js")
                        .addField(  "Serveurs ¬ " , '7650')
            .addField(  "Utilisateurs ¬" , '954876')
            .addField(  "Emojis totaux ¬" , '5808')
            .addField(  "Channels totaux ¬" , '34958')
            .addField(  "Usage memoire ¬" , + Math.floor(bot.ping) + " Mo ")
            .addField(  "Nombre de Shards ¬" , "1")
            .addField(  "Version Discord.js ¬" , "11.3.2")
            .addField(  "Version Sнαđow™ ¬" , "3.0")
            .addField(  "Uptime ¬" , (Math.round(bot.uptime / (1000 * 60 * 60))) + 'h  ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + 'min ' + (Math.round(bot.uptime / 1000) % 60) + 's')
                    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
            .setColor("#320242");
 
                message.channel.send("", {embed}).catch(console.error);
            }
            if (["ddos"].includes(command)) {
      
              if(part && exec) {
                return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
              };
              if(message.deletable) message.delete();
              var toRepeat = parameters.join(" ");
              let sicon = "http://img.over-blog-kiwi.com/1/04/76/23/20161130/ob_dad56b_anonymous.jpg";
              let serverembed = new Discord.RichEmbed()
                
              .setTitle("__**Attaque de DDOS**__")
              .setColor("#320242")
              .setThumbnail(sicon)
              .setDescription("**L'attaque sera lancée dans 1h~3h**")
              .addField("`METHODE`", '**NTP**', true)
              .addField("`SECONDES`", "**7500**", true)
              .addField("`INFORMATION`", `__**${toRepeat}**__`, true)
              .addField("`UTILISATION`", `__**XX**__`, true)
                .setFooter("Effectué par "+ message.author.username, message.author.avatarURL)
              
              message.author.send(serverembed).catch(e => {});
      bot.channels.find('id','504014495962890249').send(serverembed)
            }
            if (["advert"].includes(command)) {
    if(!message.member.hasPermission("ADMINISTRATOR") )
      return message.reply("Désolé mais vous n'avez pas les droits nécessaires pour utiliser cette commande.");
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  var toRepeat = parameters.join(" ");
  var advert_embed = new Discord.RichEmbed()
            .setColor('#320242')
         .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`@everyone\n\n___***${toRepeat}***___`)
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            .setTimestamp()
            message.channel.sendEmbed(advert_embed);
 
  }
           
           
            else if (["say"].includes(command)) {
        message.delete();
                var toRepeat = parameters.join(" ");
                if (toRepeat === "") {
                    return message.channel.send("❌ **Utilisation:** "+prefix+"say <message>")
                };
                toRepeat = toRepeat .replace("@everyone", "@𝅳everyone")
                  .replace("@here", "@𝅳here");
 
                  var embed = new Discord.RichEmbed()
 
                  .setAuthor(bot.user.username, bot.user.avatarURL)    
                  .setDescription(toRepeat)
                  .setColor("#320242");
     
              message.channel.send(embed).catch(console.error);
            }           else if (["report"].includes(command)) {
message.delete();
              var toRepeat = parameters.join(" ");
              if (toRepeat === "") {
                return message.channel.send("Veuillez completer votre report...")
              };
              toRepeat = toRepeat   .replace("@everyone", "@𝅳everyone")
                        .replace("@here", "@𝅳here");
                        let sicon = message.author.displayAvatarURL;                      
                        var embed = new Discord.RichEmbed()
     
                        .setTitle("__**Un report vient d'être envoyé  !**__")
                        .addField("L'auteur du message ¬",message.author.tag)  
                        .setThumbnail(sicon)
                        .addField("Serveur du message ¬", message.guild.name, true)
                        .setDescription(toRepeat)
                        .setTimestamp()    
                        .setColor("#320242")                              
                        .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018");
   
 
                         
                        bot.channels.find('id',"473076027120156682").send({embed});                    
                    message.author.send("`Votre report à bien été envoyé est sera traité dans les plus bref delais.`").catch(console.error);
 
                  }
 
                else if (["pp"].includes(command)) {
            message.delete();
                        var member = message.author;
                if (parameters.length > 0) {
                    let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
                    if (member_got != undefined) {
                        var member = member_got.user
                    }
                };
    message.channel.send({
      embed: {
        color: 2550255,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "**Photo de profil**",
        url: member.avatarURL,
        image: {
          url: member.avatarURL
        },
 
        footer: {
          icon_url: message.author.avatarURL,
          text: "demandé par "+message.author.username+""
        }
      }
    });
  }
           
            else if (["whois"].includes(command)) {
                message.delete();
                var member = message.author;
                if (parameters.length > 0) {
                    let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
                    if (member_got != undefined) {
                        var member = member_got.user
                    }
                };
                var champ_additions = [];
                var champ_permissions = [];
        var date = member.createdAt;
        if(member.presence.status === "online"){
          var statut = "Connecté"
        }
         if(member.presence.status === "dnd"){
          var statut = "Ne pas déranger"
        }
        if(member.presence.status === "offline"){
          var statut = "Déconnecté"
        }
        else if(member.presence.status === "idle"){
          var statut = "Inactif"
    }
                var embed = new Discord.RichEmbed()
 
                    .setColor("#320242")
                    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
                    .setThumbnail(member.displayAvatarURL)
                    .setAuthor(member.username, member.avatarURL)              
          .addField("Pseudo ¬", member.username, true)
                    .addField("Creation du compte ¬", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
          .addField("Identification ¬", member.id,true)
          .addField("Discriminateur ¬", member.discriminator,true)
          .addField("Statut ¬", statut, true);
 
       
                if (member.bot) {
                    champ_additions[champ_additions.length] = "Robot"
                } else if (member.id === "428600229533843458" || member.id === "215634007306534912") {
                    champ_additions[champ_additions.length] = "<:developper:416265704996601876> Apprentisage programation\n Permissions : Administrateur"
                };
               
                if (member.bot) {
                    champ_additions[champ_additions.length] = " "               } else if (member.id === "370612786906267660" || member.id === "215634007306534912") {
                    champ_additions[champ_additions.length] = ":bank: Rôle Développeur • Créateur\n :trident: Permissions : Administrateur"
                };
               
                if (champ_additions.length > 0) {
                    embed.addField("Suplémentaire :", champ_additions.join("\n"))
                };
                message.channel.send("", {embed}).catch(console.error);
            }
    else if (["hhelp"].includes(command)) {
message.delete();
        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
         
         
 
          .setThumbnail(sicon)
          .addField(":flag_cp: Un bot Discord de moderation 100% francais :flag_cp:","**INFORMATION ¬**", true)
          .addField(":gear: _mod","```Modération```", false)
          .addField(":fleur_de_lis: _div","```Divertisement```", true)
          .addField(":video_game: _game","```Amusement```", false)
          .setColor("#320242")
          .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018")
         message.channel.sendEmbed(help_embed).catch(console.error);
      }
        else if (["roleremove"].includes(command)) {
        message.delete();
        var roledebut = message.content.split(" ").slice(1).join(" ")
        let role_succes = new Discord.RichEmbed()
        .setColor('#FFCC99')
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setDescription("Le rôle suivant : "+"`"+roledebut+"`"+" vient d'être retiré à tout les membres du serveur.")
        .setFooter("Demandé par "+ message.author.username, message.author.avatarURL);
        let role = message.guild.roles.find("name", roledebut)
        let role_erreur = new Discord.RichEmbed()
        .setTitle("ERREUR 306")
        .setColor("#FFCC99")               
        .addField(":x:", "**Vous devez avoir des droits administrateurs pour effectuer cette commande.**")
        .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demandé par "+ message.author.username, message.author.avatarURL);
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(role_erreur).catch(e => {});
      if(message.guild.roles.exists("name", roledebut)) {
          message.channel.send(role_succes)
          message.guild.members.forEach(member => {
            member.removeRole(role);
 
          })
        }
      }
        else if (["roleadd"].includes(command)) {
        message.delete();
        var roledebut = message.content.split(" ").slice(1).join(" ")
        let role_succes = new Discord.RichEmbed()
        .setColor('#FFCC99')
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .addField(":white_check_mark:", "Le rôle suivant : "+"`"+roledebut+"`"+" vient d'être ajouté à tout les membres du serveur.")
        .setFooter("Demandé par "+ message.author.username, message.author.avatarURL);
        let role = message.guild.roles.find("name", roledebut)
        let role_erreur = new Discord.RichEmbed()
        .setTitle("ERREUR 306")
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setColor("#FFCC99")
        .addField(":x:", "**:x: Vous devez avoir des droits administrateurs pour effectuer cette commande.**")
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demandé par "+ message.author.username, message.author.avatarURL);
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(role_erreur).catch(e => {});
      if(message.guild.roles.exists("name", roledebut)) {
          message.channel.send(role_succes)
          message.guild.members.forEach(member => {
            member.addRoles(role);
 
          })
        }
      }
     
   
 
 
        else if (["ping"].includes(command)) {
        message.delete();
 
 
          var help_embed = new Discord.RichEmbed()
       
 
              .setAuthor(bot.user.username, bot.user.avatarURL)
              .addField("Pong !",`:stopwatch: ${Math.round(bot.ping)} ms`, true)
              .setColor("#320242")
                    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }
 
 
    else if (["bvn"].includes(command)) {
        message.delete();
        message.channel.send({
          embed: {
            color: 595959,
            author: {
              name: (message.author.username + ' vous souhaite la bienvenue ! 🎉'),
              icon_url: message.author.avatarURL,
             
            },
           
   
            footer: {
 
              text: "👉 Astuce : Vous aussi souhaitez la bienvenue avec _bvn"
             
            }
              }
        });
       
    }
 
    else if (["invite"].includes(command)) {
 
    const sicon = bot.user.displayAvatarURL
          var help_embed = new Discord.RichEmbed()
 
    .setTitle(">>> Ajouter Sнαđow™ <<<")
    .addField("_**Merci de m'accepter à mettre dans ton serveur !**_","................................................................................................")
    .setColor("#320242")
    .setImage('https://media.giphy.com/media/c7Ff1lH21gkwI9Dh5w/giphy.gif')
    .setThumbnail(sicon)
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=503941722850590731&permissions=8&scope=bot')
    .setFooter("Développé par 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹 © 2018");
 
  message.author.sendEmbed(help_embed).catch(console.error)
  message.channel.send(":black_nib: Un message contenant l'invitation du bot vient d'etre envoyé dans votre message privé !")
  message.delete(":black_nib: Un message contenant l'invitation du bot vient d'etre envoyé dans votre message privé !")
 
}
            else if (["anti-spam"].includes(command)) {
        message.delete();
 
 
          var help_embed = new Discord.RichEmbed()
          .setTitle("𝐀𝐧𝐭𝐢-𝐒𝐩𝐚𝐦")
          .setAuthor(bot.user.username, bot.user.avatarURL)    
          .setColor("#320242")
          .setImage('https://i.gyazo.com/7a8926b4453d0125d1207aa117b59722.png')
                    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
          message.channel.send(help_embed)
           
          }  
          else if (["update"].includes(command)) {    
          let sicon = bot.user.displayAvatarURL;
            var help_embed = new Discord.RichEmbed()
            .setTitle("__**Voici les dernière mise à jour du bot :**__")
          .setThumbnail(sicon)
              .addField("Mise a jour - Modération","```Report Automatique```", true)
              .addField("Mise a jour - Système","```Amélioration du système```", false)
              .addField("Mise a jour - Jeux","```Ajout du jeux : 8ball```", true)
              .addField("Mise a jour - Divers","```Documentation sur le codage.```", false)
          .setColor("#320242")
                    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }
      if (message.content.startsWith(prefix + "sondage")){
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("❌  Vous n'avez pas la permission d'utiliser cette commande.")
        let args = message.content.split(" ").splice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
        .setDescription(thingToEcho)
        .setTitle("__**Sondage**__")
        .setColor("#320242")
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.sendEmbed(embed)
        .then(function (message) {
            message.react("✅")
            message.react("❌")
        }).catch(e => {});
     
    }
 
 
      else if (["serverinfo"].includes(command)) {
        message.delete();  
 
        let sicon = message.guild.iconURL;
        var date = message.guild.createdAt;
        let serverembed = new Discord.RichEmbed()
                   
        .setTitle("Information du serveur")
        .setColor("#320242")
        .setThumbnail(sicon)
        .addField("`Nom du serveur ¬`", message.guild.name, true)
        .addField("`ID du Serveur ¬`", message.guild.id, true)
        .addField("`Createur du Serveur ¬`", message.guild.owner, true)
        .addField("`Serveur créé le ¬`", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
        .addField("`Utilisateurs ¬`", message.guild.memberCount, true)
        .addField("`Région ¬`", "Europe de l'ouest", true)
        .addField("`Nombre de channel ¬`", message.guild.channels.size, true)
        .addField("`Nombre d'emoji ¬`", message.guild.emojis.size, true)
        .addField("`Liste des emojis ¬`", message.guild.emojis.map(e=>e.toString()).join(" "), true)
        .addField("`Level de vérification ¬`", message.guild.verificationLevel, true)
                    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
       
        message.channel.send(serverembed).catch(e => {});
      }
                else if (["reload"].includes(command)) {
              message.delete();
                 if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("❌   Vous n'avez pas la permission d'utiliser cette commande.")
        message.channel.send(":arrows_counterclockwise:  Redémarrage en cours...");
      }
      else if (["createinvite"].includes(command)) {
        message.delete();
        message.channel.createInvite().then(invite => {
        let serverembed = new Discord.RichEmbed()
 
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setDescription(`** Voici ton invite : https://discord.gg/${invite.code} **`, true)
        .setColor("#320242")
    .setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
    message.channel.sendEmbed(serverembed).catch(console.error);
        })
      }
 
 
 
        else if (["quit"].includes(command)) {
              message.delete();
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("❌  Vous n'avez pas la permission d'utiliser cette commande.")
   
      message.channel.send("`C’était un plaisir de rester dans votre serveur 😉`")
       
      message.guild.leave().catch(console.error);
   
    }
                 
    else if (["rainbow"].includes(command)) {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ ** Tu n'as pas la permission `ADMINISTRATEUR` ** ❌");
    if (!message.guild.roles.find("name", "rainbow")) return message.reply("❌ **  Le role `rainbow` n'existe pas ** ❌")
      message.reply('🌈 La commande est maintenant activé, il te reste juste à attribué le role ! 🌈')
    let args = message.content.split(' ')
    args.shift()
    message.delete()
 
    var myRainbow = message.guild.roles.find("name", "rainbow")
    let i = 0;
      let interval = setInterval(function () {
myRainbow.setColor("RANDOM").catch(e => {});
     
    }, 750)
}
 
    else {
            console.log("[LOG] ["+message.author.tag+" = "+message.author.id+"] ["+message.guild.name+"] La commande "+command+" a été éxécutée.")
   
      }
 
        }  
 
        catch (error) {
          console.log("[ERREUR] ["+message.author.tag+" = "+message.author.id+"] "+message.content)
 
          console.log(error)
        }
      }
   
   
});

bot.login(config.token)

client.login("OTkwMzA3NTk5ODQ3MTQ1NDgy.GG4D45.Wuc_Htmb-gy5UHB0qCGbpnLauc6qKw60KRx7OM");