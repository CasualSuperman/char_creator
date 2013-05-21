$(function() {
	$("#container").load("forms/init.htm");
});

var abilities = [
	{
		"short": "Str",
		"long":  "Strength"
	},
	{
		"short": "Con",
		"long":  "Constitution"
	},
	{
		"short": "Dex",
		"long":  "Dexterity"
	},
	{
		"short": "Int",
		"long":  "Intelligence"
	},
	{
		"short": "Wis",
		"long":  "Wisdom"
	},
	{
		"short": "Cha",
		"long":  "Charisma"
	}];

if(!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g,'');
	};
}
