(function() {
	var abilities = {
		Darkvision: new ability("Darkvision %0'", "Able to see in the dark up to %0 feet away, albiet in black in white.", 1),
		RacialResistBonus: new ability("Resist %0", "+%1 racial bonus on saving throws against %2.", 3),

	};

	function ability(name, desc, numParams) {
		this.name = name;
		this.description = desc;
		this.params = [];

		if (numParams > 0) {
			return (function() {
				this.params = Array.prototype.slice.apply(arguments);
				for (var i = 0; i < numParams; i++) {
					this.name = this.name.replace("%" + i, this.params[i]);
					this.description = this.description.replace("%" + i, this.params[i]);
				}

				return this;
			}).bind(this);
		}

		return this;
	}

	ability.prototype.toString = function() {
		return this.name + ": "  + this.description;
	};

	ability.protoype.toHTML = function() {
		var elem = document.createElement("span");
		var b = document.createElement("span");
		b.className = "bold";
		b.innerHTML = this.name + ":";
		elem.appendChild(b);
		elem.innerHTML += " " + this.description;

		return elem;
	};

	ability.prototype.applyToCharacter = function(character) {
		throw("Each ability needs to override this.");
	};

	window.RaceAbility = abilities;
}());
