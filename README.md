
# Kanbas React Web App

## Overview

The Kanbas React Web App is a feature-rich, interactive application designed to manage tasks and projects using the Kanban methodology. It leverages modern web technologies including React.js, Redux, React Router, and integrates with a Node.js and MongoDB backend for data persistence.

## Features

- **Task Management**: Create, update, delete, and manage tasks.
- **User Authentication**: Secure login and registration system.
- **Real-Time Updates**: Reflects changes in real-time across different user sessions.
- **Responsive Design**: Optimized for various devices using CSS and Bootstrap.
- **API Integration**: Seamless interaction with backend services.

## Project Structure

### Frontend (Kanbas React Web App)
- **React Components**: Modular and reusable components.
- **State Management**: Uses Redux for managing the application state.
- **Routing**: Utilizes React Router for navigation.
- **Styling**: CSS and Bootstrap for responsive design.

### Backend (Kanbas Node Server App)
- **Server Framework**: Node.js and Express.js for server-side logic.
- **Database**: MongoDB for data storage.
- **RESTful APIs**: Endpoints for CRUD operations and user authentication.
- **Middleware**: Implements middleware for request handling and security.

## Setup Instructions

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. **Clone the Repositories**:
    ```bash
    git clone https://github.com/aryanaher2299/kanbas-react-web-app.git
    git clone https://github.com/aryanaher2299/kanbas-node-server-app.git
    ```

2. **Install Dependencies**:
    ```bash
    cd kanbas-react-web-app
    npm install
    cd ../kanbas-node-server-app
    npm install
    ```

3. **Start the Backend Server**:
    ```bash
    cd kanbas-node-server-app
    npm start
    ```

4. **Start the Frontend Server**:
    ```bash
    cd ../kanbas-react-web-app
    npm start
    ```

5. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`

### Configuration

- **Backend**: Configure MongoDB connection in `kanbas-node-server-app/config/db.js`.
- **Environment Variables**: Set up environment variables for secret keys and database URIs.

## Usage

### Frontend
- **User Authentication**: Register and log in to manage tasks.
- **Task Management**: Create new tasks, update existing ones, and organize them into different columns (To Do, In Progress, Done).

### Backend
- **API Endpoints**:
    - **Authentication**: `/api/auth`
    - **Tasks**: `/api/tasks`
    - **Users**: `/api/users`

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
