# Notes Management API

## Overview
This project is a RESTful API built with TypeScript and Hapi.js, designed for managing notes. It allows users to create, retrieve, update, and delete notes, each with a title and a body.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete notes.
- **Validation**: Ensures the title of each note is at least 4 characters long.
- **Logging**: Logs each incoming request's details.
- **Error Handling**: Catches and responds to various potential issues.

## Getting Started

### Prerequisites
- Node.js
- TypeScript

### Installation
1. Clone the repository:
   ```
   git clone [repository-url]
   ```
2. Install dependencies:
   ```
   npm install
   ```

### Running the Server
Run the server using the following command:
```
npm run dev
```

## API Endpoints
- `POST /notes`: Create a new note.
- `GET /notes`: List all notes.
- `GET /notes/{id}`: Retrieve a note by its unique identifier.
- `PUT /notes/{id}`: Update an existing note.
- `DELETE /notes/{id}`: Delete a note.

## Project Structure
- `src/`
  - `models/`: Data models.
  - `services/`: Business logic.
  - `routes/`: API routes.
  - `middleware/`: Middleware functions.
  - `decorators/`: Custom decorators.
- `index.ts`: Entry point of the application.

## License

NO LICENSE
