let inputNumber:string = process.argv[2];

const checkNum = (input:string):boolean => {
    let number:number = parseInt(input)

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
    }
    
    return number !== 1;
}

console.log(checkNum(inputNumber));