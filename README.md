# Docker Setup
## docker compose
docker-compose up
## look for docker id
docker ps
## look for ip address of docker container
docker inspect e7c60e730683 | findstr "IPAddress" | findstr 172
## browse container ip
http://192.168.99.100:8889/login?next=%2F