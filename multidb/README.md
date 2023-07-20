docker run \
 --name postgres \
 -e POSTGRES_USER=kaique-kira \
 -e POSTGRES_PASSWord=Kaique1234 \
 -e POSTGRES_DB=heroes \
 -p 5432:5432
-d \
 postgres

docker ps

docker exec -ti postgres psql -U kaique-kira heroes

docker run \
 --name adminer \
 -p 8080:8080 \
 --link postgres:postgres \
 -d \
 adminer
docker run --link postgres:postgres -p 8080:8080 adminer

## -----MongoDB

docker run --name mongodb -p 2701:2701 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient
