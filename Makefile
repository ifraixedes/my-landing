
# NOTE: only Linux and OSX are supported
OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
OS_ALT := $(shell echo $(OS) | sed -e 's/darwin/osx/')
DEVD_VER := "0.9"
MODD_VER := "0.8"
OPSS_VER := "0.4.0"
BIN_DIR := .bin

define HELP_MSG
NOTES
	build-* targets
		perform operation in the src files to output the results in the docs
		directory which is what's published through GH Pages.

Execute one of the following targets:

endef

export HELP_MSG

.PHONY: help
help: ## Show this help
	@echo "$$HELP_MSG"
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/:.*##/:##/' | column -t -s '##'

.PHONY: install-tools
install-tools: ## Install the tools used for updating and generating the static pages
	@mkdir -p $(BIN_DIR)
	@echo
	@echo "Installing devd"
	@echo
	@curl -L -o $(BIN_DIR)/devd.tgz \
		https://github.com/cortesi/devd/releases/download/v$(DEVD_VER)/devd-$(DEVD_VER)-$(OS_ALT)64.tgz
	@tar Uxzf $(BIN_DIR)/devd.tgz -C $(BIN_DIR)
	@mv -f $(BIN_DIR)/devd-$(DEVD_VER)-$(OS_ALT)64/devd $(BIN_DIR)/
	@rm -fr $(BIN_DIR)/devd.tgz $(BIN_DIR)/devd-$(DEVD_VER)-$(OS_ALT)64
	@echo
	@echo "Installing modd"
	@echo
	@curl -L -o $(BIN_DIR)/modd.tgz \
		https://github.com/cortesi/modd/releases/download/v$(MODD_VER)/modd-$(MODD_VER)-$(OS_ALT)64.tgz
	@tar Uxzf $(BIN_DIR)/modd.tgz -C $(BIN_DIR)
	@mv -f $(BIN_DIR)/modd-$(MODD_VER)-$(OS_ALT)64/modd $(BIN_DIR)/
	@rm -fr $(BIN_DIR)/modd.tgz $(BIN_DIR)/modd-$(MODD_VER)-$(OS_ALT)64
	@echo
	@echo "Installing one-page-static-site"
	@echo
	@curl -L -o $(BIN_DIR)/opss \
		https://github.com/ifraixedes/one-page-static-site/releases/download/v$(OPSS_VER)/opss_$(OS)_amd64
	@chmod +x $(BIN_DIR)/opss
	@echo

.PHONY: build
build: ## Build the static site
	@mkdir -p docs
	@$(BIN_DIR)/modd --prep

.PHONY: build-html
build-html: ## Build the HTML of the site rendering the Markdown content
	@mkdir -p docs
	@$(BIN_DIR)/opss -o docs/index.html

.PHONY: dev
dev: ## Start the web server and the tooling which watches for changes for easing the dev process
	@$(BIN_DIR)/modd

.PHONY: clean
clean: ## Delete all the installed tools, temporary files, etc.
	@rm -rf $(BIN_DIR)
