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