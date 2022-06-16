# MERN stack

## Express on Heroku

- git init + gitignore
- Express Hello World
  - express
  - nodemon
  - dotenv - PORT
- Deploy to heroku
- Create a react project
  - Build local react
  - setup heroku post build
  - change backend routes path to /api

## React - Port 3000

CRUD holidays

Login Page - /login  
Master Page - /holidays  
Detail Page - /holidays/:id

## Mongoose Schema

- Holiday
  - Name - String
  - Likes - Number
  - Celebrated - Boolean
  - Description - String

## CRUD

Create - /holidays/new - POST - /api/holidays/new  
Read - /holidays - GET - /api/holidays/all  
Read (secret) - /holidays/:id - GET - /api/holidays/:id  
Delete - DELETE - /api/holidays/:id

## Security

- Hide Detail Link when not logged in
- Direct access to Detail URL is bounced out

## React Libraries for Projects

- Component Libraries
- Charts/Maps/Calendar
- Validation
- React Query
