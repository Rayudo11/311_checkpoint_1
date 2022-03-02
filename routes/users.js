const { application } = require('express');
const express = require('express')
const router = express.Router()
const users = require('../data/index')


router.get('/', (req,res) => {
    res.json(users)
})

router.get('/:id', (req,res) =>{
    const userId = req.params.id
    console.log(userId)
    const found = users.find((item)=>{
        return item.id == userId
    })
    if(!found){
        return res.json('user does not exist')
    }
    res.json(found)
})


module.exports = router;
