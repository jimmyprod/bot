const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

//Quand le bot ce lance
client.on("ready", () => {
  console.log("Je suis prêt !")
  client.user.setActivity("Vous aidez")
})
//Quand un membre rejoin
client.on('guildMemberAdd', function (member) {
  let embed = new Discord.RichEmbed()
      .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('577604604590817280').send(embed)
  member.addRole('577972770776809482')

})

// quand un membre quitte
client.on('guildMemberRemove', function (member) {
  let embed = new Discord.RichEmbed()
      .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('577974964393607198').send(embed)

})

//Commandes test bot
bot.on("message", message =>{
  if(message.content === '!help') {
    let embed = new Discord.RichEmbed()
    .setTitle('Voici la liste de toutes les commandes :')
    .setDescritpion('!help')
    .setFooter('Permet d afficher la liste des commandes')
  }
})
