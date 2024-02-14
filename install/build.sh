#!/bin/bash

# Configuration
REGISTRY="localhost:5000"
FRONTEND_APP_NAME="coingecko-frontend"
BACKEND_APP_NAME="coingecko-backend"
APP_VERSION="latest"

#Build and push React (frontend) application
cd ../frontend
echo "Building React app..."
docker build -t $REGISTRY/$FRONTEND_APP_NAME:$APP_VERSION .
docker push $REGISTRY/$FRONTEND_APP_NAME:$APP_VERSION
echo "React app image has been built and pushed to $REGISTRY/$FRONTEND_APP_NAME:$APP_VERSION"


# Build and push Node.js (backend) application
cd ../backend
echo "Building Node.js app..."
docker build -t $REGISTRY/$BACKEND_APP_NAME:$APP_VERSION .
docker push $REGISTRY/$BACKEND_APP_NAME:$APP_VERSION
echo "Node.js app image has been built and pushed to $REGISTRY/$BACKEND_APP_NAME:$APP_VERSION"

# Navigate back to the root directory


echo "All done!"
