# Payments App

## Overview
This is a simple payments app that allows users to perform basic transactions. The backend is built with Node.js using Express, Zod for input validation, JWT for authentication, and Mongoose as the ODM. The frontend is developed using React, React Router DOM, and Tailwind CSS, ensuring a responsive design across various devices.

## Features
1. **Sign Up:**
   - Endpoint: `/api/v1/signup`
   - Allows users to create an account.

2. **Sign In:**
   - Endpoint: `/api/v1/signin`
   - Enables users to log in securely using JWT authentication.

3. **Get All Users:**
   - Endpoint: `/api/v1/users`
   - Retrieves a list of all registered users.

4. **Get Balance:**
   - Endpoint: `/api/v1/balance`
   - Fetches the balance of the authenticated user.

5. **Transfer Money:**
   - Endpoint: `/api/v1/transfer`
   - Facilitates transferring money from one user to another.

## Technologies Used
- **Backend:**
  - Node.js
  - Express
  - Zod (input validation)
  - JWT (authentication)
  - Mongoose (ODM)

- **Frontend:**
  - React
  - React Router DOM
  - Tailwind CSS

## Setup
1. **Backend:**
   - Install dependencies: `npm install`
   - Set up MongoDB and configure connection in `.env` file.
   - Run the server: `npm start`

2. **Frontend:**
   - Install dependencies: `npm install`
   - Run the app: `npm start`

## Usage
1. **Sign Up:**
   - Visit the sign-up page and fill in the required details.

2. **Sign In:**
   - Log in using your credentials on the sign-in page.

3. **Get All Users:**
   - Navigate to the dashboard page to see a list of registered users.

4. **Get Balance:**
   - Check your balance on the dashboard page.

5. **Transfer Money:**
   - Use the send money functionality to send money to other users.

## Contributing
Feel free to contribute by submitting issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
[Hashir Khan]