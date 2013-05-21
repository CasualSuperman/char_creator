(function() {
	var races = [
		new race("Human", 0, [+0, +0, +0, +0, +0, +0], []),
		new race("Dwarf", 0, [+0, +2, +0, +0, +0, -2], [
			RaceAbility.Darkvision(60),
			RaceAbility.RacialResistBonus("Poison", "2", "poison")
		])
	];

	function race(name, sizeMod, mods, abilities) {
		this.name = name;
		this.sizeMod = sizeMod;
		this.mods = {
			"str": mods[0],
			"con": mods[1],
			"dex": mods[2],
			"int": mods[3],
			"wis": mods[4],
			"cha": mods[5]
		};
		this.abilities = abilities;

		return this;
	}

	race.prototype.toString = function() {
		var desc = this.name + "\n";
		desc += getSizeDesc(this.sizeMod);
		var numModded = 0;
		for (var i = 0; i < abilities.length; i++) {
			var mod = abilities[i]["short"].toLowerCase();
			if (this.mods[mod] !== 0) {
				if (numModded >= 1) {
					desc += ", ";
				} else {
					desc += "\n";
				}
				desc += toModStr(this.mods[mod]) + " " + abilities[i]["long"];
				numModded++;
			}
		}
		if (numModded > 0 && this.abilities.length > 0) {
			desc += "\n";
		}
		for (var i = 0; i < this.abilities.length; i++) {
			if (i > 0) {
				desc += "\n";
			}
			desc += this.abilities[i].toString();
		}
		return desc;
	};

	function getSizeDesc(mod) {
		return [
			"",
			"Small: As Small creatures, they get +1 size bonus to Armor Class, a +1 size bonus on attack rolls, and a +4 size bonus on Hide checks, but they use smaller weapons than humans use, and lifting and carrying limits are three-quarters of those of a Medium character.",
			"Medium: As Medium creatures, there are no special bonuses or penalties due to size.",
			"",
			""
		][mod+2];
	}

	window.toModStr = function(num) {
		if (num >= 0) {
			return "+" + num;
		} else {
			return "" + num;
		}
	};

	window.Races = races;
}());
