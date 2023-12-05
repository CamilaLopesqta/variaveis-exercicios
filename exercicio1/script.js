/* ## Parte 1
Construa um programa, seguindo as instruções abaixo:

**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor a essa variável.

**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor a essa variável.

**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    

>💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
    

**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

**g)** Para finalizar, imprima na tela a mensagem: "Olá, `nome`,  você tem `idade` anos". Lembre-se: `nome` e `idade` são os valores inseridos pelo usuário.

>💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
```jsx
console.log(valor1, valor2)
``` */

/* let nome1= ""
let idade1 = ""
console.log(typeof nome1, "e", typeof idade1) */

// apareceu undefined para as duas variáveis
// apareceu undefined por não ter atrbuído valores

let nome1 = prompt("Qual é o seu nome?")
let idade1 = Number(prompt("Qual a sua idade?"))

console.log(typeof nome1, "e", typeof idade1)

//apareceu uma string e um number

console.log("Olá,", nome1, "você tem", idade1, "anos!")

//após digitar console.log acima apareceu a frase "Olá, Camila você tem 40 anos!"
