let userNum:string = process.argv[2];

const tablaMultiplicar = (userNum:string) => {
    let numInt = parseInt(userNum);
    if (!isNaN(numInt)) {
        for (let i = 0; i <= 12; i++) {
            console.log(`${i} x ${numInt} = ${i * numInt}`);
        }
    }
    else {
        console.log("El valor introducido no es un número");
    }
};