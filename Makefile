.PHONY dev setup install
all dev setup
install:
	docker-compose -f docker-compose.builder.yml run --rm install

dev:
	docker-compose up 

setup: 
	docker volume create nodemodules

  

