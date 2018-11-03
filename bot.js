const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'كثرة الحاقدين تثير اعجابي .',
    application_id: '508057078401728522',
     assets: {
         large_image:   `508057243124760586`,
  
    }
  }
    });
  
});
client.login(process.env.BOT_TOKEN);
