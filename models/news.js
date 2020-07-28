const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    title : {type: String, required: true, unique: true}, 
    text: {type: String, required: true},
    img: {type: String, default:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
    dateCreated: {type: Date, default: Date.now },
    owner: { type: Types.ObjectId, ref: 'User' }
})


module.exports = model('News', schema)