
run:
	docker compose -f local.yaml up -d --remove-orphans

build:
	docker compose -f local.yaml build --no-cache


run-prod:
	docker compose -f prod.yaml up -d --remove-orphans

build-prod:
	docker compose -f prod.yaml build --no-cache
