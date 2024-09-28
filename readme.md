# E-Commerce Project

## Overview

This is an E-commerce API which includes products and users (orders api will be added soon).

## Features

-   User registration, login and update
-   Update other users (admin only)
-   Get products
-   Create products (admin only)

## Technologies Used

-   **Backend**: Node.js
-   **Database**: MongoDB
-   **Libraries**: Mongoose, Axios, Bcrypt, JSON Web Token (JWT)
-   **Environment Management**: dotenv

## Usage

-   #### Get all products: /api/products

    Send a GET request to /api/products.

-   #### Create a product: /api/products

    (Admin access required) Send a POST request to /api/products with the following body:

    ```bash
        {
            "id": 21,
            "title": "Test",
            "price": 99,
            "description": "description",
            "category": "Shoes",
            "image": "link"
        }
    ```

-   #### Register: /api/register

    Send a POST request to /api/register with the following body:

    ```bash
          {
              "name": "User Name",
              "email": "user@example.com",
              "password": "yourpassword"
          }
    ```

-   #### Login: /api/login

    Send a POST request to /api/login with the following body:

    ```bash
      {
          "email": "user@example.com",
          "password": "yourpassword"
      }
    ```

-   #### Update user: /api/users/update

    Send a PUT request to /api/users/update with the following body:

    ```bash
      {
          "name": "Updated name"
      }
    ```

-   #### Update user: /api/users/update/:id

    (Admin access required) Send a PUT request to /api/users/update/:id with the following body:

    ```bash
      {
          "role": "admin"
      }
    ```
