let idade = 20;
let situacao = idade >= 18 ? "Maior de idade" : "Menor de idade"; console.log(situacao);

const statusNota = (nota) => {
    let status = nota >= 7 ? "Aprovado" : "Reprovado"
    return status
};

console.log(statusNota(9))

const textoBotao = (logado) => {
    let statusCliente = logado >= true ? "Sair" : "Entrar"
    return statusCliente
};

console.log(textoBotao(true))