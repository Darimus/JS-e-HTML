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


