const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS') return next();

  try {

    const token = JSON.parse(req.headers.authorization.split(' ')[1]);

    if (!token) {
      console.log('tokens')
      return res.status(401).json({message: 'Ошибка. Нет авторизации'});
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    
    if(!decoded) return res.status(401).json({message: 'Токен не расшифрован'});

    req.user = decoded;
    
    next();
  } catch(e) {
    return res.status(401).json({message: 'Токен не расшифрован'});
  }
}