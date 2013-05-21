(function() {
	var localStorage = window.localStorage || null;

	if (localStorage !== null) {
		window.saveCurrentForm = function(name, data) {
			localStorage.setItem("currentForm", JSON.stringify({
				name: name,
				data: data
			}));
		};

		window.loadCurrentForm = function(name, cb) {
			var form = localStorage.getItem("currentForm");
			if (form) {
				var data = JSON.parse(form);
				if (data.name === name) {
					cb(data.data);
				}
			}
		};

		window.clearCurrentForm = function() {
			localStorage.removeItem("currentForm");
		};

		window.hasCurrentForm = function() {
			var form = localStorage.getItem("currentForm");
			return !!form;
		};

		window.getCurrentForm = function() {
			var form = localStorage.getItem("currentForm");
			if (form) {
				var data = JSON.parse(form);
				return data.name;
			}
			return null;
		};

		window.saveInProgressCharacter = function(character) {
			localStorage.setItem("inProgress", character.toString());
		};

		window.loadInProgressCharacter = function() {
			var character = localStorage.getItem("inProgress");
			if (character) {
				return Character.fromString(character);
			} else {
				return new Character();
			}
		};

		window.clearInProgressCharacter = function() {
			localStorage.removeItem("inProgress");
		};

	} else {
		window.saveCurrentForm = function(){};
		window.loadCurrentForm = function(){};
		window.clearCurrentForm = function(){};
		window.hasCurrentForm = function(){ return false; };
		window.saveInProgressCharacter = function(){};
		window.loadInProgressCharacter = function() {
			return new Character();
		};
		window.clearInProgressCharacter = function(){};
	}
}());
