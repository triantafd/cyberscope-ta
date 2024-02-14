# cyberscop-coingecko-ta-install

## Install of cyberscope-ta using coingecko Api

You need to have installed: 
- Docker/ Docker Desktop

To build and deploy the app you need to run
 > ./build-deploy.sh

Then you wait forever.

## SCRIPTS  

### build-deploy.sh
- pull docker local registry (runs install-local-registry.sh script)
- build backend and frontend projects and push images to local registry (runs build.sh script)
- deploy/start the docker containers (run deploy.sh script)





