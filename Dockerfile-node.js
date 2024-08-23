export SHELL=/bin/bash
eval $(minikube -p minikube docker-env)

# Ensure you're in the correct directory
cd /path/to/directory/with/Dockerfile

docker build -f ./Dockerfile -t devopshint/node-app:latest .

echo -n "verifying images:"
docker images
