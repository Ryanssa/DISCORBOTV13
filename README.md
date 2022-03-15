## CASO DE ERROS SIGA OS PASSOS ABAIXO
###### EM SHELL ESCREVA

###### PASSO 1 `npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH`
###### PASSO 2 `rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i`

###### CRIE UM ARQUIVO COM O NOME DE
####  .replit 

###### DENTRO ESCREVA 
`.replit: run = "npm start"`

### DENTRO DE `package.json`
### MUDE O 
###### "scripts": {
######    "test": "echo \"Error: no test specified\" && exit 1"
######  },

### PARA
###### "scripts": {
######     "start": "node .",
######     "test": "echo \"Error: no test specified\" && exit 1"
###### },`

## ESCREVA EM SHELL 
# `NODE - V` 
#### PARA VER AVERSÃO DO SEU BOT


## ==================================
### "perms": {
      "ADMINISTRATOR": "Administrador",
      "CREATE_INSTANT_INVITE": "Criar convite instantâneo",
      "KICK_MEMBERS": "Expulsar membros",
      "BAN_MEMBERS": "Banir membros",
      "MANAGE_CHANNELS": "Gerenciar canais",
      "MANAGE_GUILD": "Gerenciar servidor",
      "ADD_REACTIONS": "Adicionar reações",
      "VIEW_AUDIT_LOG": "Ver logs de auditoria",
      "PRIORITY_SPEAKER": "Voz com prioridade",
      "STREAM": "Transmitir",
      "VIEW_CHANNEL": "Ver canal",
      "SEND_MESSAGES": "Enviar mensagens",
      "SEND_TTS_MESSAGES": "Enviar mensagens TTS",
      "MANAGE_MESSAGES": "Gerenciar mensagens",
      "EMBED_LINKS": "Prévia de links",
      "ATTACH_FILES": "Anexar arquivos",
      "READ_MESSAGE_HISTORY": "Ler histórico de mensagens",
      "MENTION_EVERYONE": "Mencionar everyone",
      "USE_EXTERNAL_EMOJIS": "Usar emojis externos",
      "VIEW_GUILD_INSIGHTS": "Ver estatísticas do servidor",
      "CONNECT": "Conectar",
      "SPEAK": "Falar",
      "MUTE_MEMBERS": "Silenciar membros",
      "DEAFEN_MEMBERS": "Ensurdecer membros",
      "MOVE_MEMBERS": "Mover membros",
      "USE_VAD": "Usar detecção de voz",
      "CHANGE_NICKNAME": "Mudar Apelido",
      "MANAGE_NICKNAMES": "Gerenciar apelidos",
      "MANAGE_ROLES": "Gerenciar cargos",
      "MANAGE_WEBHOOKS": "Gerenciar webhooks",
      "MANAGE_EMOJIS": "Gerenciar emojis"  

## ==================================
### Mostra a quantidade de boosts no servidor
${message.guild.premiumSubscriptionCount || '0'} 

### Mostra a quantidade de canais de VOZ no servidor: 
${channels.filter(channel => channel.type === 'voice').size}

### Mostra a quantidade de canais de TEXTO  no servidor: 
${channels.filter(channel => channel.type === 'text').size}

### Mostra a data que o servidor foi criado:
${message.guild.createdAt.toString().substr(0, 15)}

### Mostra a quantos dias atrás o servidor foi criado:
${checkDays(message.guild.createdAt)}

### Mostra o id do servidor:
${message.guild.id}

### Mostra APENAS o nome do criador do servidor:
${message.guild.owner.user.username}

### Mostra APENAS a tag do criador do servidor:
{message.guild.owner.user.discriminator}

### Mostra a região do servidor (precisa ser configurado antes):
[message.guild.region]

### Mostra a quantidade TOTAL de membros no servidor:
${message.guild.memberCount}

### Mostra a quantidade de membros HUMANOS no servidor:
{message.guild.members.cache.filter(m => !m.user.bot).size}

### Mostra a quantidade de BOTS no servidor:
${message.guild.members.cache.filter(m => m.user.bot).size}

### Mostra o tempo de afk do servidor:
${message.guild.afkTimeout}

### Mostra a quantidade de cargos no servidor:
${message.guild.roles.cache.size}    

### Mostra a quantidade TOTAL de emojis no servidor:
${message.guild.emojis.cache.size}

### Mostra o nível de verificação do servidor:
${message.guild.verificationLevel}
	 
