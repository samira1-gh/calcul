


const screen = document.getElementById("screen");
let result = 0
let op;
let number1;
let number2;
 
function clearScreen() {
   return screen.value = "";
}
function display(C){
    screen.value += C;
}


function displayop(C){
    op = C;
    number1 = Number(screen.value)
    clearScreen();

}
function displaydot() {
    let dot = screen.value;
    if (dot.includes('.')){
        screen.value+= '.';
    }
}

function add(){
     return number1 + number2
}
function division (){
     return number1 / number2;
}
function moins (){
    return number1 - number2
}
function mutiplication (){
    return number1 * number2
}



function calculate() {
     number2 = Number(screen.value)

    // let expresion = screen.value
    // let operator
    if (op == '+') {
       result = add()
    }
     if (op == '-') {
       result = moins()
    }
     if (op == '/') {
       result = division()
    }
 if (op == '*') {
       result = mutiplication()
    }





    // if(op.includes('+')) operator = '+'
    // if(op.includes('-')) operator = '-'
    // if(op.includes('*')) operator = '*'
    // if (op.includes('/')) operator = '/'

    // let indexOperator = op.indexOf(operator)
    // let number1 = parseInt(op.substring(0,indexOperator))
    // let number2 = parseInt(op.substring(indexOperator + 1))
    // console.log(operator)
    // console.log(operations)
    // console.log(operations[operator])
    // result = operations[operator](number1, number2)
    screen.value = result
    
    console.log('number1 :>> ', number1);
    console.log('number2 :>> ', number2);
    console.log('result :>> ', result);
}







