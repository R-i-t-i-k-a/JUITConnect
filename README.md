# JUIT Connect

JUIT Connect is a full-stack web application designed to foster a knowledge-sharing platform for students and alumni of Jaypee University of Information Technology (JUIT). This project aims to centralize important information, provide guidance, and connect students with seniors and alumni to enhance their campus experience.

## Project Overview

JUIT Connect addresses the challenge of dispersed information by creating a unified platform where students can ask questions, share knowledge, and receive answers from reliable peers, seniors, and alumni. It offers a dynamic ecosystem to engage and collaborate in real-time, promoting personal growth and awareness on campus.

The project is built using the MERN stack and follows a modular design to ensure a smooth user experience.

## Tech Stack

- **Frontend**: React.js, React Router, HTML, CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (MongoDB Atlas for production)
- **Middleware**: CORS, Mongoose
- **Other Tools**: Postman (for API testing)

## Features

- **User Authentication**: Students sign in using their webkiosk credentials.
- **Personalized Dashboard**: Users can access their profile, posts, and community interactions.
- **Create Posts**: Users can post questions, and others can respond with answers.
- **Community Engagement**: Students, seniors, and alumni can engage in discussions and share insights.
- **Profile Customization**: Allows users to modify their profiles and interact with others in a more personalized way.
- **Dynamic Routing**: Various pages such as Dashboard, Posts, Answers, About Us, and Contact Us.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- VSCode or any IDE that supports JavaScript (for development)

### Clone the repository

```bash
git clone https://github.com/yourusername/juit-connect.git
cd juit-connect
```

### Install Dependencies

For both the **server** and **client** directories, install the required packages by running:

```bash
cd server
npm install

cd ../client
npm install
```

## Running the Project

You can run both the server and client simultaneously by navigating to their respective directories and running the following command:

```bash
npm run dev
```

This command starts both the client and server in development mode.

### Server

- Navigate to the `server` directory:

```bash
cd server
npm run dev
```

- The server will start on the port specified in the `config.js` file (default: `http://localhost:5000`).

### Client

- Navigate to the `client` directory:

```bash
cd client
npm run dev
```

- The client will start on `http://localhost:5173`.

## Server API Endpoints

- `GET /`: Welcome route.
- `POST /posts`: Add a new post to the platform.
- `GET /posts`: Retrieve all posts.
- `GET /posts/:id`: Retrieve a specific post by ID.
- `PUT /posts/:id`: Update a post by ID.
- `DELETE /posts/:id`: Delete a post by ID.

## Client Side Pages

- **Login Page**: `/` - Users can log in with their webkiosk credentials.
- **Dashboard**: `/dashboard` - Displays posts and user profile.
- **Create Post**: `/dashboard/post` - Allows users to create a new post.
- **Answer Post**: `/dashboard/:id/answers` - Displays answers to a post.
- **Answer a Specific Post**: `/dashboard/:id/answer` - Add an answer to a post.
- **About Us**: `/about` - Information about the project.
- **Contact Us**: `/contact` - Contact form for queries.

## Contributing

Feel free to open issues or submit pull requests. Any contributions are highly appreciated!
