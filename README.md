## Devopsifying a Nodejs Application
![Build-workflow](https://github.com/speedygamer12/devopsifying-node/actions/workflows/build-workflow.yml/badge.svg)
<hr />

### What is this?
A CICD pipeline for a NodeJs application implementing containers for production and development

> Run in production(Build Image):
* Clone the repository in your terminal: `git clone https://github.com/speedygamer12/devopsifying-node`
* Change dir to devopsifying-node directory: `cd devopsifying-node`
* Create Docker volume for node modules on first run: `make setup`
* Install dependencies: `make install`
* Run application: `make dev`

> Run in development:
* Clone the repository in your terminal: `git clone https://github.com/speedygamer12/devopsifying-node/edit/main/README.md`
* Change dir to devopsifying-node directory: `cd devopsifying-node`
* Build the Images with Docker-compose: `docker-compose up -d `

### Features

> Continuous Integration
* Docker for software packaging 
* Githubs action for CICD pipeline
* Snyk for Scanning docker image
* Semver for versioning images
* Dockerhub to store artifacts


> Continuous Deployment


> Development
* Unit testing
* Static code analysis
* Docker-compose for development runtime, including hot-reload.
* Docker-compose builder v2 for development friendly use to install and build.
* External Docker volume in Docker-compose to facilitate sharing of nodemodules between 
  container and local directory.

### Improvements
* Fix npm ci
* Create a Nexus registry to store images
* Deploy Artifacts to a server
