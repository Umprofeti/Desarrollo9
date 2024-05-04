let dadoQuantity:string = process.argv[2]

const lanzaDado = (input:string):number[] => {
    let Quantity:number = parseInt(input);
    let result:number[] = [];

    for (let i = 0; i < Quantity; i++) {
        result.push((Math.floor(Math.random() * 6) + 1))
        
    }

    return result
}

console.log(lanzaDado(dadoQuantity));