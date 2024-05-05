const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

let mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'emaildestino@gmail.com',
    subject: 'Contato do site',
    text: 'Nome: ' + nome + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nMensagem: ' + mensagem
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});