const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    disabled: String,
    email: {
        type: String,
        unique: true,
        required: [true, "username is required"]
    },
    // password: {
    //     type: String,
    //     required: [true, "password is required"],
    //     minlength: 8
    // }
});

const User = mongoose.model('User', userSchema);

module.exports = User;