const { splice } = require('../data/index');
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
console.log("inside my PUT fuction", req.params.id)
let updateNextUser = { 
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
}
const foundId = users.some(user => user.id == req.params.id) // Does the user exist in the database? searches for the id in the database//
 if (foundId){
     console.log("did you find the id? id is", foundId)
     users.splice(req.params.id + 1, 1 , updateNextUser)
 }
 res.json(updateNextUser) //will return the found user//
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