const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('jwtSecret');

//register 
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const candidate = await User.findOne({email});

        if(candidate) {
            return res.status(400).json({
                message: "Введите другой email"
            })
        };

        const hashedPassword = await bcrypt.hash(password,12);
        const user = new User({
            email,
            password: hashedPassword
        })

        await user.save();
        res.status(201).json({message: 'пользователь успешно создан'});
    } catch(e) {
        return res.status(500).json({ message: 'Что пошло не так, попробуйте позже' });
    }
})

//login
router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({message: "Такого пользователя не существует"});
        };

        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch) {
            return res.status(400).json({message: "неверный пароль"})
        };

        const token = jwt.sign(
            { userId: user.id },
            secret,
            { expiresIn: '1h' }
        )

        res.json({token, userId: user.id})


    } catch(e) {
        return res.status(500).json({ message: 'Что пошло не так, попробуйте позже' });
    }
})

module.exports = router;