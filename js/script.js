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

/*botao tema*/
document.getElementById('theme-toggle').addEventListener('change', function() {
    var body = document.body;
    if (this.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});