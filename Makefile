install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

# test:
# 	npm test

# test-coverage:
# 	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

.PHONY: test