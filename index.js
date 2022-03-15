/*================================== |conts|===========================================*/
const express = require("express"); const app = express(); app.get("/", (request, response) => { const ping = new Date(); ping.setHours(ping.getHours() - 3); console.log(`[LOGS] Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`); response.sendStatus(200); }); app.listen(process.env.PORT); // Recebe solicitações que o deixa online
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const config = require("./config.json");
const db = require("quick.db")
const Canvas = require('canvas')
const ms = require("ms");

client.login(process.env.token);

/*============================= |ONLINE CONSOLE | =========================================*/
const	
bright = "\x1b[1m",
blink = "\x1b[5m",
preto = "\x1b[30m",
vermelho = "\x1b[31m",
verde = "\x1b[32m",
amarelo = "\x1b[33m",
azul = "\x1b[34m",
roxo = "\x1b[35m",
ciano = "\x1b[36m",
branco = "\x1b[37m",

//CORES EM BG
BGpreto = "\x1b[40m",
BGvermelho = "\x1b[41m",
BGgreen = "\x1b[42m",
BGyellow = "\x1b[43m",
BGblue = "\x1b[44m",
BGmagenta = "\x1b[45m",
BGcyan = "\x1b[46m",
BGwhite = "\x1b[47m"

/*======================== |CONSOLE LOG COLORIDO||=========================================*/
const cfonts = require('cfonts');
	const banner = cfonts.render((`ONLINE`), {
		font: 'block',
		color: 'candy',
		align: 'left',
		gradient: ["red","magenta"],
		lineHeight: 3
	});	

console.log(banner.string);

colorful = (color, string, reset = '\x1b[5m') => color + string + reset;
client.once("ready", (member) => {
  client.user.setActivity("Estou Online", {
	
  });
  console.log(colorful(BGcyan, `[LOGS] ${client.user.tag} Está online! `)),
	console.log(colorful(BGgreen, `[LOGS] Estou em ${client.guilds.cache.size} servidores.`)), 
	console.log(colorful(BGmagenta, `[LOGS] Cuidando de ${client.users.cache.size} membros.`))
	
/*======================== |LOG BOT ON DISCORD CANAL||=========================================*/
	const channel = "iddocanal discord"
	const ping = new Date();ping.setHours(ping.getHours() - 3);
	const emoji = "idemoji" // 
	let bot = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} ACABOU DE INICIAR!`)
    .setColor("#52b69a")
		.addFields(
					{ name: '\u200B', value: '\u200B' },
		{ name: '🔎 STATUS', value: ` \`✅ ONLINE\` ` , inline: true },
		{ name: '🔎 PING A CADA', value: `${emoji} \`5 SEG\` `, inline: true },
	 	{ name: '🔎 HORA DE INICIO ', value: `${emoji} \`${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}\` `, inline: true },

	)
    member.channels.cache.get(channel).send({ embeds: [bot] })
});

/*=============================== |BOT ON| ============================================*/
client.on("ready",async (client) => {
    let STATUSES = [`ONLINEEE`,
    `@R O BRABO`,
    `channels ${client.channels.cache.size}`,
    `DIGITE .HELP`,
    `@R CRIADO`]
    let index = 0
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * (STATUSES.length - 1) + 1);
      const newActivity = STATUSES[randomIndex];
      client.user.setPresence({
        activities: [{
            name: `${newActivity}`,
            type: "STREAMING",
            url: `https://www.youtube.com/watch?v=sWDWi3OHWQ8&list=RDsWDWi3OHWQ8&start_radio=1`
        }], 
        status: "online",
      }) 
    }, 5000)
    

}
    
);

/*============================= |pasta de comando| ===================================*/
client.on('messageCreate', message => {

  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Erro:' + err);
try {
    command.run(client, message, args);
}
catch(err) {
    console.log('Deu algo erro ', err);
}
  }
});
=
/*========================== | ANTI CRASH  | =======================================*/
process.on('unhandledRejection', (reason, p) => {
    console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(' [ ANTICLASH] | CATCH ERROR');
    console.log(err, origin);
}) ;
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(' [ ANTICLASH ] | BLOQUEADO');
    console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
    console.log(' [ ANTICLASH ] | VÁRIOS ERROS');
    console.log(type, promise, reason);
})
