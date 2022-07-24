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
               mention.roles.add("ID du rôle avec les perm. suivante : pas le droit de poster un message ni de créer des fils");
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
               mention.roles.remove("ID du rôle avec les perm. suivante : pas le droit de poster un message ni de créer des fils");
               message.reply(mention.displayName+  "a le droit de parler");
           }
       }
        
    }
});



client.login("your token bot");
