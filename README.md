# Portfolio Builder Platform

A React Laravel portfolio builder platform for developers to showcase their projects and skills.

## Project Structure

- `backend/` - Laravel backend API
- `frontend/` - React frontend application

## Features

- Customizable portfolio templates
- Sections for personal information, skills, and work samples
- Project showcase with images, GitHub links, and live demos
- Skill tracking with proficiency levels
- Responsive design for all devices

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   composer install
   ```
3. Create environment file:
   ```bash
   copy .env.example .env
   ```
4. Generate application key:
   ```bash
   php artisan key:generate
   ```
5. Run migrations:
   ```bash
   php artisan migrate
   ```
6. Start the development server:
   ```bash
   php artisan serve
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/frontend-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/portfolios` - List all portfolios
- `GET /api/portfolios/{id}` - Get a specific portfolio
- `POST /api/portfolios` - Create a new portfolio
- `GET /api/portfolios/{portfolio}/sections` - Get sections for a portfolio
- `GET /api/portfolios/{portfolio}/projects` - Get projects for a portfolio
- `GET /api/portfolios/{portfolio}/skills` - Get skills for a portfolio

## License

MIT