// // userRoutes.js
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const jwtsecret = 'nfc_shanks'; // Make sure this matches the secret key used for token generation

// // Middleware to verify the JWT token
// function verifyToken(req, res, next) {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token.replace('Bearer ', ''), jwtsecret);
//     req.user = decoded; // The user data is now available in the request object
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// }

// // Example route to retrieve user data
// router.get('/userdata', verifyToken, (req, res) => {
//   // Access user data from the request object (req.user)
//   const userId = req.user.id;

//   // Use userId to fetch user-specific data (e.g., from MongoDB)
//   // Replace this with your own logic to fetch user data
//   // For example:
//   // const user = await User.findById(userId);

//   // Return the user data as a response
//   // res.json(user);

//   // For simplicity, sending dummy data as a response
//   res.json({ username: 'exampleUser', email: 'user@example.com' });
// });

// module.exports = router;
