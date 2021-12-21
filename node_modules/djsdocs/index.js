"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var get = function (query, message) {
    var url = "https://djsdocs.sorta.moe/v2/embed?src=stable&q=" + encodeURIComponent(query);
    node_fetch_1.default(url)
        .then(function (res) { return res.json(); })
        .then(function (embed) {
        if (embed && !embed.error) {
            message.channel.send({ embed: embed });
        }
        else {
            message.reply("No Such Result Found for **\"" + query + "\"**");
        }
    });
};
module.exports.get = get;
