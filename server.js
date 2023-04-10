import express from  'express'
import dataRoute from './routes/dataRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/get-data",dataRoute)

app.listen(4000,() => {
    console.log('Port running on 4000')
})
