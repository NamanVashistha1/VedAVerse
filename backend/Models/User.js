const mongoose = require("mongoose");

const { Schema } = mongoose;

// const UserSchema = new Schema ({
//     name :{
//         type : String,
//         required : true
//     },
//     email :{
//         type : String,
//         required : true
//     },
//     password :{
//         type : String,
//         required : true
//     },
// });

// module.exports = mongoose.model('User',UserSchema)


const UserSchema = new Schema ({
    username :{
        type : String,
        required : true,
        unique: true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

const SurdataSchema = new Schema ({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    Age :{
        type : Number,
        required : true
    },
    ongoing_prescrip :{
        type : String,
        required : true
    }
}); 

const User = mongoose.model('User', UserSchema);
const  Surdata = mongoose.model('Surdata', SurdataSchema);

module.exports = {
    User,
    Surdata,
  };