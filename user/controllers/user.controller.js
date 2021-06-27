const User = require("../models/user.models");
const axios = require('axios');
const fs = require("fs");
var CryptoJS = require("crypto-js");

exports.createUser = async (req, res) => {
    try {
        /*
        console.log(req.body);
        let bytes = CryptoJS.AES.decrypt(req.body.hash, "Secret Passphrase");
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
 
        console.log(originalText)
        */
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

      const encryptedUsers = CryptoJS.AES.encrypt(JSON.stringify(users), "secret key 123").toString();
      
    res.status(200).json({
      status: "success",
      results: users.length,
      data : encryptedUsers
    })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.getUsersList = async (req, res) => {

    const users = await  User.find();

    res.render("user/list", { users})
}

exports.changeStatus = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const updatedUser = await  User.updateOne({email: req.params.userEmail }, req.body);
    console.log(updatedUser);
    res.status(200).json({
        status: "success",
        updatedUser
      })
}