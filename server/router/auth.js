//const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

require('../db/cons');
const User = require('../module/userSchema');

router.get('/', (req, res) => {
    res.send("Home page")
})


router.post('/register', async (req, res) => {
    const {name, email, phone, password, cpassword } = req.body;

    if( !name || !email || !phone || !password || !cpassword ){
        res.status(422).json({error: "All fields are required"})
    }

    try {
        const userExists = await User.findOne({ email: email });
            if(userExists){
                return res.status(422).json({ error: "User already exists"})
            }else if(password != cpassword){
                return res.status(422).json({error: "password does not match with confirm password"})
            }else {
                const user = new User({ name, email, phone, password, cpassword });

            await user.save();

                res.status(201).json({message:"User registered successfully"})
    }         
    } catch (error) {
        console.log ("err")
        
    }
    
})

router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body
        if(!email || !password){
            return res.status(400).json({error: "Please enter the credentials"})
        }
    const userLogin = await User.findOne({email:email})
     
    if(userLogin){
        const isMatch = await bcrypt.compare(password, userLogin.password)

        token = await userLogin.generateAuthToken();

        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true
        })

    if(!isMatch){
        res.status(400).json({error: "Invalid User pass"})
    }else{
        res.json({message:"User Login Successfully"})
    }
    }else {
        res.status(400).json({error: "Invalid User"})
    }
    } catch (error) {
        console.log("Error")
    }
})


router.get('/logout', async(req, res) =>{
    try {
        res.json({message:"User Logout Successfully"})
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router