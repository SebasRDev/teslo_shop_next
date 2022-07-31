# Teslo Shop NextJs

To run locally, yo will need the database

```
  docker-compose up -d
```

* -d means __detached__


## Setup env variables
Rename the file __.env.template__ to __.env__

* MongoDB local URL:
```
MONGO_URL=mongodb://localhost:27017/[service]
```

* Rebuild nodemodules and start Next
```
yarn install
yarn dev
```

## Fill database with test data
You will call
```
http://localhost:3000/api/seed
```