Features:

# OTP-based signup and login:

- Verifies user identity through a unique, temporary code sent via email.

# JWT token authentication:

- Generates and validates tokens for secure API access, avoiding the need to store passwords on the server.

# MongoDB storage:

- Manages user data securely and efficiently in a popular NoSQL database.

## API Endpoints

# Login

- http://localhost:5000/api/v1/login
- body:{
  "email":"kumarsatwik6@gmail.com",
  "password":"test1234"
  }

# Signup

- http://localhost:5000/api/v1/signup
- body:{
  "name":"kumar"
  "email":"kumarsatwik6@gmail.com",
  "password":"test1234"
  }

# verify

- http://localhost:5000/api/v1/verify
- body:{
  {
  "email":"kumarsatwik6@gmail.com",
  "otp":"697104"
  }
  }

# home

- http://localhost:5000/api/v1
- headers:{
  authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDVmYWFiMjA4YWRlY2FhY2Q0MGZmZCIsImVtYWlsIjoia3VtYXJzYXR3aWs2QGdtYWlsLmNvbSIsImlhdCI6MTcwODUyMjg2NSwiZXhwIjoxNzA4NTIyOTI1fQ.yxEYscYZWXpY0NeniC8bYQECO1kDGFzsFY1MejYDBDg"
  }
"# invoice-backend" 
