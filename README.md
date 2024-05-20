# Chat Application using MERN Stack

## Introduction
This is a simple chat application built using the MERN stack. It allows users to register, log in, and chat with other users in real-time.

## Features
- User Authentication: Users can register, log in, and log out securely.
- Real-time Chat: Users can send and receive messages in real-time.
- User Profile: Users can view and update their profiles.

## Technologies Used
- MongoDB: NoSQL database for storing user information and messages.
- Express.js: Backend framework for building the RESTful API.
- React.js: Frontend library for building the user interface.
- Node.js: JavaScript runtime environment for running the server-side code.
- Socket.IO: Real-time communication library for enabling chat functionality.

## Prerequisites
Before running the application, make sure you have the following installed:
- Node.js and npm
- MongoDB

## Getting Started - Backend
1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install backend dependencies:
   ```
   cd chat-application/backend
   npm install
   ```

3. Set up MongoDB:
   - Start MongoDB server: `mongod`
   - Create a new database named `chatdb`

4. Set backend environment variables:
   - Create a `.env` file in the `backend` directory
   - Add the following variables:
     ```
     PORT=3001
     MONGODB_URI=mongodb://localhost:27017/chatdb
     JWT_SECRET=<your-secret-key>
     ```

5. Run the backend server:
   ```
   npm start
   ```

## Getting Started - Frontend
1. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

2. Set frontend environment variables:
   - Create a `.env` file in the `frontend` directory
   - Add the following variables:
     ```
     REACT_APP_API_URL=http://localhost:3001
     ```

3. Run the frontend development server:
   ```
   npm start
   ```

4. Access the application in your browser at `http://localhost:3000`

## Folder Structure
```
chat-application/
│
├── frontend/                # Frontend code (React)
│   ├── public/              # Public assets
│   └── src/                 # React components and styles
│
├── backend/                 # Backend code (Node.js and Express.js)
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   └── app.js               # Express application setup
│
└── README.md                # Project README
```
## Output

![WhatsApp Image 2024-05-11 at 14 10 22_74ef05a4](https://github.com/Janani-m17/Chat-Application_MERN-Stack/assets/124059957/0e3fa7d3-4b88-4d2a-b105-63add4ed9975)
![WhatsApp Image 2024-05-11 at 15 02 19_53b4c87c](https://github.com/Janani-m17/Chat-Application_MERN-Stack/assets/124059957/3ae90895-bf87-471b-b1cf-1e14ce1811d1)
![WhatsApp Image 2024-05-11 at 14 39 21_4217d336](https://github.com/Janani-m17/Chat-Application_MERN-Stack/assets/124059957/8ed0ecb2-56a5-49de-b343-a3eebcfe393f)
![WhatsApp Image 2024-05-11 at 14 46 43_cb658539](https://github.com/Janani-m17/Chat-Application_MERN-Stack/assets/124059957/4de50f83-1291-43aa-846e-3abdf23c4103)


