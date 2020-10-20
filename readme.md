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

