const User = require("../models/user.models");
const axios = require('axios');

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
    //encrypt password
    const newUuser = await User.create(req.body);

    res.status(201).json({
        newUuser,
        status: "success"
    })
    } catch (error) {
        res.send(error)
    }
}

exports.UpdateUser = async (req, res) => {
    
    try {
        console.log(req.body)
        const updatedUser = await User.findOneAndUpdate({email: req.body.email}, req.body.data, {new: true});

        axios({
            method: 'post',
            url: 'http://localhost:4321/user',
            data: {
              username: req.body.email,
              data: req.body.data
            }
          });
        
        res.status(200).json({
            status: "success",
            updatedUser
        })

    } catch (error) {
        res.send(error)
    }
}