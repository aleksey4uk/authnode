const { Router } = require('express');
const auth = require('../middleware/auth_middleware');
const News = require('../models/news');
const User = require('../models/user');
const router = Router();

//get home page;
router.get('/home', auth, async (req, res) => {
   try {
      const id = req.user.userId;
      const allNews = await News.find({owner: id});
      res.json(allNews);
   } catch {
      return res.status(500).json({ message: 'Что пошло не так, попробуйте позже' });
   }
})

//add news to mongo;
router.post('/add', auth, async (req, res) => {

   try {
      const {title, text} = req.body;
      if(title.length <= 3 || text.length <= 10) {
         return res.status(201).json({message: "Извините, произошла ошибка"});
      } 
      
      const id = req.user.userId;

      const news = new News({ title, text,  owner: id});

      const results = await news.save();

      res.json({load: true});

   } catch(e) {
      res.status(201).json({message: "Извините, произошла ошибка"});
   }   
})

module.exports = router;
