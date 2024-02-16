//## Parte 1
//Construa um programa, seguindo as instruções abaixo:
//**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor a essa variável.
let nome = ""

//**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor a essa variável.
let idade = ""

//**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
//console.log(typeof nome, typeof idade)

//**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//quando colocamos as aspas aparece como string, porém a idade seria number e não string

//**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let nome1 = prompt("Qual é o seu nome?")
let idade1 = Number(prompt("Qual a sua idade?"))
console.log(typeof nome1, "e", typeof idade1) 

//>💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
//Não retornou erro, estavam certos

//**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
//retornou uma string, que seria o nome e um number que seria a idade

//**g)** Para finalizar, imprima na tela a mensagem: "Olá, `nome`,  você tem `idade` anos". Lembre-se: `nome` e `idade` são os valores inseridos pelo usuário.
console.log("Olá,", nome1, "você tem", idade1, "anos!")

//>💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
//após digitar console.log acima apareceu a frase "Olá, Camila você tem 40 anos!"
