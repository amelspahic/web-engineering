# Web-Engineering

Web Engineering on Master IBU

This is a sample application created using MERN (MongoDb, Express, React, Node.js) stack.

## Run Docker with docker-compose

- Install [Docker](https://docs.docker.com/get-docker/) for your operating system
- From the root of the application, run `docker-compose up` (this could take a while)
- Access the web application from `http://localhost:3000`

## Run independently

### Backend

- Install [Node.js](https://nodejs.org/en/) (preferably latest LTS version - 12.18.2)
- Install [MongoDb](https://www.mongodb.com/try/download/community)
- From `backend` folder, run `npm install`
- Add `.env` file in `backend` folder
- In `.env` file set `MONGODB_URL` to point to your MongoDb instance (i.e. `mongodb://localhost:27017/web-engineering`)
- In `.env` file set `APP_PORT` to point to your MongoDb instance (i.e. `8000`)

```txt
# .env file should look like this
MONGODB_URL=mongodb://localhost:27017/web-engineering
APP_PORT=8000
```

- Run `npm start`

### Frontend

- [Node.js](https://nodejs.org/en/) should be installed in the previous step
- From `frontend` folder, run `npm install`
- Add `.env` file which should point to backend url and port (i.e. `REACT_APP_BACKEND_API_URL=http://localhost:8000/`). Don't forget the trailing slash
- Run the application with `npm start`
