# Prisma-mongo-next-fastify

## Setup
First step requires to setup docker you can install docker from the following location [here](https://docs.docker.com/engine/install/)

Once docker is installed you can then run the mongodb server by composing docker

```
docker-compose -f docker-compose.yaml up
```

The database will look like the following:
```
DATABASE_URL="mongodb://root:prisma@localhost:27017/prisma-mongo?authSource=admin&retryWrites=true&w=majority"
```

Then change directory to 
```
cd prisma-estate-agent
```
Install all dependencies

```
npm install
```
The next step is to setup the db with prisma

Add .env to the file it will look similar to the following:
```
DATABASE_URL="mongodb://root:prisma@localhost:27017/prisma-mongo?authSource=admin&retryWrites=true&w=majority"
```

Make sure the prisma schema is valid
```
npx prisma validate
```

generate schema

```
npx prisma generate
```

Then push the changes to the db so we can then populate it
```
npx prisma db push
```

The next step is to now seed the database so we have some dummy data added

```
npx prisma db seed
```


To confirm both prisma and docker are working properly 

```
npx prisma studio
```

From this command you will be able to see the data entries in the database and have a play around