# E-Commerce API Documentation

## Overview

This project is an E-commerce API designed to manage users, products, and eventually orders. The current version includes features for user management, product retrieval, and product creation by admins.

## Features

- **User Management**
  - Register, login, and update user profiles.
  - Admins can update other users.
- **Product Management**
  - Retrieve all products.
  - Create, update, and delete products (admin only).
- **Category Management**
  - Retrieve all categories.
  - Create, update, and delete categories (admin only).

## Technologies Used

- **Backend**: Node.js
- **Database**: MongoDB
- **Libraries**: Mongoose, Axios, Bcrypt, JSON Web Token (JWT)
- **Environment Management**: dotenv

## API Endpoints

### Product Endpoints

#### 1. **Get All Products**
**Endpoint**: `GET /api/products?page=1&limit=10`

**Description**: Retrieve a list of all available products with pagination support.

**Query Parameters**:
- `page`: Page number (default: 1).
- `limit`: Number of products per page (default: 10).

---

#### 2. **Create a Product**
**Endpoint**: `POST /api/products`

**Description**: Add a new product. Admin access is required.

**Request Body**:
```json
{
    "name": "Test Product",
    "price": 99.99,
    "description": "Product description",
    "category": "category_id",
    "imageUrl": "link_to_image",
    "sizes": [
        { "size": "M", "stock": 10 },
        { "size": "L", "stock": 5 }
    ]
}
```

---

#### 3. **Update a Product**
**Endpoint**: `PUT /api/products/:id`

**Description**: Update an existing product by ID. Admin access is required.

**Request Body**:
```json
{
    "name": "Updated Product",
    "price": 89.99,
    "description": "Updated description",
    "category": "new_category_id",
    "imageUrl": "new_image_link",
    "sizes": [
        { "size": "S", "stock": 8 },
        { "size": "XL", "stock": 12 }
    ]
}
```

---

#### 4. **Delete a Product**
**Endpoint**: `DELETE /api/products/:id`

**Description**: Delete a product by ID. Admin access is required.

---

### Category Endpoints

#### 1. **Get All Categories**
**Endpoint**: `GET /api/categories`

**Description**: Retrieve all available categories.

---

#### 2. **Get Category by ID**
**Endpoint**: `GET /api/categories/:id`

**Description**: Retrieve a single category by its ID.

---

#### 3. **Create a Category**
**Endpoint**: `POST /api/categories`

**Description**: Add a new category. Admin access is required.

**Request Body**:
```json
{
    "name": "Category Name",
    "description": "Category Description"
}
```

---

#### 4. **Update a Category**
**Endpoint**: `PUT /api/categories/:id`

**Description**: Update an existing category by ID. Admin access is required.

**Request Body**:
```json
{
    "name": "Updated Category Name",
    "description": "Updated Category Description"
}
```

---

#### 5. **Delete a Category**
**Endpoint**: `DELETE /api/categories/:id`

**Description**: Delete a category by ID. Admin access is required.

---

### User Endpoints

#### 1. **Register a User**
**Endpoint**: `POST /api/register`

**Description**: Register a new user.

**Request Body**:
```json
{
    "name": "User Name",
    "email": "user@example.com",
    "password": "yourpassword"
}
```

---

#### 2. **Login a User**
**Endpoint**: `POST /api/login`

**Description**: Log in an existing user.

**Request Body**:
```json
{
    "email": "user@example.com",
    "password": "yourpassword"
}
```

---

#### 3. **Update User Profile**
**Endpoint**: `PUT /api/users/update`

**Description**: Update the logged-in user's profile.

**Request Body**:
```json
{
    "name": "Updated Name"
}
```

---

#### 4. **Update Other Users** (Admin Only)
**Endpoint**: `PUT /api/users/update/:id`

**Description**: Update another user's profile. Admin access is required.

**Request Body**:
```json
{
    "role": "admin"
}
```

---

#### 5. **Get All Users** (Admin Only)
**Endpoint**: `GET /api/users`

**Description**: Retrieve a list of all users with role `user`.

---

#### 6. **Delete a User** (Admin Only)
**Endpoint**: `DELETE /api/users/:id`

**Description**: Delete a user by ID. Admin access is required.

---

## Notes

- Ensure to include a valid JWT token in the `Authorization` header for endpoints requiring authentication.
- Use the `.env` file to manage sensitive data like database credentials and JWT secrets.

---

## Future Plans

- Implement order management API endpoints.
- Implement pagination for user retrieval for the admin dashboard.

---

Feel free to raise issues or contribute to this project on GitHub!

