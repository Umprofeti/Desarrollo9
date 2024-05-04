let alturaInput:string = process.argv[2]
let pesoInput:string = process.argv[3]

const calIMC = (altura:string, peso:string):number => {
    let alturaN:number = parseFloat(altura)
    let pesoN:number = parseFloat(peso)

    return (pesoN/(alturaN*alturaN))
}

console.log(`Su IMC es ${calIMC(alturaInput, pesoInput)}`);