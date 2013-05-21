(function() {
	var abilities = {
		Darkvision: new ability("Darkvision %0'", "Able to see in the dark up to %0 feet away, albiet in black in white.", 1),
		RacialResistBonus: new ability("Resist %0", "+%1 racial bonus on saving throws against %2.", 3)

	};

	function ability(name, desc, numParams) {
		this.name = name;
		this.description = desc;

		if (numParams > 0) {
			return (function() {
				for (var i = 0; i < numParams; i++) {
					this.name = this.name.replace("%" + i, arguments[i]);
					this.description = this.description.replace("%" + i, arguments[i]);
				}

				return this;
			}).bind(this);
		}

		return this;
	}

	ability.prototype.toString = function() {
		return this.name + ": "  + this.description;
	};

	window.RaceAbility = abilities;
}());
