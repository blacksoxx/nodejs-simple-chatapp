# Simple Chat App

This is a simple chat application built with Node.js and Socket.io. It allows multiple users to join a chat room and communicate in real-time.

## Overview

The Simple Chat App enables users to:

- Join a chat room
- Send and receive messages in real-time
- See who is currently online
- Enter multiple rooms

## Requirements

To run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Docker](https://www.docker.com/) (if you want to run the application in a container)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://gitlab.com/youssefomar.bouden/nodejs-simple-chatapp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ./Documents/EXPRESSS/chatapp
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```
## Running the Application

To start the chat application, run the following command:

```bash
node index.js
```
## Running Container
```bash
docker build -t simple-chat-app .
docker run -p 3000:3000 simple-chat-app
```
## Usage
1. Open your web browser and go to http://localhost:3000.
2. Enter a username and join the chat room.
3. Start sending messages and enjoy real-time chat with other users!