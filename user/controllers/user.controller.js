const User = require("../models/user.models");
const axios = require('axios');
const fs = require("fs")

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
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body.data, {new: true});
/*
        axios({
            method: 'patch',
            url: `http://localhost:4321/user/${req.params.userId}`,
            data: req.body.data
         });
*/        
        res.status(200).json({
            status: "success",
            updatedUser
        })

    } catch (error) {
        res.send(error)
    }
}

exports.getAllusers = async (req, res) => {
    try {
        
      const users = await User.find();
  
      res.status(200).json({
      status: "success",
      results: users.length,
      data : users
    })
    } catch (error) {
        res.send(error);
    }
}