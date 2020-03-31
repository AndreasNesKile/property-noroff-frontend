# Property Project

Welcome to the property project! This is a project created in collaboration with Noroff and its purpose is to strenghten our knowledge for fullstack development.

### Tech

The Property Project are made with following technologies:

![logo](https://imgur.com/pm6WSsI.png)

-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces

![logo](https://imgur.com/8c45naP.jpg)

-   [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1) - ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications

![logo](https://imgur.com/K8n7yPf.jpg)

-   [Auth0](https://auth0.com/) - Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.

![logo](https://imgur.com/UqUK585.jpg)

-   [Leaflet.JS](https://leafletjs.com/) - an open-source JavaScript library for mobile-friendly interactive maps.

## Installation

Clone the project to your computer and run the following commands for both front- and backend.

### Frontend

Install the dependencies and devDependencies and start the server (development mode).

```sh
$ cd property-project-noroff
$ cd frontend
$ npm i
$ npm start
```

### Backend

In order to run the backend, there are some few options that can be used.

```cs
$ dotnet run watch
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Azure

### Docker

Instructions on how to run the frontend in a docker container.
First install docker on your computer, then open powershell and navigate to the frontend folder ...\property-noroff-project\frontend. 
Type in the following:

```sh
$ docker build -t reactapp .
$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm reactapp
```
This process may take some time. After it is done, the frontend is now running from a docker container at port 3001.
Go to http://localhost:3001 to visit the page.
