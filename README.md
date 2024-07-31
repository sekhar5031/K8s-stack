# MERN Stack Application with Three.js Animation

This project is a MERN (MongoDB, Express, React, Node.js) stack application with integrated Three.js animation. The application includes a backend server with Express.js and MongoDB, and a frontend with basic HTML and Three.js for 3D animation.

## Project Structure

```
.
├── backend
│   ├── package.json
│   └── server.js
├── manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── mongodb-deployment.yaml
│   └── mongodb-service.yaml
└── README.md
```

## Backend

The backend is built with Express.js and connects to a MongoDB database. It provides endpoints for adding and retrieving data.

### Endpoints

- `GET /`: Returns a welcome message.
- `POST /data`: Adds data to the database.
- `GET /data`: Retrieves data from the database.

### Running the Backend Locally

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node server.js
   ```

## Frontend

The frontend is a simple HTML page with integrated Three.js animation. It includes a form to submit data and a button to fetch data from the backend.

### Features

- Three.js animation with a rotating character.
- Form to submit data to the backend.
- Button to fetch and display data from the backend.

## Kubernetes Manifests

The Kubernetes manifests are located in the `manifests` directory. They include deployments and services for the backend, frontend, and MongoDB.

### Applying the Manifests

1. Navigate to the `manifests` directory:
   ```sh
   cd manifests
   ```

2. Apply the manifests:
   ```sh
   kubectl apply -f backend-deployment.yaml
   kubectl apply -f backend-service.yaml
   kubectl apply -f frontend-deployment.yaml
   kubectl apply -f frontend-service.yaml
   kubectl apply -f mongodb-deployment.yaml
   kubectl apply -f mongodb-service.yaml
   ```

## Accessing the Application

To access the frontend service on your browser, set up port forwarding:

```sh
kubectl port-forward svc/frontend 8080:80
```

Then, open your browser and navigate to `http://localhost:8080`.

## License

This project is licensed under the MIT License.
