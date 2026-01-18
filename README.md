# Assignment #3 — Using Data Bases

### Name:Abrayev Daniyal  
### Group: SE-2432


# Project description

Evolved my backend from a local JSON-based storage (Assignment 1) to a MongoDB
database. I built a fully functional CRUD API.
 


Routes:
|Method  |Endpoint  |  
|--|--|
|Get  |/  |  
|Get  |/tasks  |  
|Post  |/tasks  |  
|Put  |/tasks/:id  |  
|Delete  |/tasks/:id  |  

## Requirements
This project uses environment variables for security. You must create a .env file with MongoDB connections string locally.

Example:
`"MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/name"`

## How to install dependencies

`npm install`  

## How to run the server

`npm start`  


## Example Front End
![TaskManager](https://github.com/helpicantchoose/web_technologies_2_assignment_3/blob/main/images/example.png?raw=true)
## Example MongoDb Document
![TaskManager](https://github.com/helpicantchoose/web_technologies_2_assignment_3/blob/main/images/Mongodb.png?raw=true)
## Example Postman requests
### Get /tasks
![Tasks](https://github.com/helpicantchoose/web_technologies_2_assignment_3/blob/main/images/get.png?raw=true)
### Post /tasks
![post](https://github.com/helpicantchoose/web_technologies_2_assignment_3/blob/main/images/post.png?raw=true)
### Put /tasks/:id
![put](https://github.com/helpicantchoose/web_technologies_2_assignment_3/blob/main/images/put.png?raw=true)
### Delete /tasks/:id
![delete](https://github.com/helpicantchoose/web_technologies_2_assignment_3/blob/main/images/delete.png?raw=true)
