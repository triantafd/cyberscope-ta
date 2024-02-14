#!/bin/bash

# Always run script from install folder 
cd "$(dirname "$0")"
BASEDIR=$PWD


# Pull and Run the registry container
echo "Setting up local Docker registry at localhost:5000"
$PWD/install-local-registry.sh
echo "Local Docker registry setup completed"

# Build back and front and push to local registry
echo "Running Build script to Build Both Applictions and push Images to Local Registry"
$PWD/build.sh
echo "Build Finished"

# Deploy backend and frontend
echo "Running Deploy script to Pull images from registry"
$PWD/deploy.sh
echo "Deploy Finished"
