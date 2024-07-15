PROTO_SRC = $(shell find fixtures/proto -name '*.proto' | sort)
PBJS = node_modules/.bin/pbjs
PBTS = node_modules/.bin/pbts

PARSER_BUNDLE = src/type-parser/grammar.ohm-bundle.js src/type-parser/grammar.ohm-bundle.d.ts

.PHONY: fixtures
fixtures: tmp/fixtures.js tmp/fixtures.d.ts

.PHONY: parser
parser: $(PARSER_BUNDLE)

tmp/fixtures.js: $(PROTO_SRC)
	$(PBJS) \
		-t static-module \
		-w commonjs \
		--root fixtureroot \
		--keep-case \
		-p fixtures/proto \
		-o $@ $^

tmp/fixtures.d.ts: tmp/fixtures.js
	$(PBTS) --no-comments -o $@ $<

$(PARSER_BUNDLE): src/type-parser/grammar.ohm
	npx ohm generateBundles --withTypes $<
