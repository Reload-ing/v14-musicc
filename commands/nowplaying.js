const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
name: "nowplaying",
description: "Provides information about the music being played.",
permissions: "0x0000000000000800",
options: [],
run: async (client, interaction) => {
let lang = await db?.musicbot?.findOne({ guildID: interaction.guild.id })
lang = lang?.language || client.language
lang = require(`../languages/${lang}.js`);

try {

    const queue = client.player.getQueue(interaction.guild.id);

if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })

const track = queue.current;

const embed = new EmbedBuilder();
embed.setColor(client.config.embedColor);
embed.setThumbnail(track.thumbnail);
embed.setTitle(track.title)

const methods = ['disabled', 'track', 'queue'];

const timestamp = queue.getPlayerTimestamp();
const trackDuration = timestamp.progress == 'Forever' ? 'Endless (Live)' : track.duration;

embed.setDescription(`Audio **%${queue.volume}**\nDuration **${trackDuration}**\nURL: ${track.url}\nLoop Mode **${methods[queue.repeatMode]}**\n${track.requestedBy}`);

embed.setTimestamp();
embed.setFooter({ text: `Developed by Reloading` })

const saveButton = new ButtonBuilder();
saveButton.setLabel(lang.msg47);
saveButton.setCustomId('saveTrack');
saveButton.setStyle(ButtonStyle.Success);

const row = new ActionRowBuilder().addComponents(saveButton);

interaction.reply({ embeds: [embed], components: [row] }).catch(e => { })

} catch (e) {
    if(client.errorLog){
let embed = new EmbedBuilder()
.setColor(config.embedColor)
.setTimestamp()
.addFields([
        { name: "Command", value: `${interaction?.commandName}` },
        { name: "Error", value: `${e.stack}` },
        { name: "User", value: `${interaction?.user?.tag} \`(${interaction?.user?.id})\``, inline: true },
        { name: "Guild", value: `${interaction?.guild?.name} \`(${interaction?.guild?.id})\``, inline: true },
        { name: "Time", value: `<t:${Math.floor(Date.now()/1000)}:R>`, inline: true },
        { name: "Command Usage Channel", value: `${interaction?.channel?.name} \`(${interaction?.channel?.id})\``, inline: true },
        { name: "User Voice Channel", value: `${interaction?.member?.voice?.channel?.name} \`(${interaction?.member?.voice?.channel?.id})\``, inline: true },
    ])
    await client.errorLog.send({ embeds: [embed] }).catch(e => { })
    } else {
    console.log(`
    Command: ${interaction?.commandName}
    Error: ${e}
    User: ${interaction?.user?.tag} (${interaction?.user?.id})
    Guild: ${interaction?.guild?.name} (${interaction?.guild?.id})
    Command Usage Channel: ${interaction?.channel?.name} (${interaction?.channel?.id})
    User Voice Channel: ${interaction?.member?.voice?.channel?.name} (${interaction?.member?.voice?.channel?.id})
    `)
    }
    return interaction.reply({ content: `${lang.error7}\n\`${e}\``, ephemeral: true }).catch(e => { })
    }
},
};
