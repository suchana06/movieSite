# Movie Site

This is a movie site project where users can search for movies and view details if they are present in the database. It utilizes React for the frontend, Node.js with Express for the backend, and MySQL for the database.

## Features
- **Search Functionality:** Users can search for movies by title.
- **View Movie Details:** Users can view details such as synopsis, release date, cast, and ratings for each movie.
- **Responsive Design:** The application is designed to be responsive and accessible on various devices.

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MySQL

## Usage
1. Clone the repository to your local machine.
2. Install dependencies for both the frontend and backend using npm or yarn.
3. Start the backend server using the command `nodemon index`.
4. Start the frontend server using the command `npm start` or `yarn start`.
5. Open your web browser and navigate to the provided URL to access the application.

## Database Setup

To set up the database for this project, follow these steps:

- Create a MySQL database named `movie`.
- Create a table named `imdb` with the following columns:
  - `Movie_Title`: VARCHAR
  - `Year`: INT
  - `Director`: VARCHAR
  - `Actors`: VARCHAR
  - `Rating`: FLOAT
  - `Runtime`: INT
  - `Censor`: VARCHAR
  - `Total_Gross`: INT
  - `main_genre`: VARCHAR
  - `side_genre`: VARCHAR
- Populate the table with sample data or import your own dataset.
