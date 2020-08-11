const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String,required: true,unique: true},
    password: {type: String, required: true},
    news: [{ type: Types.ObjectId, ref: 'News' }],
    img: {type: String},
    name: {type: String, default: 'Не определено'},
    surname: {type: String, default: 'asdasd'},
    date: { type: Date, default: Date.now },
})

module.exports = model('User', schema)