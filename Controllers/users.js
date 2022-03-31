const users = require('../data/index')
const { name, email, id } = require('../data/sampleUser')

let nextUserId = 1; 
users.forEach(function(user){
    if (nextUserId => user.id){
        nextUserId = user.id + 1
    }
})


const getAllUsers = (req,res) => {
  res.json(users)
}

const getUserById =  (req,res) =>{
    console.log('inside get user by id')
    const userId = req.params.id
    console.log(userId)
    const found = users.find((item)=>{
        return item.id == userId
    })
    if(!found){
        return res.json('user does not exist')
    }
    res.json(found)
}

const createUser = (req,res) => {
 console.log(req.body)
 const body = {...req.body}
 users.push(body)
 res.json(users)
}

const updateUser= (req,res) => {
    
}

const deleteUsers = (req,res) => {

}


module.exports = {
    getUserById,
    createUser,
    getAllUsers,
    deleteUsers,
    updateUser
}