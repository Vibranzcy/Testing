```javascript
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', authMiddleware, loginController.login);

module.exports = router;
```