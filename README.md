# Mini-Project-3

## Components:

### Microservices:
The project is organized into microservices, each responsible for a specific aspect of the supply chain management system (purchase history, resource tracking, delivery, and expense management).
Each microservice has its own src folder with controllers, services, models, and a main.ts file.



### Common Module:
The common module contains shared code that can be used across multiple microservices.
It includes event types, utility functions (messaging), configuration settings, and common models.



### API Gateway:
The api-gateway module serves as a gateway for communication between microservices.
It includes controllers, services, and models specific to the API gateway.



### Docker Files:
The docker folder contains Dockerfiles for each microservice and the API gateway. These Dockerfiles are used to create Docker images for deployment.


### Docker Compose:
The docker-compose.yml file defines the services, networks, and volumes for running the entire application using Docker Compose.


### TypeScript Configuration:
The tsconfig.json file contains the TypeScript configuration for the project, specifying compiler options, paths, and file inclusions/exclusions.



### Package Configuration:
The package.json file includes dependencies, scripts, and other metadata for the project.


### Communication:
Communication between microservices is facilitated by Kafka, as evident from the messaging.ts utility in the common module.
Microservices can publish and subscribe to Kafka topics to exchange events and data.


### Dockerization:
Each microservice and the API gateway are containerized using Docker, allowing for easier deployment and scalability.
This project structure follows a microservices architecture, enabling modularity, scalability, and independence of each service. Communication between services is handled via Kafka, and the entire system can be deployed using Docker. The API gateway serves as a central point for managing and routing requests between microservices.
