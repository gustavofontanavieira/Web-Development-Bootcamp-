/*********************** CHALLENGE 1 ***********************/
//escrever um código que conte a quantidade de caracteres que o usuário digitou e quantos ainda restam
var textoUsuario = prompt ( "Digite um texto - limite de 220 caracteres" );
alert ( "Voce escreveu " +textoUsuario.slice(0,220).length+ " RESTOU " + (220 - textoUsuario.length) + " caracteres" );

//de forma mais simples:
alert ( prompt ( "Compose your tweet:" ).slice(0,140));


/*********************** CHALLENGE 2 ***********************/
//escrever um código que aumente a primeira letra que o usuário digitar e deixe minúsculo o resto
var text = prompt ( "Digite seu nome: " );
var maior = text.slice(0,1).toUpperCase();
var menor = text.slice(1,100).toLowerCase();

alert( maior + menor ); 