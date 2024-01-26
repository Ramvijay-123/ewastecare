const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/', function(req, res, next) {
  // Check if the 'token' cookie is present in the request
  const token = req.cookies.token;

  if (token) {
    // If the token is present, verify it and extract information
    jwt.verify(token, process.env.TOKENCODE, (err, decoded) => {
      if (err) {
        // Token is invalid or expired
        res.render('index', { isLoggedIn: false });
      } else {
        // Token is valid, you can use decoded data
        res.render('index', { isLoggedIn: true });
      }
    });
  } else {
    // Token is not present
    res.render('index', { isLoggedIn: false });
  }
});

module.exports = router;
