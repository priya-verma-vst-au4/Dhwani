const express = require('express');
const router = express.Router();

require('../db/cons');
const State = require('../module/stateSchema');


router.post('/state', async (req, res) => {
    const {name} = req.body;

    if( !name){
        res.status(422).json({error: "Please add state name"})
    }
try{
const state = new State({ name });

            await state.save();

                res.status(201).json({message:"State added successfully"})
              
    } catch (error) {
        console.log ("err")
        
    }
    
})


router.get('/state', async(req,res) => {
    try{
           const states = await State.find(req.params)
           res.json(states)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router
