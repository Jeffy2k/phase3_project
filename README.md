# Folioflow

Welcome to Folioflow! This web application provides a platform for professionals to manage their online portfolio.

## Description
This is a full stack application that enables professionals to create, update, and manage their online portfolio.The Portfolio Application was developed to provide an easy-to-use platform for professionals to showcase their skills, experience, and projects. 

## Technologies used
 The application is built using REACT for the frontend and SINATRA for the backend. All client and API interactions are handled asynchronously and use JSON as the communication format.

## Getting Started

To get started clone this repository to your machine by running the command below;

            git@github.com:Jeffy2k/phase3_project.git

### Backend setup
- Navigate to the server directory by running the following command:

        cd server

- install dependencies by running;

        bundle install

- Set up your database by running

        bundle exec rake db:migate db:seed

    to create the tables.

- to start the server run

        rake start

### Frontend setup

- Navigate to the frontend directory by running the following command:

        cd server

- install all dependencies by running :

        npm install

- To launch the application, run the following command:

        npm run start

- If you wish you can change the fetch links to http://localhost:9292 which is the port your server is running on.

## Features

The Portfolio Application comes with a wide range of features to enable users to manage their online portfolios. These features include:

- User registration and login to the platform.
- A user dashboard where they can view all their listed projects and skills.
- Ability to add, update and delete projects.
- Ability to add, update, and delete skills.
- A user can have a maximum of 10 skills.

# License

This project is under license Apache 2.0

# Author

This project was done by

Jeff Maina