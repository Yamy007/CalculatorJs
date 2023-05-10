

let button_0 = document.getElementById("zero");
let button_1 = document.getElementById("one");
let button_2 = document.getElementById("two");
let button_3 = document.getElementById("three");
let button_4 = document.getElementById("four");
let button_5 = document.getElementById("five");
let button_6 = document.getElementById("six");
let button_7 = document.getElementById("seven");
let button_8 = document.getElementById("eight");
let button_9 = document.getElementById("nine");
let input = document.getElementById("display_down");
let input_up = document.getElementById("display_upper");
let button_res = document.getElementById("clears");
let button_del = document.getElementById("clear");
let button_equal = document.getElementById("equal");
let button_plus = document.getElementById("plus");
let button_minus = document.getElementById("minus");
let button_times = document.getElementById("mult");
let button_div = document.getElementById("div");
let button_dot = document.getElementById("dot");
let button_proc = document.getElementById("proc");






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



function sinh(string){
    for (i of string){
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.sinh(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}

function cosh(string){
    for (i of string){
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.cosh(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}

function tanh(string){
    for (i of string){
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.tanh(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}

function coth(string){
    for (i of string){

        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{

                string = 1/Math.tanh(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}



function sin(string) {
    for (i of string) {
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "") {
            try {
                string = Math.sin(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}

function cos(string) {
    for (i of string) {
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "") {
            try {
                string = Math.cos(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}

function tan(string) {
    for (i of string) {
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "") {
            try {
                string = Math.tan(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}

function cot(string) {
    for (i of string) {
        if (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "") {
            try {
                string = 1 / Math.tan(Number(string));
                return string;
            } catch {
                return string;
            }
        }
    }
}



function powTwo(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.pow(Number(string), 2)
                return string
            }
            catch{
                return string
            }
}
}
}

function powThree(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.pow(Number(string), 3)
                return string
            }
            catch{
                return string
            }
}
}
}


function powFour(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.pow(Number(string), 4)
                return string
            }
            catch{
                return string
            }
}
}
}

function epow(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.pow(Math.E, Number(string))
                return string
            }
            catch{
                return string
            }
}
}
}


function powten(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.pow(10, Number(string))
                return string
            }
            catch{
                return string
            }
}
}
}


function sqrt(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.sqrt(Number(string))
                return string
            }
            catch{
                return string
            }
}
}
}

function cbrt(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.cbrt(Number(string))
                return string
            }
            catch{
                return string
            }
}
}
}

function foursqrt(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
        try{
            string = Math.pow(Number(string), 1/4)
            return string
        }
        catch{
            return string
        }
}
}
}


function ln(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.log(Number(string))
                return string
            }
            catch{
                return string
            }
}
}
}

function logten(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Math.log10(Number(string))
                return string
            }
            catch{
                return string
            }
}
}
}


function factTwo(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                if (Number(string) < 0){
                    return "Error"
                }
                else if (Number(string) === 0){
                    return 1
                }
                else if (Number(string) <=15){
                let result = 1
                    if (Number(string) % 2 === 0) {
                        for (let i = 1; i <= Number(string); i++) {
                            if (i % 2 === 0){
                                result *= i
                            }
                        }
                    }
                    else{
                        for (let i = 1; i <= Number(string); i++) {
                            if (i % 2 !== 0){
                                result *= i
                            }
                        }
                    }
                return result
                }
            }
            catch{  
                return string
            }
}
}
}

        


function fact(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                if (Number(string) < 0){
                    return "Error"
                }
                else if (Number(string) === 0){
                    return 1
                }
                else if (Number(string) <=15){
                let result = 1
                for (let i = 1; i <= Number(string); i++) {
                    result *= i
                }
                return result
                }
                else{
                    return "Error"
                }
            }
            catch{
                return string
            }
}
}
}

function divideOne(string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = 1 / Number(string)  
                return string
            }
            catch{
                return string
            }
}
}
}
  
function proc (string){
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Number(string) / 100
                return string
            }
            catch{
                return string
            }
}
}
}


function swapNumber(string) {
    for (i of string) {
        if  (i !== "+" || i !== "-" || i !== "×" || i !== "÷" || i !== "(" || i !== ")" || i !== "" ){
            try{
                string = Number(string) * -1
                return string
            }
            catch{
                return string
            }
}
}
}

function updateDisplay(value) {

    // let string = ""
    // for (i of value) {
    //     if (i !== "×" && i !== "÷" && i !== "+" && i !== "-" && i !== "(" && i !== ")" && i !== ""  ){
    //         string += i
    //     }
    //     else {
    //         string+= " " 

    //     }
    // }

    // let count = 0;
     let result = ""
    // string = string.replace(/'/g, '');
    // console.log(string)
    // let mas = string.split(" ") 
    // for (let i = 0; i < mas.length; i++) {
    //     if (mas[i].length >= 5 && mas[i].length < 6 ) {
    //         result = ""
    //         count = 0
    //         for (j of mas[i]){
    //             if (count === 2){
    //                 result += "'"                    
    //             }
    //             result += j
    //             count++
    //         }
    //     }
    //     else if (mas[i].length >= 6 && mas[i].length ) {
    //         result = ""
    //         count = 0 
    //         for (j of mas[i]){
    //             if (count === 3){
    //                 result += "'"
    //                 count = 0
    //             }
    //             result += j
    //             count++
    //         }
    //     }

       
    // }

    
    let style = window.getComputedStyle(input, null).getPropertyValue('font-size');
    if (value.length <= 3) {
        input.style.fontSize ="6    rem";
    }
    else if (value.length <= 5) {

        if  (Number(style.split("px")[0]) >=100){
            input.style.fontSize = String(Number(style.split("px")[0]) - 10) + "px";
        }
        
    } else if (value.length <= 6) {
        if  (Number(style.split("px")[0]) >=90){
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
        }
    } else  if (value.length <= 7) {
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
    } else if (value.length <= 8) {
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
    }
    else if (value.length <= 9) {
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
    }
    else if (value.length <= 10) {
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
    }
    else if (value.length <= 11) {
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
    }
    else if (value.length <= 12) {
        input.style.fontSize = String(Number(style.split("px")[0]) - 5) + "px";
    }
    if (result === ""){
        result = value
    }
    return result
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
    let nine = []
    if (fracPart.length  <= 4){
        return num
    }
    for (let i = 0; i < fracPart.length; i++) {
        if (fracPart[i] === "9"){
            nine.push(i)
        }
    }
    if (nine.length >= 5){
        return Math.round(num * 100) / 100

    }
    if (num.length > 8) {
        fracPart = fracPart.slice(0, -1);
        fracPart = fracPart.slice(0, -1);
    }
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

function equal_btn( string, value){
    if (!!+value[value.length - 1 ]) return [value , string] ;
    else if (value[value.length - 1 ] === "0")
    {
        value = equal(value);
        string = value;
        return [value , string] ;

    }
    

    else{
        let result;
        value = value + string;
        result = equal(value);
        return [value , result] ;
    }

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
    if (!string && string !== "0"){
        return string
    }
    else if (string === "0"){
        string = "0."
    }
    else if (string === ""){
        string = "0."
    }
    else if (string[string.length - 1 ] === "."){
        return string
    }
    else{
        for (i of string){
            if (i === "."){
                return string
            }
            
        }
        string = string + ".";
        return string

    }
    if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
        string = string + ".";
    }
    return string;
}

function math_plus(  string, value){ 
    if( value === "0"){
        value = "";
    }
    if (!value){
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
                value = String(string) +  "+"; 
                string = "";
                return [value , string] ;
        }
    }
    else if (value && !string ){
        if (!!+value[value.length - 1] || value[value.length - 1] === "0"){
            value = equal(value) + "+";
            string = "";
            return [value , string] ;
        }
        else if (value[value.length -1] === "+" || value[value.length -1] === "-"|| value[value.length -1] === "×" || value[value.length -1 ] === "÷"){
            value = value.slice(0, -1) + "+";
            string = "";
            return [value , string] ;
        }
    }
    else{
        for (let l = 0; l < value.length; l++) {
            if (value[l] === "+" || value[l] === "-" || value[l] === "×" || value[l] === "÷" || value[l] === "(" || value[l] === ")"){
                if (!!+value[value.length - 1 ] || value[value.length - 1] === "0"){
                    value = string + "+";
                    string = "";
                    return [value , string] ;
                }}
            }
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
            let temp = string
            console.log("string", string)
            console.log("value", value)
            string = equal(value + string);
            console.log("equal", string)
            value  = value + temp
            return [value , string] ;
            }
        else{
            
            value = string + "+";
            string = "";
            return [value , string] ;
        }
            
    }
    return [value , string] ;
}

function math_minus(string,value){
    if( value === "0"){
        value = "";
    }
    if (!value){
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
                value = String(string) +  "-"; 
                string = "";
                return [value , string] ;
        }
    }
    else if (value && !string ){
        if (!!+value[value.length - 1] || value[value.length - 1] === "0"){
            value = equal(value) + "-";
            string = "";
            return [value , string] ;
        }
        else if (value[value.length -1] === "+" || value[value.length -1] === "-"|| value[value.length -1] === "×" || value[value.length -1 ] === "÷"){
            value = value.slice(0, -1) + "-";
            string = "";
            return [value , string] ;
        }
    }
    else{
        for (let l = 0; l < value.length; l++) {
            if (value[l] === "+" || value[l] === "-" || value[l] === "×" || value[l] === "÷" || value[l] === "(" || value[l] === ")"){
                if (!!+value[value.length - 1 ] || value[value.length - 1] === "0"){
                    value = string + "-";
                    string = "";
                    return [value , string] ;
                }}
            }
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
            let temp = string
            string = equal(value + string);
            value  = value + temp
            return [value , string] ;
            }
        else{
            
            value = string + "-";
            string = "";
            return [value , string] ;
        }
            
    }
    return [value , string] ;
}

function math_times(string, value){
    if( value === "0"){
        value = "";
    }
    if (!value){
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
                value = String(string) +  "×"; 
                string = "";
                return [value , string] ;
        }
    }
    else if (value && !string ){
        if (!!+value[value.length - 1] || value[value.length - 1] === "0"){
            value = equal(value) + "×";
            string = "";
            return [value , string] ;
        }
        else if (value[value.length -1] === "+" || value[value.length -1] === "-"|| value[value.length -1] === "×" || value[value.length -1 ] === "÷"){
            value = value.slice(0, -1) + "×";
            string = "";
            return [value , string] ;
        }
    }
    else{
        for (let l = 0; l < value.length; l++) {
            if (value[l] === "+" || value[l] === "-" || value[l] === "×" || value[l] === "÷" || value[l] === "(" || value[l] === ")"){
                if (!!+value[value.length - 1 ] || value[value.length - 1] === "0"){
                    value = string + "×";
                    string = "";
                    return [value , string] ;
                }}
            }
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
            let temp = string
            string = equal(value + string);
            value  = value + temp
            return [value , string] ;
            }
        else{
            
            value = string + "×";
            string = "";
            return [value , string] ;
        }
            
    }
    return [value , string] ;
}

function math_div(string, value){
    if( value === "0"){
        value = "";
    }
    if (!value){
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
                value = String(string) +  "÷"; 
                string = "";
                return [value , string] ;
        }
    }
    else if (value && !string ){
        if (!!+value[value.length - 1] || value[value.length - 1] === "0"){
            value = equal(value) + "÷";
            string = "";
            return [value , string] ;
        }
        else if (value[value.length -1] === "+" || value[value.length -1] === "-"|| value[value.length -1] === "×" || value[value.length -1 ] === "÷"){
            value = value.slice(0, -1) + "÷";
            string = "";
            return [value , string] ;
        }
    }
    else{
        for (let l = 0; l < value.length; l++) {
            if (value[l] === "+" || value[l] === "-" || value[l] === "×" || value[l] === "÷" || value[l] === "(" || value[l] === ")"){
                if (!!+value[value.length - 1 ] || value[value.length - 1] === "0"){
                    value = string + "÷";
                    string = "";
                    return [value , string] ;
                }}
            }
        if (string[string.length - 1 ] !== "." && string[string.length - 1 ] !== "" && string[string.length - 1 ] !== "+" && string[string.length - 1 ] !== "-" && string[string.length - 1 ] !== "×" && string[string.length - 1 ] !== "÷" && !check(string)){
            let temp = string
            string = equal(value + string);
            value  = value + temp
            return [value , string] ;
            }
        else{
            
            value = string + "÷";
            string = "";
            return [value , string] ;
        }
            
    }
    return [value , string] ;
}

function zero(string){
    if (string[0] === "0" && string[1] !== "."){
        string = "0.0";
        string = updateDisplay(string);
        return string;
    }
    string += "0";
    string = updateDisplay(string);
    return string;
}

function one(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "1";
        string = updateDisplay(string);
        return string;
    }
    string += "1";
    string = updateDisplay(string);
    return string;
}

function two(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "2";
        string = updateDisplay(string);
        return string;
    }
    string += "2";
    string = updateDisplay(string);
    return string;
}

function three(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "3";
        string = updateDisplay(string);
        return string;
    }
    string += "3";
    string = updateDisplay(string);
    return string;
}

function four(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "4";
        string = updateDisplay(string);
        return string;
    }
    string += "4";
    string = updateDisplay(string);
    return string;
}

function five(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "5";
        string = string = updateDisplay(string);
        return string;
    }
    string += "5";
    string = string = updateDisplay(string);
    return string;
}

function six(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "6";
        string = updateDisplay(string);
        return string;
    }
    string += "6";
    string = updateDisplay(string);
    return string;
}

function seven(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "7";
        string = updateDisplay(string);
        return string;
    }
    string += "7";
    string = updateDisplay(string);
    return string;
}

function eight(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "8";
        string = updateDisplay(string);
        return string;
    }
    string += "8";
    string = updateDisplay(string);
    return string;
}

function nine(string){
    if (string[0] === "0"  && string[1] !== "."){
        string = "9";
        string = updateDisplay(string);
        return string;
    }
    string += "9";
    string = updateDisplay(string);
    return string;
}






button_proc.onclick = () =>{
    input.value = proc(input.value);
}


button_res.onclick = () =>{
    input_up.value = "";
    input.value = "0";
    updateDisplay(input.value);
}

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





button_del.onclick = ()=>{
    input.value = 0;
    
}

button_plus.onclick = ()=>{
    let add = math_plus(    input.value, input_up.value);
    input_up.value = add[0];
    input.value = add[1];
    
}


button_minus.onclick = ()=>{    
    let add = math_minus(    input.value, input_up.value);
    input_up.value = add[0];
    input.value = add[1];
}
button_times.onclick = ()=>{
    let add = math_times(    input.value, input_up.value);
    input_up.value = add[0];
    input.value = add[1];
}
button_div.onclick = ()=>{
    let add = math_div(    input.value, input_up.value);
    input_up.value = add[0];
    input.value = add[1];
}

button_equal.onclick = ()=>{
    let add = equal_btn(    input.value, input_up.value);
    input_up.value = add[0];
    input.value = add[1];
}





document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
   
        let add = equal_btn(    input.value, input_up.value);
        input_up.value = add[0];
        input.value = add[1];
        addHoverEffect(button_equal)
    }
    else if (event.code === 'Backspace'){
        input.value = del(input.value);
        addHoverEffect(button_del)
    }
   
    else if (event.code === 'NumpadAdd' || event.code === 'Equal'){
        let add = math_plus(    input.value, input_up.value);
        input_up.value = add[0];
        input.value = add[1];
        addHoverEffect(button_plus)
    }
    else if (event.code === 'NumpadSubtract' || event.code === 'Minus'){
        let add = math_minus(    input.value, input_up.value);
        input_up.value = add[0];
        input.value = add[1];
        addHoverEffect(button_minus)
    }
    else if (event.code === 'NumpadMultiply' || event.code === 'Digit8'){
        let add = math_times(    input.value, input_up.value);
        input_up.value = add[0];
        input.value = add[1];
        addHoverEffect(button_times)
    }
    else if (event.code === 'NumpadDivide' || event.code === 'Slash'){
        let add = math_div(    input.value, input_up.value);
        input_up.value = add[0];
        input.value = add[1];
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



