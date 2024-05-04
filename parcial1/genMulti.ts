let input:string = process.argv[2];


const genMulti = (input:string):Array<number> => {

    const userNum: number =  parseInt(input);
    let finalArray: Array<number> = []


    for (let i = 0; i <= 10; i++) {
        finalArray.push(userNum*i)
    }

    return finalArray
}

console.log(genMulti(input))