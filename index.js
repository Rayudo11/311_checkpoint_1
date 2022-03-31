const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')
const { getAllUsers } = require('./Controllers/users')

const app = express();

app.use(express.json())
app.use('/users', userRoutes)

const port = process.env.PORT || 4000;

// app.get('/', (req, res) => res.send('Hello'))
console.log(getAllUsers)

app.listen(port, () => {
  console.log('app is listening on:', port)
})