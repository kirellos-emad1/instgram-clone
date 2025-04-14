import express, {Request, Response, Application} from "express"
import dotenv from 'dotenv'

dotenv.config()

const app:Application =  express()

const port = process.env.PORT || 5050
app.get('/', async(_req:Request, res:Response)=>{
    res.send(`<h1>hello from the server<h1>`)
});


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})