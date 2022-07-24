const Discord = require('discord.js');

const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES, //,
    //Discord.Intents.FLAGS.DIRECT_MESSAGES,
  ],
});
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

Client.on("ready", () => {
  console.log("bot opérationnel");
});

const prefix = "!"

client.on('messageCreate', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if(message.content.startsWith(prefix+"ban")){
          let mention = message.mentions.members.first();
          if(mention == undefined){
            message.reply("membre non trouvé");
          }
          else {
           
              if(mention.bannable){
                mention.ban();
                message.channel.send("bannissement éffectuer");
              }
              else {
                message.reply("impossible de ban");
              }
           }
       }
       ////////////////////////////////////////////////////////////////////////////////////////////////////////
       if(message.content.startsWith(prefix +"kick"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               if(mention.kickable)
               {
                  mention.kick();
                  message.channel.send("kick éffectuer");
               }
               else
               {
                   message.reply("impossible de kick");
               }
           }
       }  
       //////////////////////////////////////////////////////////////////////////////////////////////////////
       if(message.content.startsWith(prefix+"mute"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               mention.roles.add("1000796134027042898");
               message.reply(mention.displayName+"n'a plus le droit de parler");
           }
       }
       if(message.content.startsWith(prefix+"unmute"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               mention.roles.remove("1000796134027042898");
               message.reply(mention.displayName+  "a le droit de parler");
           }
       }
       if(message.content.startsWith(prefix +"play")){
        if(message.member.voice.channel)
        {
            message.member.voice.channel.joinable.then(connection =>{
              let arg = message.content.split(" ");
            if(!arg[1]){
                message.reply("Lien de la video manquant");
                connection.disconnect();
            }
            else{
            let dispatcher = connection.play(ytdl(arg[1],{quality:"highestaudio"}));
            dispatcher.on("finish",()=> {
                connection.disconnect();
                dispatcher.destroy();
            });
            dispatcher.on("error",err=>{
                console.log("erreur de dispatcher:"+err);
            });
        }
            }).catch(err=>{
                message.reply("Erreur lors de laconnexion :"+ err);
            });

        }
        else{
            message.reply("Vous n'etes pas connecté en vocal");
        }
    }
});



client.login("OTkwMzA3NTk5ODQ3MTQ1NDgy.GG4D45.Wuc_Htmb-gy5UHB0qCGbpnLauc6qKw60KRx7OM");