var nomes = [];
var grupos = [];

function add(){
    //adiciona um novo item ao array
    var integrante = prompt('Digite o nome do integrante');
    
    if(integrante != null)
        nomes.push(integrante);

    atualizarTela();
}
function grupo_aleatorio()
{
    return Math.floor(Math.random() * grupos.length);
}
function atualizarTela()
{
    //Limpa a lista no html
    document.querySelector(".lista").innerHTML = '';

    for(var i = 0; i < grupos.length; i++) {
        document.querySelector("#grupo" + (i+1)).innerHTML = '';
    }

    
    //Percorre a lista nomes e atualiza na tela
    nomes.forEach((nome) => {
        document.querySelector(".lista").innerHTML += `<li>${nome}</li>`;
    });

    //Atualiza os grupos
    grupos.forEach( (grupo, index) => {
        grupo.forEach( (nome) => {
            document.querySelector("#grupo" + (index + 1)).innerHTML += `<li>${nome}</li>`;
        });
    });
}
function addGrupo() {
    grupos.push(new Array());

    document.querySelector(".grupos").innerHTML = '';
    grupos.forEach( (grupo, index) => {
        document.querySelector(".grupos").innerHTML +=   `
        <div class="grupo">
            <h3>Grupo ${ index + 1 }</h3>
            <ul id="grupo${index + 1}">
            </ul>
        </div>
    `;
    });
}
function gerar(){

    grupos[0] = new Array();
    grupos[1] = new Array();


    if(grupos.length <= 0) {
        alert("Adicione um grupo pelo menos.");
    } else {
        if(nomes.length <= 1)
            alert("Adicione dois integrantes ou mais");
        else {
            nomes.forEach((nome) => {
                var num_gerado = grupo_aleatorio() + 1; //1 ou 2 ao invés de 0 e 1
                
                if(num_gerado == 1) {
                    if(grupos[0].length == nomes.length / grupos.length) {
                        grupos[1].push(nome);
                    } else {
                        grupos[0].push(nome);
                    }
                } else {
                    if(grupos[1].length == nomes.length / grupos.length) {
                        grupos[0].push(nome);
                    } else {
                        grupos[1].push(nome);
                    }
                }
        
            });
        }
    }

    //Atualiza a UI
    atualizarTela();
}

