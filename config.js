module.exports = {
TOKEN: "MTAwOTA0MTYwMzcxMDY4OTMzMA.GhxdMc.3toxJ0t3On9NWiRG0BzHEnTjn5_F9Y7FQ8S65c",
ownerID: "434672453487296512", //write your discord user id.
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1009041603710689330&permissions=8&scope=bot%20applications.commands", //write your discord bot invite.
mongodbURL: "mongodb+srv://kaliroot61:ZQ6s9omZmG0mFJCn@cluster0.qzyos.mongodb.net/v13uptime?retryWrites=true&w=majority", //write your mongodb url.
status: '❤️ Developed by Reloading',
commandsDir: './commands', //Please don't touch
language: "tr", //en, tr
embedColor: "ffa954", //hex color code
errorLog: "960306239630356521", //write your discord error log channel id.
  
opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
},

voiceConfig: {
leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
autoSelfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 1000000, //1000 = 1 second
},

leaveOnTimer: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 1000000, //1000 = 1 second
}
},

maxVol: 150, //You can specify the maximum volume level.
loopMessage: false,

discordPlayer: {
ytdlOptions: {
quality: 'highestaudio', //Please don't touch
highWaterMark: 1 << 25 //Please don't touch
}
}
}
}

