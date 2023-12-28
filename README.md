Registration Form
This project is a simple user registration form implemented using HTML, CSS, JavaScript, MongoDB, Node.js, and Express.js.

Features
1. User Registration with Validation
The registration form includes fields for first name, last name, email, phone number, gender, password, and confirm password. The server validates the form data, ensuring that the password and confirm password fields match.

2. Password Confirmation
Users are required to confirm their password by entering it twice during registration. The server checks if the password and confirm password match before storing the user's data in the MongoDB database.

3. Navigation with Top Navigation Bar
The application includes a responsive top navigation bar that facilitates easy navigation between the home, registration, login, and logout pages.

4. Integration with MongoDB for Data Storage
User registration data is stored in a MongoDB database. The project includes a simple MongoDB model (registers.js) and a connection file (conn.js) in the src directory.

Technologies Used
HTML: Used for structuring the web pages and creating the registration form.

CSS: Used for styling the web pages and ensuring a visually appealing user interface.

JavaScript: Used for form validation and enhancing the interactivity of the registration form.

Node.js: A JavaScript runtime used for server-side development.

Express.js: A web application framework for Node.js, used for creating the server and handling routes.

MongoDB: A database used for storing user registration data.

Open Your Browser:

Open your web browser and navigate to http://localhost:3000 to view and interact with the registration form.

Usage
Homepage:

Visit the homepage to navigate through the registration and login pages.

Registration:

Fill in the registration form with your details, including first name, last name, email, phone number, gender, password, and confirm password.

Login:

Navigate to the login page to log in using your registered email and password.


