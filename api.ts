import cors from "cors"
import express,{Request,Response} from "express"

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{console.log(`Listening to port ${PORT}`)})

app.get("/",(req:Request,res:Response)=>{
    res.send("hello there")
})