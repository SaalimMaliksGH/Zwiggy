# Zwiggy - A Full-Stack Food Ordering Application

Zwiggy is a comprehensive food ordering application built with a modern MERN stack. The project is structured into three main parts: a front-end for users, a back-end API, and a separate admin panel for managing food items and orders.

## Features

-   **User Authentication**: Users can register and log in to the application.
-   **Shopping Cart**: Users can add, remove, and manage items in their cart.
-   **Order Processing**: A full checkout process is implemented with delivery information and payment handling via Stripe.
-   **Order History**: Logged-in users can view their past orders and track their status.
-   **Admin Panel**: A dedicated admin panel allows for:
    -   Adding new food items with images, descriptions, prices, and categories.
    -   Listing all available food items.
    -   Removing food items.
    -   Viewing and updating the status of customer orders.
-   **Responsive Design**: The front-end is designed to provide a seamless user experience on various screen sizes.

## Tech Stack

### Frontend
-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A build tool that provides a fast development environment.
-   **React Router DOM**: For handling client-side routing within the application.
-   **Axios**: A promise-based HTTP client for making API requests.

### Backend
-   **Node.js & Express**: A fast, unopinionated, minimalist web framework for building the API.
-   **MongoDB**: A NoSQL database used to store user, food, and order data. The connection is managed using Mongoose.
-   **Mongoose**: An elegant MongoDB object modeling tool for Node.js.
-   **JWT (JSON Web Token)**: Used for secure user authentication and authorization.
-   **Bcrypt**: A library to hash and compare user passwords securely.
-   **Multer**: A Node.js middleware for handling `multipart/form-data`, primarily for file uploads (e.g., food images).
-   **Stripe**: A payment processing platform used to handle checkout payments.

## Installation & Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (>= 18.0.0)
-   npm (>= 8.0.0)
-   MongoDB instance (local or hosted)

### Backend Setup

1.  Navigate to the `back-end` directory.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `back-end` folder with your environment variables. The existing `.env` file shows what is needed, but you should replace the secret keys with your own.
4.  Start the backend server:
    ```bash
    npm run server
    ```
    The server will run on port `4000`.

### Frontend Setup

1.  Navigate to the `front-end` directory.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    This will start the front-end application, typically on `http://localhost:5173`.

### Admin Panel Setup

1.  Navigate to the `admin` directory.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

---

### About this repository

Zwiggy is a full-stack food delivery application designed to provide a modern and seamless food ordering experience. The project is built with React and Vite for the front-end, a Node.js/Express backend, and a MongoDB database. It includes a user-facing application, a user authentication system, a shopping cart, and an admin panel for food and order management. The mission of this project is to showcase a comprehensive, real-world application built with these technologies.
