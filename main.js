const readLineSync = require ('readline-sync');


var input = readLineSync.question("Enter bill amount bruh\n");

let twoK = 0 ;
let fiveHundred  = 0 ;
let hundred = 0 ; 
let  twenty = 0 ;
let ten = 0 ;
let five  = 0 ;
let one = 0 ;
input = input - 50;
while(input>0){
if ( input >= 2000){
    input = input -  2000;
    twoK ++ ;


}else if(input>=500){
    input = input - 500;
    fiveHundred ++ ;
} else if(input>=100){
    input = input - 100 ;
    hundred ++ ;


} else if(input >=20){
    input = input  -20;
    twenty ++;
} else if (input >=10){
    input = input  -10 ;
    ten ++ ;
} else if (input >= 5){
input = input -5 ;
five ++ ;
}else if(input >= 1){
input = input - 1;
one ++ ;
}
}
// if(input<2000){

// }
console.log(twoK , fiveHundred,hundred,twenty,ten,five,one, input);