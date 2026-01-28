# Student-Task-Manager
# Student-Task-Manager
1. Project Title & Goal

Student Task Manager – A single-page web application that allows students to add, view, update, and delete tasks efficiently with a clean and interactive user interface.

2. Setup Instructions

Follow these steps to run the project locally:

# Step 1: Clone the repository
git clone https://github.com/SavanLovanshi/Student-Task-Manager

# Step 2: Move into the project directory
cd Student-Task-Manager

# Step 3: Install dependencies
npm install

# Step 4: Start the server
node server.js

Now open your browser and go to:

http://localhost:3000


The Logic (How you thought)
Why did you choose this approach?

I chose a Single Page Application (SPA) approach to provide a smooth and fast user experience without reloading the page. Using HTML, CSS, JavaScript, Node.js, and Express, I separated frontend and backend logic, making the application modular and easy to maintain. Tasks are handled using REST-style routes, which makes the system scalable for future features like authentication and databases.

What was the hardest bug you faced, and how did you fix it?

The hardest issue I faced was the “Cannot GET /” error when running the server. This happened because the root route (/) was not properly defined in Express. I fixed it by correctly setting up the route to serve the main HTML file using res.sendFile() and ensuring the static middleware was configured properly. This helped the browser correctly load the SPA entry point.

4. Output Screenshots
Home Page – Task Dashboard
Add Task Functionality
Task List Display

(Screenshots show successful rendering, task creation, and task display as required.)

5. Future Improvements

User authentication (login/signup for students)
Database integration using MongoDB for persistent task storage
Task priority levels and due-date reminders
Improved UI animations and dark mode
Mobile responsiveness for better usability on phones.

