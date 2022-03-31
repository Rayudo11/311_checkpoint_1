const express = require('express')
const router = express.Router()
const { 
    getUserById,
    createUser,
    getAllUsers,
    deleteUsers,
    updateUser
}= require('../Controllers/users')


router.get('/',getAllUsers)

router.get('/:id',getUserById)

router.post('/createUser', createUser)

router.delete('/:id', deleteUsers)

router.put('/:id', updateUser)



module.exports = router;
