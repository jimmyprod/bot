const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.login(process.env.TOKEN);
var prefix = ("!");
client.on('guildMemberAdd', function (member) {
  let embed = new Discord.RichEmbed()
      .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('577602282120806407').send(embed)
  member.addRole('577972770776809482')
})

client.on('guildMemberRemove', function (member) {
  let embed = new Discord.RichEmbed()
      .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('577974964393607198').send(embed)
})
  if (MessageChannel.content.includes("!help")){
var help_embed = new Discord.RichEmbed()
.setTitle("HELP")
.setColor("#02FB24")
.setDescription(":robot: Voici les commandes du bot :")
.addField("Citoyen(ne)", "!help")
message.channel.send(help_embed)
}
