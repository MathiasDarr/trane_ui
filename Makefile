DOCKER_IMAGE=trane-ui
DOCKERFILE_PATH=Dockerfile

.PHONY: build_image
build_image: 
	docker build . -f ${DOCKERFILE_PATH} -t ${DOCKER_IMAGE}

.PHONY: ecr_login
ecr_login:
	aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 710339184759.dkr.ecr.us-west-2.amazonaws.com

.PHONY: push_image
push_image: ecr_login build_image
	docker tag ${DOCKER_IMAGE}:latest 710339184759.dkr.ecr.us-west-2.amazonaws.com/trane-ui:latest
	docker push 710339184759.dkr.ecr.us-west-2.amazonaws.com/trane-ui:latest
