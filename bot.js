const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'كن من تكون ف انى لا أرى أحد.',
    application_id: '508226972825157632',
     assets: {
         large_image:   `508228544422477862`,
  
    }
  }
    });
  
});
client.login(process.env.BOT_TOKEN);
