dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml
staging-dockerfile = -f docker-compose.yml -f docker-compose.staging.yml
containers-tool = docker-compose

build-dev:
	docker-compose $(dev-dockerfile) build
	$(MAKE) dev

dev:
	docker-compose $(dev-dockerfile) up
