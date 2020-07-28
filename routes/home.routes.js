const { Router } = require('express');
const auth = require('../middleware/auth_middleware');
const router = Router();

//get home page;
router.get('/', auth, async (req, res) => {
   res.json({message: 'Токен есть, можно Получать данные'})
})

module.exports = router;
