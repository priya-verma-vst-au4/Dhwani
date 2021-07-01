const express = require('express');
const router = express.Router();

require('../db/cons');
const Child = require('../module/childSchema');

router.post('/child', async (req, res) => {
    const {name, sex, d_o_b, fathers_name, mothers_name, state, district} = req.body;

    if( !name || !sex|| !d_o_b|| !fathers_name|| !mothers_name ||!state|| !district){
        res.status(422).json({error: "All fields are required"})
    }
try{
const child = new Child({ name, sex, d_o_b, fathers_name, mothers_name, state, district});
//console.log(child)

            await child.save();

                res.status(201).json({message:"Child registered successfully"})
        } catch (error) {
        console.log ("err")
        
    }
    
})


router.get('/child', async(req,res) => {
    try{
           const childs = await Child.find(req.params)
           res.json(childs)
    }catch(err){
        res.send('Error ' + err)
    }
})



module.exports = router
