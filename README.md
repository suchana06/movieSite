<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Site</title>
</head>
<body>
    <h1>Movie Site</h1>
    <p>This is a movie site project where users can search for movies and view details if they are present in the database. It utilizes React for the frontend, Node.js with Express for the backend, and MySQL for the database.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Search Functionality:</strong> Users can search for movies by title.</li>
        <li><strong>View Movie Details:</strong> Users can view details such as synopsis, release date, cast, and ratings for each movie.</li>
        <li><strong>Responsive Design:</strong> The application is designed to be responsive and accessible on various devices.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> React</li>
        <li><strong>Backend:</strong> Node.js with Express</li>
        <li><strong>Database:</strong> MySQL</li>
    </ul>

    <h2>Usage</h2>
    <ol>
        <li>Clone the repository to your local machine.</li>
        <li>Install dependencies for both the frontend and backend using npm or yarn.</li>
        <li>Start the backend server using the command <code>nodemon index</code> .</li>
        <li>Start the frontend server using the command <code>npm start</code> or <code>yarn start</code>.</li>
        <li>Open your web browser and navigate to the provided URL to access the application.</li>
    </ol>
    
    
    <h2>Database Setup</h2>
<p>To set up the database for this project, follow these steps:</p>
<ol>
    <li>Create a MySQL database named <code>movie</code>.</li>
    <li>Create a table named <code>imdb</code> with the following columns:</li>
    <ul>
        <li><code>Movie_Title</code>: VARCHAR</li>
        <li><code>Year</code>: INT</li>
        <li><code>Director</code>: VARCHAR</li>
        <li><code>Actors</code>: VARCHAR</li>
        <li><code>Rating</code>: FLOAT</li>
        <li><code>Runtime</code>: INT</li>
        <li><code>Censor</code>: VARCHAR</li>
        <li><code>Total_Gross</code>: INT</li>
        <li><code>main_genre</code>: VARCHAR</li>
        <li><code>side_genre</code>: VARCHAR</li>
    </ul>
    <li>Populate the table with sample data or import your own dataset.</li>
</ol>


    <h2>Contributing</h2>
    <p>Contributions are welcome! Please feel free to fork the repository and submit pull requests to propose changes or improvements.</p>

</body>
</html>
