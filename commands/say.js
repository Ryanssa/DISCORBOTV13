const Discord = require ("discord.js");

module.exports = {
    name: "Say",
    author:"Rayan, O Morgan",

    run: async(client, message, args) => {

    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Você não mencionou um canal! \nEXP:**Say #channel texto**');   

    const mensagem =  args.slice(1).join(' ');
    if (!mensagem) return message.reply("Defina uma mensagem para ser enviada! :)");

    channel.send(mensagem);
    message.delete();
    }
}