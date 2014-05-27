# Executables
MOCHA_EXEC  = ./node_modules/.bin/mocha
JSHINT_EXEC = ./node_modules/.bin/jshint

.PHONY: test jshint mocha

test: jshint mocha

jshint:
	@$(JSHINT_EXEC) lib/

mocha:
	@echo "\n---| Running Mocha |---"
	@NODE_ENV=test $(MOCHA_EXEC) \
	--reporter spec \
	--ui tdd \
	--recursive \
	test/
