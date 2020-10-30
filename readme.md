## Inicio dos estudos sobre JS

Vamos pelo básico, logo abaixo irei colocar os nomes importantes de conteudo JS:

1- Dicionário:
    1.1 String = Conteudo do tipo texto, que é passado geralmente entre "Tudo aqui dentro é considerado texto para o JS";
    1.2 concatenar = Une duas cadeias de dados

## Concatenação

Concatenação é a união de dois dados. Exemplo:

console.log("18" + "20")

Ao imprimir este console.log não ira acontecer uma soma de dois números, pois tudo que está entre "" é considerado texto para o JS, então ele ira concatenar os dois dados e assim surgindo um novo dado que tera como resultado 1820 e não 38. Temos que ficar atentos a esse tipo de "pegadinha" no JS.

Porém podemos nos perguntar e se tentarmos concatenar uma string com um número? Exemplo:

console.log("18" + 20)
console.log(18 + "20")

O que sera impresso no console será: 1820 novamente e porque? O JS vai pegar o primeiro tipo e tentar converter o segundo em string também, assim fazendo a concatenação dos dois. O mesmo vale para a segunda forma de escrita.

Porém devemos ter cuidado ao fazer o seguinte:

console.log ('A soma das idade é '+ 20 + 10 + 30);

O que esperamos é que ele some as idades porém isso não vai acontecer, o seguinte ira ocorrer.

console.log ('A soma das idade é '+ 20 + 10 + 30);
             'A soma das idade é 20'
             'A soma das idade é 2010'
             'A soma das idade é 201030'

Ele vai concatenando a operação e não somando!

Essa mesma explicação está na parte de operação matematica junto com sua solução, que nada mais que colocar parenteses, achei justo deixar como referencia nos dois topicos!

## Instrução Alert

1- Vou colocar um esquema de alert só para ter o nome das coisas:

alert("Texto aqui!!!!");

alert = Instrução
"Texto aqui!!!!" = Parametro

## Operação matematica

1- Assim como na matematica temos que ficar atentos a resolução do problema o JS resolve primeiro as multiplicações e divisões (* /). Exemplo:

document.write(20 + 10 + 30/3);

Para saber a média da idade de três pessoas, porém ao rodar, o resultado sera 40 e não 20 como o esperado. E por qual motivo? 30/3 = 10 e logo em seguida ele resolve o resto 20 + 10 + 10 e sendo assim 40. E como resolvemos isso?

document.write((20 + 10 + 30) /3);

Colocando um parenteses na conta, igual matematica. Agora sim o resultado será 20.

Porém devemos ter cuidado ao fazer o seguinte:

console.log ('A soma das idade é '+ 20 + 10 + 30);

O que esperamos é que ele some as idades porém isso não vai acontecer, o seguinte ira ocorrer.

console.log ('A soma das idade é '+ 20 + 10 + 30);
             'A soma das idade é 20'
             'A soma das idade é 2010'
             'A soma das idade é 201030'

Ele vai concatenando a operação e não somando!

E como resolvemos isso? HORA! colocando os parenteses que acabamos de ver :)

console.log ('A soma das idade é '+ (20 + 10 + 30));

## Criando Funções:

1- Podemos criar nossas proprias funções dentro do JS, o que seria uma função? Algum bloco de comando que realize instruções que nos programamos.

2- Um exemplo de função é o Alert(), ele abre uma janela popup na tela, isso sem precisarmos escrever uma lógica para tal função.

3- Como criar:

function nomeDaFuncao () {
    Instruções da lógica
}

Obs: Nome de função sempre em Verbo, pois ela é uma ação.

Vamos criar uma function básica de pular linha:

function pulaLinha() {

    document.write("<br>")

}

E como usamos essa função no nosso programa? Devemos chamar ela:

pulaLinha() 

Simples não? Devemos apenas chamar o nome da função e não esquecermos de colocar (), pois esse parenteses é a execução da function, é como se tivessemos ligando ela.

E não devemos esquecer da convenção de identar o código, ou seja tudo que está dentro de um bloco deve ter um tab, para criar um recuo para melhor leitura do mesmo.

Agora vamos aprender a criar uma function com parametro:

function mostra(conteudo) {
    document.write(conteudo);
}

mostra("Olar")

O parametro conteudo é como se fosse uma variavel, e tudo que colocamos dentro do parametro ele armazena dentro da variavel e depois passa o valor para dentro do bloco.

Por debaixo dos panos é assim:
conteudo = "Olar";

Depois ele executa o document.wiret("Olar").

Uma function pode ter uma instrução de chamada outra function. Exemplo:

function mostra(conteudo) {
    document.write(conteudo);
    pulaLinha();
}

Agora toda vez que chamamos o mostra("Hello"), automaticamente pula a linha já.

Podemos passar parametros para as funções e como fazemos isto? Iremos criar uma function básica de calcular IMC:

function imc (peso, altura) {
    let totalPeso = peso;
    let totalAltura = altura;

    let totalImc = totalPeso / (totalAltura * totalAltura);

    return totalImc;
}

imc (45, 1.64); O 45 é peso e 1.64 é altura, que passamos como parametro na function do imc
imc (70, 1.94);
imc (80, 1.74);

Ou seja, podemos passar os parametros quando chamamos a function e assim, não precisamos criar um monte de variaveis para cada vez que iremos calcular um Imc diferente.

Podemos também adicionar um return para function e assim, ele ira retornar para nós o calculo ou dado que a função deveria fazer. Podendo assim somar os dois Imc's. Fazendo uma variavel para receber os valores de imc e depois somando eles.

let imc1 = imc (70, 1.94);
let imc2 = imc (40, 1.20);

let imcGeral = imc1 + imc2;

## Prompt - Capturando infomação do usuario

1- Podemos capturar informação digitada pelo usuario de maneira muito simples, com uma function própria do JS, ao qual abre uma caixa de dialogo (estilo popup).

2- Temos uma grande informação sobre o prompt, tudo que é digitado e capturado por ele é considerado como tipo string! Porém vamos ver como converter tipo string parar number.

3- Podemos inclusive aproveitar nossa function de IMC para exemplificar o uso de prompt:

function imc (peso, altura) {
    let totalPeso = prompt('Infome seu peso' + peso);
    let totalAltura = prompt('Informe sua altura' + altura);

    let totalImc = totalPeso / (totalAltura * totalAltura);

    return totalImc;
}

imc();

Ao chamar a function agora, ele abrira uma caixa para digitar os dados e armazenar na variavel correspondente.

4- Para transformar string em number, usaremos a função propria do JS, chamda parseInt();
Ex:
    let vitorias = parseInt(prompt('Infome o número de vitorias.'));
    let empates = parseInt(prompt('Informe o número de empates.'));

Podemos usar desta forma o parseInt();

## Operação lógica: If e Else

1- Temos uma operação lógica que pode deixar nosso programa mais inteligente e elegante. O operador if (se em portugues) nos permite trabalhar com algumas condições e caso elas sejam verdadeiras executa algum bloco de código.

Ex:

if (condição para entrar no bloco de código){
    bloco de código aqui dentro
}

let pontos = 10; (passei um numero fixo)

if (pontos < 10){
    mostra('Pontos é menor do que 10');
}

if (pontos > 10) {
    mostra('Pontos maior do que 10');
}

if (pontos == 10) {
    mostra('Pontos igual a 10');
}

Podemos combinar varios operadores juntos, porem iremos ver isso mais para frente.

Podemos usar o else para quando o if não for true!
Ex:

let numeroPensado = Math.round(Math.random() * 10);

    let numeroDigitado = parseInt(prompt('Chute um número: '));

    if (numeroDigitado == numeroPensado){
        mostra('Parabens você acertou!')
    } else {
        mostra('Você errou, o número pensado foi: ' + numeroPensado);
    }

Quando a condição de if foi false automaticamente ele entra no bloco do else e executa os comandos dentro dele.

## Operador lógico: Repetir enquanto (While):

1- Temos um operador bem interessante de repetição que pode nos poupar muitas linhas de códigos.

2- A estrutra do while é a seguinte:

while (condição para ele se repetir) {
    bloco para instrução quando o while for TRUE;
}

3- Um exemplo bem básico para melhor entendimento, ele vai printar na tela todos os anos da copa de 1930 até 2020:

    while (anoCopa < 2020) {
            anoCopa += 4;
            mostra('Copa de: ' + anoCopa);
        }


Podemos inclusive combinar com o parseInt e prompt, assim o úsuario conseguiria colocar até que ano ele gostaria de ver.

    let limite = parseInt(prompt('Até que ano você gostaria de ver?'))

    while (anoCopa <= limite) {
            anoCopa += 4;
            mostra('Copa de: ' + anoCopa);
        }

## Evento .value:

1- O .value do JS, é usado para pegar o valor da variavel, objeto ou qualquer outra coisa que você queria.

2- Um exemplo de uso para ele é o seguinte, fizemos um programa básico para certar um número ao digitar no campo e fazer a comparação ao clicar no botão, tem algumas coisas básicas do mundo HTML também neste pequeno programa. input e button

    let segredo = Math.round(Math.random() * 10);
    let input = document.querySelector('input');


    function verifica() {

        if (input.value == segredo) {
            
            alert('Você ACERTOU!')
        } else {
            alert('Você ERROU!!')
        }
    }

    let button = document.querySelector('button')

    button.onclick = verifica; 

Na linha do input.value estamos fazendo a verificação do valor atribuido ao input do html e comparando com o segredo gerado na variavel dentro do JS.

## Evento de .onclick:

1- Este evento serve para disparar alguma coisa no caso do programa do topico anterior, ele dispara a function verifica, ou seja, ao clicar no botão no mundo HTML ele dispara este evento dentro do mundo JS e assim refletindo no HTML novamente, muito usado para enviar formularios para o backend e esse tipo de verificação e atribuição.

2- Precisamos ficar atento ao seguinte, ao atribuir uma function no onclick, devemos apenar chamar a function e não executa-la, sendo assim, tiramos o () no final da function;

button.onclick = verifica(); // ERRADO, na verdade eu não sei se usamos assim em alguma situação, porém nos exemplo que vi no curso, não.

button.onclick = verifica; //CORRETO

## Sobre Array:

1- Array é uma forma de guarda uma lista de valores, como assim? Se uma hora ou outra precisarmos trabalhar com uma grande quantidade de valores, seja para armazenar ou para buscar os dados, utilizamos comumente o array para isso:

let NomeDoArray = [item0, item1, item2]; //Forma de declarar um array.

Esse é um array com 3 itens, porém devemos ter uma atenção especial para as posições do array, ela começa sempre na posição 0 e seguindamente 1, 2, 3... ou seja o 'PRIMEIRO' item da lista de um array é sempre na posição 'ZERO'.

2- Um exemplo de como um array funciona, é o programa de acertar o número, porém com os itens estaticos:

    let segredos = [1, 2, 3, 4];
    let input = document.querySelector('input');


    function verifica() {

        let achou = false;

        for (var posicao = 0; posicao < segredos.length; posicao++) {

            if (input.value == segredos[posicao]) {
                
                alert('Você ACERTOU!')
                achou = true;
                break;
            } 
        }

        if (achou == false){
            alert('Você ERROU!!');
        }

        input.value = '';
        input.focus();
    }

    let button = document.querySelector('button')

    button.onclick = verifica; 

Estamos fazendo a varredura dentro das posicao do array e atualizando ele sempre, a condição para esse for parar é o posicao ser menor que o número de dados (.length) dentro do array segredos.
Logo após isso, ele entra no if e faz a verificação do valor de input dentro do array segredos na posicao especificada.

3- Todo array é declarado com colchetes, o famoso []. Contudo se tivermos uma declaração desta forma var coisas = []; temos um array, ou seja, uma lista vazia sem qualquer elemento.

Podemos, no momento da declaração de um array, adicionar elementos. Esses elementos podem ser de qualquer tipo conhecido do JavaScript:

var coisas = ["Gisele", 12, true];
Temos como primeiro item do Array uma String, o segundo um número e o último um boleano.

4- Podemos também inserir dados após declarar o array:

let segredos = [];
segredos.push(Math.round(Math.random * 10));
segredos.push(Math.round(Math.random * 10));
segredos.push(Math.round(Math.random * 10));

E cada vez que fizermos um push ele adicionar mais um item no array.

## Exercicios da Alura:

1- Matematica:

A) Rafaela, aspirante à carreira de programadora, criou um pequeno programa para saber qual é sua porcentagem de acertos em uma prova de 50 questões de múltipla escolha. O cálculo matemático comporta dividir a quantidade de acertos pelo total de questões e multiplicar o resultado final por 100.

<meta charset="UTF-8">
<script>
    document.write("Eu acertei: ");
</script>
Rafaela acertou 15 questões.

Agora:

    document.write("Eu acertei: " + (15/50*100) + ("%"));

Saida: Eu acertei: 30%


