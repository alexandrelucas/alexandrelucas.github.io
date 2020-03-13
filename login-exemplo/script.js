function validar_login() {
    var login = document.querySelector("#txtLogin").value;
    var senha = document.querySelector("#txtPassword").value;

    // Verifica os campos
    if(login == '' || senha == '') {
        alert("Por favor, preencha os campos Usuário e Senha");
    } else {
            // Username inválido...
        if(login.length > 10 || login.length < 3)
            alert("Por favor digite o nome de usuário entre 3 e 10 caracteres.");
        else {
            // Senha inválida
            if(senha.length > 8 || senha.length < 5) {
                alert("Por favor digite uma senha entre 5 e 8 caracteres.");
            }   
            else {
                // Login Efetuado....
                alert("Login válido.");
            }
        }
        
    }
}
function validar_recuperacao() {
    var email = document.querySelector("#txtEmail").value;

    // Verifica se a caixa de texto do email está vazia OU se o email NÃO contém o @
    // Problema 01: Se a caixa de texto começar com @ ele válida mesmo assim.
    // Problema 02: Se a caixa de texto tiver mais que 1 @ válida mesmo assim.
    if(email == '' || !email.includes('@')) {
        alert('Insira um email válido');
    }
    else {
        alert("Email válido");
    }
}
function validar_cadastro() {
    var login = document.querySelector("#txtLogin").value;
    var senha = document.querySelector("#txtPassword").value;
    var email = document.querySelector("#txtEmail").value;

    if(login == '' || senha == '' || email == '') {
        alert("Preencha todos os campos");
    } else {

        if(login.length > 10 || login.length < 3)
            alert("Por favor digite o nome de usuário entre 3 e 10 caracteres.");
        else {
            if(!email.includes('@'))
                alert("Por favor insira um email válido com @");
            else {
                if(senha.length > 8 || senha.length < 5)
                    alert("Por favor insira uma senha entre 5 e 8 caracteres");
                else {

                    // Validação de Cadastro Efetuada

                    alert("Cadastro Válido.");
                }
            }
        }

    }
}