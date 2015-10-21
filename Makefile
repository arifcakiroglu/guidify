
install: package.json
	@npm install

test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec

.PHONY: test
