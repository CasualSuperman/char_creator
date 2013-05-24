(function() {
	var character = function() {
		this.abilities = {
			"str": null,
			"con": null,
			"dex": null,
			"int": null,
			"wis": null,
			"cha": null,
		};

		this.race = null;

		this.backStory = {
			name: null,
			age: null,
			height: null,
			weight: null
		};

		this.skills = null;
	};

	character.prototype.toString = function() {
		return JSON.stringify(this);
	};

	character.prototype.clearAbility = function(name) {
		if (this.abilities.hasOwnProperty(name)) {
			this.abilities[name] = null;
		} else {
			throw("No ability named " + name + ".");
		}
		return this;
	};

	character.prototype.setAbility = function(name, val) {
		if (this.abilities.hasOwnProperty(name)) {
			this.abilities[name] = parseInt(val);
		} else {
			throw("No ability named " + name + ".");
		}
		return this;
	};

	character.fromString = function(str) {
		var c = new character();
		var parsed = JSON.parse(str);
		for (prop in parsed) {
			if (parsed.hasOwnProperty(prop)) {
				c[prop] = parsed[prop];
			}
		}
		return c;
	};

	window.Character = character;
}());
