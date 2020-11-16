const { CommandoClient } = require('discord.js-commando');
const Collection = require('@discordjs/collection');
const winston = require('winston');
const fs = require('fs');
const path = require('path');

module.exports = class DabbyClient extends CommandoClient {
	constructor(options) {
		super(options);

		
		
		this.games = new Collection();
	}
};
