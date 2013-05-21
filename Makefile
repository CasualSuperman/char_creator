all: css js

css: style.css

style.css: $(wildcard less/*.less) #less/index.less less/main.less less/colors.less less/forms.less
	@echo -e "LESS\tstyle.css"
	@lessc -O2 -x less/index.less style.css

js: main.js

main.js: js/index.js js/character.js js/progress.js js/abilities.js js/races.js
	@echo -e "JS\tmain.js"
	@closure --js $^ > main.js
