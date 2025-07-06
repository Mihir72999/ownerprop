import axios from 'axios'
import express from 'express'

const app = express()

app.get('/',async(req ,res)=>{
 const api = 'pt_62oy1a0vq0o6y7e4hqw7thv4bfmilgnr'
 const email = 'theovandepol@gmail.com'
 const author = Buffer.from(`${email}:${api}`).toString('base64')   
const data = await axios.get('https://api.ownerrez.com/v2/properties',{
    headers:{
        'Authorization':`Basic ${author}`,
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
})
res.json(data.data)
})

app.listen(3000 , ()=>console.log('server running'))