let button_0 = document.getElementById("0");
let button_1 = document.getElementById("1");
let button_2 = document.getElementById("2");
let button_3 = document.getElementById("3");
let button_4 = document.getElementById("4");
let button_5 = document.getElementById("5");
let button_6 = document.getElementById("6");
let button_7 = document.getElementById("7");
let button_8 = document.getElementById("8");
let button_9 = document.getElementById("9");
let input = document.getElementById("input");
let button_res = document.getElementById("res");
let button_del = document.getElementById("del");
let button_equal = document.getElementById("equal");
let button_plus = document.getElementById("plus");
let button_minus = document.getElementById("minus");
let button_times = document.getElementById("times");
let button_div = document.getElementById("divide");
let button_dot = document.getElementById("dot");
// let button_breakL = document.getElementById("break_left");
// let button_breakR = document.getElementById("break_rigth")



input.addEventListener("input", function() {
    const value = input.value;

    if (value.length <= 5) {
        input.style.fontSize = "3rem";
    } else if (value.length <= 8) {
        input.style.fontSize = "2rem";
    } else if (value.length <= 11) {
        input.style.fontSize = "1.5rem";
    }
});

function updateDisplay(value) {
    

    if (value.length <= 5) {
        input.style.fontSize = "3rem";
    } else if (value.length <= 8) {
        input.style.fontSize = "2rem";
    } else if (value.length <= 11) {
        input.style.fontSize = "1.5rem";
    }
}



function addHoverEffect(button) {
    button.classList.add("hover-effect")
}

function removeHoverEffect(button) {
    button.classList.remove("hover-effect")
}


function  break_left(string){
    if (string[string.length - 1 ] === "0"){
        return "("
    }
    else if (string[string.length - 1 ] !== "." ){
        return string + "("
    }
    return string
}

function  break_rigth(string){
    let canRightBreak = false
    let countLeft = 0
    let countRight = 0
    let logicBreak = false
    for (i of string){
        if (i === "("){
            canRightBreak = true
            countLeft+=1
        }
        else if (i === ")"){
            countRight+=1
        }
    }
    const str = string.split("").reverse().join("");
    let newStr = ""
    for (i of str){
        if (i !== "(")
            newStr+=i
        else{
            break
        }
    }
    for (i of newStr){
        if (i === "+" || i === "×" || i ==="÷" || i === "-"){
            logicBreak= true
        }
    }
 

    
    if (string[string.length - 1 ] !== "." && canRightBreak && countLeft - countRight >=1  && logicBreak){
        return string + ")"
    }
    return string
}
function trimTrailingZeros(num) {
    const numStr = num.toString();
    console.log(numStr)
    if (!numStr.includes('.')) {
      return num;
    }
    const numArr = numStr.split('.');
    const intPart = numArr[0];
    let fracPart = numArr[1];
    fracPart = fracPart.slice(0, -1);
    fracPart = fracPart.slice(0, -1);
    do {
      fracPart = fracPart.slice(0, -1);
    } while (fracPart.endsWith('0')) 
    console.log(fracPart)
    console.log(fracPart ? `${intPart}.${fracPart}` : intPart)
    return fracPart ? `${intPart}.${fracPart}` : intPart;
  }


function equal(value) {
    for (let i = 0; i < value.length - 1; i++) {
      if (value[i] === ')' && value[i + 1] === '(') {
        let newValue = value.slice(0, i + 1) + "*" +  value.slice(i + 2, value.length);
        value = newValue;
      }
    }
    for (let i = 0; i < value.length; i++) {
      if (value[i] === "×") {
        value = value.slice(0, i) + "*" + value.slice(i + 1, value.length);
      } else if (value[i] === "÷") {
        value = value.slice(0, i) + "/" + value.slice(i + 1, value.length);
      }
    }
    let  result = eval(value);
    result = trimTrailingZeros(result);
    return result
  }
  

function check(string){
    for (i of string){
        if (i === "(" || i === ")"){
            return false
        }
        if (i === "+" || i === "-" || i === "×" || i === "÷" ){
            return true;
        }
    }
    return false;
}

function del(string){
    string = string.slice(0, -1);
    if (string === ""){
        string = "0";
    }
    return string;
}

function dot(string){
    const newValue_2 = string.split(".") // 0.0 +0 => ["0", "0 +0"]
    
    canDot = false;
    for (i of newValue_2[newValue_2.length - 1]){
        if (i === "+" || i === "-" || i === "×" || i === "÷" || i === "(" || i === ")" || i === "" ){

            canDot = true;
        }
    }
    if (string.length === 1 && string[0] === "0"){
        string = "0."
        updateDisplay(string);
    }
    
    if (string[string.length - 1] !== "." && string !== "" && string[string.length-1] !== "+" && string[string.length-1] !== "-" && string[string.length-1] !== "×" && string[string.length-1] !== "÷" && canDot){
        string += ".";
        updateDisplay(string);
    }

    return string;
}

function math_plus(string){
    if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
            string += "+";
            updateDisplay(string);
    }
    else{
        try{
            string = equal(string);
            string += "+";
            updateDisplay(string);
        }
        catch{
            if (string[string.length - 1 ] === "+") string = string
            else if (string[string.length - 1 ] === "-") string = string.slice(0, -1) + "+";
            else if (string[string.length - 1 ] === "×") string = string. slice(0, -1) + "+";
            else if (string[string.length - 1 ] === "÷") string = string. slice(0, -1) + "+";
            else string = "0";
        }
       
    }
    return string;
}

function math_minus(string){
    console.log(!check(string))
    if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷"  && !check(string)){
        string += "-";
        updateDisplay(string);
    }
    else{
        try{
            string = equal(string);
            string += "-";
            updateDisplay(string);
        }
        catch{
            if (string[string.length - 1 ] === "-") string = string
            else if (string[string.length - 1 ] === "+") string = string.slice(0, -1) + "-";
            else if (string[string.length - 1 ] === "×") string = string. slice(0, -1) + "-";
            else if (string[string.length - 1 ] === "÷") string = string. slice(0, -1) + "-";
            else string = "0";
        }
    }
    return string;
}

function math_times(string){
    if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷"  && !check(string)){
        string += "×";
        updateDisplay(string);
    }
    else{
        try{
            string = equal(string);
            string += "×";
            updateDisplay(string);
        }
        catch{
            if (string[string.length - 1 ] === "×") string = string
            else if (string[string.length - 1 ] === "+") string = string.slice(0, -1) + "×";
            else if (string[string.length - 1 ] === "-") string = string. slice(0, -1) + "×";
            else if (string[string.length - 1 ] === "÷") string = string. slice(0, -1) + "×";
            else string = "0";
        }
    }
    return string;
}

function math_div(string){
    if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷"  && !check(string)){
        string += "÷";
        updateDisplay(string);
    }
    else{
        try{
            string = equal(string);
            string += "÷";
            updateDisplay(string);
        }
        catch{ 
            if (string[string.length - 1 ] === "÷") string = string
            else if (string[string.length - 1 ] === "+") string = string.slice(0, -1) + "÷";
            else if (string[string.length - 1 ] === "-") string = string. slice(0, -1) + "÷";
            else if (string[string.length - 1 ] === "×") string = string. slice(0, -1) + "÷";
            else string = "0";
        }
    }
    return string;
}

function zero(string){
    if (string[0] === "0" && string[1] !== "."){
        string = "0.0";
        updateDisplay(string);
        return string;
    }
    string += "0";
    updateDisplay(string);
    return string;
}

function one(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "1";
        updateDisplay(string);
        return string;
    }
    string += "1";
    updateDisplay(string);
    return string;
}

function two(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "2";
        updateDisplay(string);
        return string;
    }
    string += "2";
    updateDisplay(string);
    return string;
}

function three(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "3";
        updateDisplay(string);
        return string;
    }
    string += "3";
    updateDisplay(string);
    return string;
}

function four(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "4";
        updateDisplay(string);
        return string;
    }
    string += "4";
    updateDisplay(string);
    return string;
}

function five(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "5";
        updateDisplay(string);
        return string;
    }
    string += "5";
    updateDisplay(string);
    return string;
}

function six(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "6";
        updateDisplay(string);
        return string;
    }
    string += "6";
    updateDisplay(string);
    return string;
}

function seven(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "7";
        updateDisplay(string);
        return string;
    }
    string += "7";
    updateDisplay(string);
    return string;
}

function eight(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "8";
        updateDisplay(string);
        return string;
    }
    string += "8";
    updateDisplay(string);
    return string;
}

function nine(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "9";
        updateDisplay(string);
        return string;
    }
    string += "9";
    updateDisplay(string);
    return string;
}



// button_breakL.onclick = () => {
//     input.value = break_left(input.value)
// }

// button_breakR.onclick = () =>{
//     input.value = break_rigth(input.value)
// }

button_0.onclick = ()=>{
    input.value = zero(input.value);
}

button_1.onclick = ()=>{
    input.value = one(input.value);

}
button_2.onclick = ()=>{
    input.value = two(input.value);
}
button_3.onclick = ()=>{
    input.value = three(input.value);
}

button_4.onclick = ()=>{
    input.value = four(input.value);
}


button_5.onclick = ()=>{
    input.value = five(input.value);
}

button_6.onclick = ()=>{
    input.value = six(input.value);
}

button_7.onclick = ()=>{
    input.value = seven(input.value);
}

button_8.onclick = ()=>{
    input.value = eight(input.value);
}

button_9.onclick = ()=>{
    input.value = nine(input.value);
}

button_dot.onclick = ()=>{
    input.value = dot(input.value);
    
}





// button_del.onclick = ()=>{
//     input.value = input.value.slice(0, -1);
//     if (input.value === ""){
//         input.value = "0";
//     }
// }

button_plus.onclick = ()=>{
    input.value = math_plus(input.value);
}
button_minus.onclick = ()=>{    
    input.value = math_minus(input.value);
}
button_times.onclick = ()=>{
    input.value = math_times(input.value);
}
button_div.onclick = ()=>{
    input.value = math_div(input.value);
}

button_equal.onclick = ()=>{
    input.value = equal(input.value);
}


document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        input.value = equal(input.value);
        addHoverEffect(button_equal)
    }
    else if (event.code === 'Backspace'){
        input.value = del(input.value);
        addHoverEffect(button_del)
    }
   
    else if (event.code === 'NumpadAdd' || event.code === 'Equal'){
        input.value = math_plus(input.value);
        addHoverEffect(button_plus)
    }
    else if (event.code === 'NumpadSubtract' || event.code === 'Minus'){
        input.value = math_minus(input.value);
        addHoverEffect(button_minus)
    }
    else if (event.code === 'NumpadMultiply' || event.code === 'Digit8'){
        input.value = math_times(input.value);
        addHoverEffect(button_times)
    }
    else if (event.code === 'NumpadDivide' || event.code === 'Slash'){
        input.value = math_div(input.value);
        addHoverEffect(button_div)
    }
    else if (event.code === 'NumpadDecimal' || event.code === 'Period'){
        input.value = dot(input.value);
        addHoverEffect(button_dot)
    }
    else if (event.code === 'Digit0' || event.code === 'Numpad0'){
        if (event.shiftKey) {
            input.value = break_rigth(input.value);
            addHoverEffect(button_breakR)
        } else {
            input.value = zero(input.value);
            addHoverEffect(button_0)
        } 
        
    }
    else if (event.code === 'Digit1' || event.code === 'Numpad1'){
        input.value = one(input.value);
        addHoverEffect(button_1)
    }
    else if (event.code === 'Digit2' || event.code === 'Numpad2'){
        input.value = two(input.value);
        addHoverEffect(button_2)
    }
    else if (event.code === 'Digit3' || event.code === 'Numpad3'){
        input.value = three(input.value);
        addHoverEffect(button_3)
    }
    else if (event.code === 'Digit4' || event.code === 'Numpad4'){
        input.value = four(input.value);
        addHoverEffect(button_4)
    }
    else if (event.code === 'Digit5' || event.code === 'Numpad5'){
        input.value = five(input.value);
        addHoverEffect(button_5)
    }
    else if (event.code === 'Digit6' || event.code === 'Numpad6'){
        input.value = six(input.value);
        addHoverEffect(button_6)
    }
    else if (event.code === 'Digit7' || event.code === 'Numpad7'){
        input.value = seven(input.value);
        addHoverEffect(button_7)
    }
    else if (event.code === 'Digit8' || event.code === 'Numpad8'){
        input.value = eight(input.value);
        addHoverEffect(button_8)
    }
    else if (event.code === 'Digit9' || event.code === 'Numpad9'){
        if (event.shiftKey) {
            input.value = break_left(input.value);
            addHoverEffect(button_breakL)
        } else {
            input.value = nine(input.value);
            addHoverEffect(button_9)
        }
    }
    else if (event.code === 'KeyC'){
        input.value = "0";
    }
 
  });
   document.addEventListener("keyup", function(event) {

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        removeHoverEffect(button_equal)
    }
    else if (event.code === 'Backspace'){
        removeHoverEffect(button_del)
    }

    else if (event.code === 'NumpadAdd' || event.code === 'Equal'){
        removeHoverEffect(button_plus)
    }
    else if (event.code === 'NumpadSubtract' || event.code === 'Minus'){
        removeHoverEffect(button_minus)
    }
    else if (event.code === 'NumpadMultiply' || event.code === 'Digit8'){
        removeHoverEffect(button_times)
    }
    else if (event.code === 'NumpadDivide' || event.code === 'Slash'){
        removeHoverEffect(button_div)
    }
    else if (event.code === 'NumpadDecimal' || event.code === 'Period'){
        removeHoverEffect(button_dot)
    }
    else if (event.code === 'Digit0' || event.code === 'Numpad0'){
        if (event.shiftKey) {
            removeHoverEffect(button_breakR)
        } else {
            removeHoverEffect(button_0)
        } 
        
    }
    else if (event.code === 'Digit1' || event.code === 'Numpad1'){
        removeHoverEffect(button_1)
    }
    else if (event.code === 'Digit2' || event.code === 'Numpad2'){
        removeHoverEffect(button_2)
    }
    else if (event.code === 'Digit3' || event.code === 'Numpad3'){
        removeHoverEffect(button_3)
    }
    else if (event.code === 'Digit4' || event.code === 'Numpad4'){
        removeHoverEffect(button_4)
    }
    else if (event.code === 'Digit5' || event.code === 'Numpad5'){
        removeHoverEffect(button_5)
    }
    else if (event.code === 'Digit6' || event.code === 'Numpad6'){
        removeHoverEffect(button_6)
    }
    else if (event.code === 'Digit7' || event.code === 'Numpad7'){
        removeHoverEffect(button_7)
    }
    else if (event.code === 'Digit8' || event.code === 'Numpad8'){
        removeHoverEffect(button_8)
    }
    else if (event.code === 'Digit9' || event.code === 'Numpad9'){
        if (event.shiftKey) {
            removeHoverEffect(button_breakL)
        } else {
            removeHoverEffect(button_9)
        }
    }
    else if (event.code === 'KeyC'){
        input.value = "0";
    }
});



