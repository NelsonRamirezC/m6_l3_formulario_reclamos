const nodemailer = require("nodemailer");

const sendMail = (nombre, correo, asunto, reclamo) => {

    return new Promise((resolve, reject) => {
        let textoReclamo = `
        <h2 style="color:red;">Cliente que reclama: ${nombre}</h2>
        <h2>Coreo del reclamante: ${correo}</h2>
        <h2>Asunto del reclamo: ${asunto}</h2>
        <h2>Reclamo: ${reclamo}</h2>
    `

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "correpruebanodejs@gmail.com", 
          pass: "osvmbgmiyogbwbxy"
        },
        tls: {
            rejectUnauthorized: false,
          },
      });
    
      const mailOptions = {
        from: 'correpruebanodejs@gmail.com',
        to: ["correpruebanodejs@gmail.com", "nelson.ramirez.candia@gmail.com"],
        subject: asunto,
        html: textoReclamo 
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            reject("No pudo ser enviado el correo.");
        } else {
            console.log('Email sent: ' + info.response);
            resolve("Correo ha sido enviado de forma satisfactoria.");
        }
      });

    })
}

module.exports = {
    sendMail
}

