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


  //atualizado
  function getMilk (money, costPerBottle) {   
   console.log("Buy " +calcBottles(money, costPerBottle)+ " Bottles");
     //output do troco 
   return calcChange(money, costPerBottle);
   }
   
 
 function calcBottles ( startingMoney, costPerBottle ) {
     var numberOfBottles = Math.floor ( startingMoney / costPerBottle );
 
     return numberOfBottles;
 }
 
 
 function calcChange ( startingAmount, costPerBottle) {
     var change = startingAmount % costPerBottle;
     return change;
 }
   
   console.log( "Hello master, here is your " +getMilk(6, 3)+ " change");
 

  
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

 /*********************** CHALLENGE 7 ***********************/
 //BMI calculator, your challenge is to create a function that takes weight and height.2 and gives the calculated BMI
 function bmiCalculator( weight, height ) {
   //Math.pow(), trabalha com 2 valores,  base e expoente, é uma função matemática que trabalha com números elevados
   return Math.round ( weight / Math.pow(height, 2) );
};

 /*********************** CHALLENGE 8 ***********************/
 //love calculator, criar 2 prompt pra perguntar o nome das duas pessoas e retornar o valor em porcentagem utilizando a função Math.random()
//do JavaScript
prompt ( "First person name: " );
prompt ( "Second person name: " );

function calculate(){
   var porcentagem = Math.random();
   porcentagem = porcentagem * 100;
   porcentagem = Math.floor(porcentagem) + 1;
   alert ( "chance de darem certos: " +porcentagem+ "%" )

}


/*********************** CHALLENGE 9 ***********************/
//BMI calculator with if and else
function bmiCalculator (weight, height) {
   var bmi = weight / (Math.pow(height, 2));
   if ( bmi < 18.5 ) {
       return "Your BMI is " +bmi+ ", so you are underweight.";
   } else if ( bmi > 18.5 && bmi <= 24.9) {
       return "Your BMI is " +bmi+ ", so you have a normal weight.";
   } else {
       return "Your BMI is " +bmi+ ", so you are overweight.";
   }
}

/*********************** CHALLENGE 10 ***********************/
//desafio de leap year
function isLeap(year) {
    /**************Don't change the code above****************/    
        //Write your code here.    
        //True ou True
        if  ((year % 4 !== 0) || (year % 4 === 0  &&  year % 100 === 0 && year % 400 !== 0)) {
             return "Not leap year.";
        }
        else{
           return "Leap year."
        }
    /**************Don't change the code below****************/    
    }
//Angela fez oq anteriormente eu tinha feito, maldito ponto final que precisava pra funcionar:
function isLeap(year) {
    if ( year % 4 === 0 ) {
        if ( year % 100 === 0 ) {
            if ( year % 400 === 0 ) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}