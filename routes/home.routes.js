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

//get all news
router.get('/home/all', auth, async (req, res) => {
   try {
      const id = req.user.userId;
      const allNews = await News.find();
      res.json(allNews);
   } catch {
      return res.status(500).json({ message: 'Что пошло не так, попробуйте позже' });
   }
})

//get one news
router.get('/home/:id', auth, async (req, res) => {   
   try {
      const urlId = req.params.id;
      const oneNews = await News.findById({_id: urlId});

      res.json(oneNews);
   } catch {
      return res.status(500).json({ message: 'Что пошло не так, попробуйте позже' });
   }
})

//add news;
router.post('/add', auth, async (req, res) => {

   try {
      let {title, text} = req.body;
      if(title.length <= 3 || text.length <= 10) {
         return res.status(201).json({message: "Извините, произошла ошибка"});
      } 

      const id = req.user.userId;

      const news = new News({ title, text,  owner: id });

      const results = await news.save();

      res.json({_id: news._id});

   } catch(e) {
      res.status(201).json({message: "Извините, произошла ошибка"});
   }   
})

//remove news item 



module.exports = router;
