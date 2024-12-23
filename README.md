# Streamify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Features

**Search Functionality:** Users can search for movies by entering a search term. The search won't execute until a term is provided.

**Loading Indicator:** A loading screen appears while fetching movie data and disappears once the data is loaded.

**Search Results:** Displays the number of search results found. If no results match the search, an appropriate message is shown.

**Movie Details:** Minimal movie information is displayed in the search results. For additional details, users can click the "Movie Details" button, which loads a dedicated component.

**Browse All Movies:** The header includes a "Browse Movies" option that displays a list of all available movies on the server. Each movie includes a "Movie Details" button for further exploration.

**Error Handling:**
Displays a message when no search results are found.
Includes a "Page Not Found" component for incorrect or invalid routes.

## Technology Stack

Frontend: Angular (Version 17.3.11), TypeScript, Bootstrap CSS  
Backend: JSON Server for serving movie data

## Development server

To run this project:

Install Node.js and Angular CLI.

Clone this repository.

Run `json-server --watch movies.json --port 3000` inside applicaiton terminal to start the server containing the movies data.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
