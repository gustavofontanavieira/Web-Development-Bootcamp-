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


/*********************** CHALLENGE 3 ***********************/
//criar um código que converte idade do dog para idade humana
var dogAge = prompt ( "Digite a idade do dog: " );
var dogHuman = ((dogAge - 2) * 4) + 21;

alert ( "Idade do dog covertido para humano é: " +dogHuman );


/*********************** CHALLENGE 4 ***********************/
//criar um código que coloque um beeper de forma que pule uma casa
function main(){
    direita ();
    sobeDireito ();
    esquerda ();
    sobeEsquerdo ();
    direita ();
    sobeDireito ();
    esquerda ();
    sobeEsquerdo ();
    direita ();
 }
 
 function sobeDireito (){
    turnLeft ();
    move ();
    turnLeft ();
 }
 
 function sobeEsquerdo (){
    turnRight ();
    move ();
    turnRight ();
    
 }
 function esquerda(){
    move ();
    putBeeper ();
    move ();
    move ();
    putBeeper ();
    move ();
 }
 
 function direita(){
    putBeeper ();
    move ();
    move ();
    putBeeper (); 
    move ();
    move ();
    putBeeper ();
 
    
 }

 /*********************** CHALLENGE 5 ***********************/
 //criar uma função que pede um parâmetro e então calcule a quantidade de garrafas de leite consegue o robô 
 //consegue trazer com o dinheiro entregue 
 //pelo parâmetro
 function getMilk (dolar) {   
     //Math.floor() é uma função que arredonda os números calcúlados para não darem quebrados
    const total = Math.floor( dolar / 1.5 );
    alert( "O robô pegou " +total+ " de garrafas de leite" );
  }
  
  getMilk(15);

  
 /*********************** CHALLENGE 6 ***********************/
//Criar uma função que calcula a quantidade de meses, anos e semanas que a pessoa possui interpretando que vivemos até os 90 anos
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var idadeSobrando = 90 - age;
        var diasRestante = Math.floor( idadeSobrando * 365 );
        var mesesRestante = Math.floor( idadeSobrando * 12 );
        var semanasRestante = Math.floor( idadeSobrando * 52 );
        
        console.log( "You have " +diasRestante+ " days, " +semanasRestante+ " weeks, and " +mesesRestante+ " months left."  );
        
        
    /*************Don't change the code below**********/
    }
    
    
