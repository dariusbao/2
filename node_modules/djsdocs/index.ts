import fetch from "node-fetch"
const get = (query, message) => {
    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;
    fetch(url)

    .then(res => res.json())
    .then(embed => {

        if (embed && !embed.error) {

            message.channel.send({ embed });
        } else {

            message.reply(`No Such Result Found for **"${query}"**`);
        }
    })
}
module.exports.get = get