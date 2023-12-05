/* # Exercício 3
Você foi contratade para criar um programa de RH que **realiza o cadastro de pessoas colaboradoras** e **armazena suas respostas**. 
1) Este programa deve perguntar à pessoa colaboradora:
   a) Nome completo 
   b) Data de nascimento (utilize as / ) 
   c) Endereço
   d) CPF
   e) Escolaridade
   f) Possui CHN?
   g) Quantos filhes possui?
   h) Cargo atual
   i) Salário
   j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel
   k) Informe o ano de admissão
2) Utilize o **casting** para a conversão de tipos das variáveis que recebem números.
3) Imprima no console o tipo de todas as variáveis.
4) Imprima no console um relatório da pessoa colaboradora. */


let nomeCompleto = prompt("Qual seu nome completo?")
let dataDeNascimento = Number(prompt("Qual sua data de nascimento?"))
let endereço = prompt("Qual seu endereço?")
let cpf = Number(prompt("Qual seu CPF?"))
let escolaridade = prompt("Qual sua escolaridade?")
let cnh = prompt("Possui CNH?")
let numeroFilhos = Number(prompt("Quantos filhos possui?"))
let cargoAtual = prompt("Qual seu cargo atual?")
let salario = Number(prompt("Qual seu salário?"))
let comissao = confirm("Recebe comissão? Se sim clique em confirma, se não em cancelar")
let anoDeAdmissão = Number(prompt("Informe o ano de admissão"))

console.log(typeof nomeCompleto)
console.log(typeof dataDeNascimento)
console.log(typeof endereço)
console.log(typeof cpf)
console.log(typeof escolaridade)
console.log(typeof cnh)
console.log(typeof numeroFilhos)
console.log(typeof cargoAtual)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof anoDeAdmissão)

console.log(nomeCompleto)
console.log(dataDeNascimento)
console.log(endereço)
console.log(cpf)
console.log(escolaridade)
console.log(cnh)
console.log(numeroFilhos)
console.log(cargoAtual)
console.log(salario)
console.log(comissao)
console.log(anoDeAdmissão)

