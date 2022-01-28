//Selecionado por tag, sintaxe:
//A tag “li” vem como array, então caso deseje 
//manipular um é necessário referenciar a posição 
//dentro do array, por exemplo: ( “li” )[2].style.color = “purple”;
document.getElementsByTagName( "li" );

//Outra forma de selecionar é pela classe. Igual o exemplo de cima, caso deseje editar, lembre que vai devolver um array. Sintaxe: 
document.getElementsByClassName( "btn" );

//Outra forma é chamando pelo ID, esse já não retorna como array já que o ID é único no código HTML. Sintaxe:
document.getElementById( "Text" );

//Outra forma é o querySelector, é bem semelhante aos anteriores e com o próprio CSS no caso colocando # e .
//, eu posso selecionar qualquer coisa, seja ID, class ou tag e combinar. Sintaxe:
//document.querySelector();

//outra forma do querySelector
//ele devolve tudo em forma de array, igual o "li" dito no primeiro exemplo
//document.querySelectorAll();

//desafio de mudar a cor da anchor tag do primeiro li
document.querySelector("li a").style.color = "red";

//challenge 2
//mudar a cor de fundo do botão para amerelo
document.querySelector("button").style.backgroundColor = "yellow";

//o classList lista todas as classes que a tag "button" possui, no caso o add("invisible") simplesmente adiciona uma nova classe a tag
//posso também invés de utilizar o add colocar o remove
document.querySelector( "button" ).classList.add("invisible");

document.querySelector( "button" ).classList.remove("invisible");

//posso também invés de utilizar o toggle, ele ve se o invisible já está aplicado
//e troca as classes
document.querySelector( "button" ).classList.toggle("invisible");

//challenge: adicionar uma classe a um h1 através do classList.add
document.querySelector("h1").classList.add("huge");

//diferenças entre innerHTML e textContent
//se utilizar o inner HTML ele irá trazer todo conteúdo dentro do h1, se tiver uma anchor tag ele vai trazer,
//se tiver uma tag <strong> ele também vai trazer. Se desejarmos alterar o conteúdo dentro do h1, ele irá remover essas
//tags que fazer parte da formatação do texto em HTML, claro que posso adicionar as tags no javascript contanto que esteja dentro das " "
document.querySelector("h1").innerHTML;

//Se utilizarmos o textContent ele só vai mudar o conteúdo escrito e vai deixar as tags de formatação
document.querySelector("h1").textContent;

//ele retorna todos os atributos que a tag a possui, seu href e quantos atributos possui
document.querySelector("a").attributes;
//o attributes podemos ter o get e o set
//o get pega o que tem dentro do href, que no caso é o google.com
document.querySelector("a").getAttribute("href");
//se quisermos podemos utilizar o set, mas ele necessita de dois parametros, o que vai ser alterado e seu novo valor
document.querySelector("a").setAttribute("href", "https://facebook.com");
