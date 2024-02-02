import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'



const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT || 7000
const db = process.env.DB_URI

// mongoose.connect(db)
// mongoose.connection
//          .on('error', console.error)
//          .on('open', () => console.log('DB is successfully connected'))


app.listen(port, console.log(`Server started on port: ${port}.`) )