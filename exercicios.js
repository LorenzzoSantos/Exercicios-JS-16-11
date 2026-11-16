const saudacao = (nome) => {
  return "Olá, " + nome;
};

console.log(saudacao("Ana"))

const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3))

const comDesconto = (preco) => { const desconto = preco * 0.10; const final = preco - desconto; console.log(final); }; comDesconto(100);