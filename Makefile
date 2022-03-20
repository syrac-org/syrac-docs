lint:
	scripts/spellcheck src scripts/dictionnaries

dev:
	mdbook serve --open

build:
	mdbook build
