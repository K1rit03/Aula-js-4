/* Crie Um Algoritimo que leia uma lista e retorne duas novas listas 
contendo numeros pares e numeros impares, a lista deve conter numeros de 
1 a 9 e usar a estrutura de repetição for

// DECLARANDO AS VARIAVEIS

let listaNumeros = [1,2,3,4,5,6,7,8,9];
let pares = [];
let impares = [];


for(let numeros of listaNumeros){
    if(numeros % 2 ==0){
      pares.push(numeros)        
    }else{
      impares.push(numeros)
    }

}
console.log(pares)
console.log(impares)
*/

/*PROFESSORA DE KARATE MIYAGI SAM TEM UMA LISTA DE ALUNOS)OBJETOS)
QUE CONTEM NOME,NOTA1 E NOTA2,POIS ELE PRECISA QUE REALIZE O CALCULO
DA MEDIA DAS NOTAS,E MOSTRAR O NOME DO ALUNO E MEDIA DE CADE ALUNO
const listakaratecas=[
     {nome:"Huguinho",notas:[5,6]},
     {nome:"Zezinho",notas:[7,8]},
     {nome:"Luizinho",notas:[4,8]}
    ]
    for (let aluno of listakaratecas){
        let media = (aluno.notas[0] + aluno.notas[1]) /2;
    console.log(`A MEDIA DO ALUNO ${aluno.nome} é ${media}`)
    }
    */



   /* VOCE FOI CONVIDADE PARA DESENVOLVER UM ALGORITIMO
   PARA UM BINGO DE TERCEIRA IDADE,É PRECISO FAZER O SORTEIO
   COM 6 NUMEROS ENTRE 1 E 60 DE FORMA ALEATORIOA*/

/*
   let sorteio =[];
   while(sorteio.length <6){
   let numero = Math.ceil(Math.random()*60)
   if(numero){
    sorteio.push(numero)
   }
   console.log(sorteio)
   }
   */
  /*
  function calcularPorcentagem(num,porcent){
    return (num/100)*porcent;
    
  }
  console.log(calcularPorcentagem(50,20)
  */
 

   