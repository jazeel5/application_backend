const connectToMongo = require('./db');
const express = require('express')
const StudentRouter = require('./routes/crud')
const TeacherRouter = require('./routes/teacher_route')
const cors = require('cors')

connectToMongo();


const app = express()
const port = 5001

app.use(express.json());

app.use(cors())


app.use("/test",(req,res)=>{
  res.send("hello world")
})

app.use('/api/student',StudentRouter)

app.use('/api/teacher',TeacherRouter)



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

