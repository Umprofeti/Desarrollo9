import fs, { read } from 'fs'

const readAndWrite = ()=> {
    for (let i = 0; i <=100; i++) {
        fs.writeFile("./dist/numero.txt", `${i}`, (err) => {
            console.log(err)
        } )
    }
}

readAndWrite()
