//Primeiro exercicio do Eloquent JavaScript
//Resultado esperado são sete #, fazendo assim uma "escada"

let cont = 0;
let tri = "#";

while (cont <= 6) {
    console.log(tri)
    tri = tri + "#"
    cont++
};

//----------------------------------------------------------------


//Precisamos saber 
console.log("Rafaela acertou: " + (15/50*100) + ("% da sua prova"));

//----------------------------------------------------------------

/* Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), imprima Buzz.
Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles).
(Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem significativa de candidatos programadores. Então se você resolvê-la, você está autorizado de se sentir bem consigo mesmo). */

/* let cont1 = 1;

while (cont1 <= 100) {
    if ((cont1 %3) == 0 && (cont1 %5) == 0) {
        console.log('Fizz Buzz ' + cont1)
        cont1++
    } else if ((cont1 %3) == 0) {
        console.log('Fizz ' + cont1)
        cont1++
    } else if ((cont1 %5) == 0) {
        console.log('Buzz ' + cont1)
        cont1++
    } else {
        console.log(cont1)
        cont1++
    }
} */

//Solução do livro
/* for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  } */

//----------------------------------------------------------------
let output = '';

for (size = 1, column = 1; size <= 8; size++, column++) {
    
    if (size <= column) {
        output += ' #'
   
    } else if (output.length == 8) {
        console.log(output)
   
    } else if (column > 8){
        break;
    } 
    
}