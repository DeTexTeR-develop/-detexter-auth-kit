🔐 express-auth-kit

A lightweight and reusable JWT authentication toolkit for Express.js applications.

This package provides simple utilities and middleware to handle authentication using JSON Web Tokens (JWT), so you don’t have to rewrite auth logic in every project.


Features
	•	Easy-to-use JWT authentication middleware
	•	Token generation (signToken)
	•	Token verification (verifyToken)
	•	Plug-and-play design for any Express app
	•	Fully configurable (no hardcoded secrets)


Installation
```bash
npm i detexter-auth-kit
```

Usage

1. Import the package
```js
const { authMiddleware, signToken } = require("express-auth-kit");
```

2. Generate a Token (Login Example)
```js
const token = signToken(
  { id: user._id, email: user.email },
  { secret: "your_secret_key", expiresIn: "1h" }
);
```
3. Protect Routes
```js
app.get(
  "/profile",
  authMiddleware({ secret: "your_secret_key" }),
  (req, res) => {
    res.json({ user: req.user });
  }
);
```

=> API Reference

authMiddleware(options)

Express middleware to protect routes.

Options:
	•	secret (required): JWT secret key

Behavior:
	•	Reads token from Authorization header
	•	Verifies token
	•	Attaches decoded payload to req.user
	•	Returns 401 if invalid or missing

signToken(payload, options)


Generates a JWT token.
Parameters:
	•	payload (object): Data to encode in token
	•	options.secret (required): Secret key
	•	options.expiresIn (optional): Token expiry (default: 1h)


verifyToken(token, secret)
    Verifies a JWT token and returns decoded data.

How It Works
	1.	User logs in → token is generated
	2.	Client sends token in request header
	3.	Middleware verifies token
	4.	User data is attached to req.user