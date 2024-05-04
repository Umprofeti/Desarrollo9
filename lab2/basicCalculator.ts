let userInput1:string = process.argv[2];
let userInput2:string = process.argv[3];
let userOperator:string = process.argv[4];

const basicCalculator = (userInput:string, userInput2:string, userOperator:string):string => {
    let num1:number = parseInt(userInput);
    let num2:number = parseInt(userInput2);
    if(!isNaN(num1) && !isNaN(num2)){
        switch(userOperator){
            case "+":
                return `La suma es: ${num1 + num2}`
                
            case "-":
                return `La resta es: ${num1 - num2}`
                
            case "*":
                return `La multiplicación es: ${num1 * num2}`
                
            case "/":
                if(num2 == 0){
                    return "La división con el número 0 no está contemplada"}
                else{
                    return `La división es: ${num1 / num2}`
                }
            default:
                return "El operador no es valido"
        }
    }
    else{
        return "Uno de los operandos no es un numero";
    }
}

console.log(basicCalculator(userInput1, userInput2, userOperator))