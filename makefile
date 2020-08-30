CURRENT_DIR = ${CURDIR}
PACKAGE_BIN = node_modules/.bin

default: help
build: ## Build the application
	cd $(CURRENT_DIR); expo build:android;
install: ## Install dependencies
	cd $(CURRENT_DIR); nvm use; yarn install;
watch: ## Start development server
	cd $(CURRENT_DIR); yarn run web;
start: watch
prettier: ## Run [Prettier](https://prettier.io/)
	cd $(CURRENT_DIR); $(PACKAGE_BIN)/prettier --write .;
help: ## Display a list of commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
