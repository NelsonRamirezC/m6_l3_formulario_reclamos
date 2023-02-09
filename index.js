const express = require('express');
const cors = require('cors');
const formidable = require('express-formidable');
const {sendMail} = require('./correo.js')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(formidable());

app.post("/reclamos", (req, res) => {
    let {nombre, correo, asunto, reclamo} = req.fields
    
    sendMail(nombre, correo, asunto, reclamo);

    res.send({code: 200, message: "Reclamo recibido"});
})


app.listen(3000, () => console.log("Escuchando en http://localhost:3000"))