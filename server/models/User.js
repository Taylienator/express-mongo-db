const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{ type: String, required:true}, //firstname property is a string and its true
        //props gets passed into the mongoose database 

    social:{
        facebook: { type: String, required: false},
        twitter: { type: String, required: false},
        linkedIn: {type: String, required: false}
    },

    lastName :{type: String, required: true},
    email: {type: String, required: true},

    blogs:[{ type: Schema.Types.ObjectId, ref: 'Blog'}]

    // emergencyContact:{
    // emergencyFirstName:{type: String, required: true},
    // emergencyLastName:{type : String, required:true},
    // emergencyEmail: {type: String, required: true}
    // }

});



module.exports = mongoose.model('Blogs', UserSchema);