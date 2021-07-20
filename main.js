


const btnDisplay = document.getElementById('display-result');
const result = document.querySelector('.result');
const due = document.getElementById('due');
const received = document.getElementById('received');
const showDiv = document.querySelector('.hidden-amount');
const resultTable = document.querySelector('.result-table');
const message = document.querySelector('.message');
let twoK = 0 ;
let fiveHundred  = 0 ;
let hundred = 0 ; 
let  twenty = 0 ;
let ten = 0 ;
let five  = 0 ;
let one = 0 ;
let clicked=0;

btnDisplay.addEventListener("click", ()=>{
    let dueValue = parseInt(due.value); 
// console.log(input);
if(isNaN(dueValue)){
message.innerText="Enter Valid  Amount";
}else{
    clicked ++;
}
if(clicked === 1 ){
    showDiv.style.display="block";
    btnDisplay.innerText="Show Result";

}else if(clicked>1){
    let receivedValue = parseInt(received.value); 
    
if(isNaN(receivedValue)){
    message.innerText="Enter Valid Amount"
} else if(dueValue>receivedValue){
    message.innerText="You have received lesser cash than the due bill amount (...Are you really that stupid??) "

}else if(dueValue===receivedValue){
    message.innerText="You need not to return anything, Mr. Ramanujan"

}
else{
   let input =  receivedValue-dueValue;
    getResultData(input);
    resultTable.style.display="block";
    message.style.display="none";
}
}





result.innerHTML=`
 <td>Number of Notes</td>
  <td>${twoK}</td>
  <td>${fiveHundred}</td>
  <td>${hundred}</td>
  <td>${twenty}</td>
  <td>${ten}</td>
  <td>${five}</td>
  <td>${one}</td>

`
})

function getResultData(input){
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
}

// console.log(twoK , fiveHundred,hundred,twenty,ten,five,one, input);