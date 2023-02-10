const express = require('express');
const cors = require('cors');
const formidable = require('express-formidable');
const {sendMail} = require('./correo.js')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(formidable());


app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

app.post("/reclamos", (req, res) => {
    let {nombre, correo, asunto, reclamo} = req.fields
    
    sendMail(nombre, correo, asunto, reclamo)
        .then(respuesta => {
            res.send({code: 200, message: respuesta});
        })
        .catch(error =>{
            res.status(500).send({code: 500, message: error})
        })

    
})


app.listen(3000, () => console.log("Escuchando en http://localhost:3000"))