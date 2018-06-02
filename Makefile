.PHONY: start stop restart kill destroy logs ps
PROJECT = full-stack-react

ifeq (start,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
start:
	docker-compose -f docker-compose.yml -p $(PROJECT) up -d --build $(RUN_ARGS)

ifeq (stop,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
stop:
	@make kill $(RUN_ARGS)
	@make destroy $(RUN_ARGS)

ifeq (restart,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
restart:
	@make stop $(RUN_ARGS)
	@make start $(RUN_ARGS)

ifeq (kill,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
kill:
	docker-compose -f docker-compose.yml -p $(PROJECT) kill $(RUN_ARGS)

ifeq (destroy,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
destroy:
	docker-compose -f docker-compose.yml -p $(PROJECT) rm -f $(RUN_ARGS)

ifeq (logs,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
logs:
	docker-compose -f docker-compose.yml -p $(PROJECT) logs --follow --timestamps $(RUN_ARGS)

ps:
	docker-compose -f docker-compose.yml -p $(PROJECT) ps
