const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.login(process.env.TOKEN);
