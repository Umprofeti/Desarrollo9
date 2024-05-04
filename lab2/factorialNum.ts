let factorialNum:string = process.argv[2];

const factorial=(userInput:string):number => {
    let num:number = parseInt(userInput)
    if(num <= 1){
        return 1
    }else{
        return num * factorial((num-1).toString())
    }
}

console.log(`El factorial de ${factorialNum} es: ${factorial(factorialNum)}`)