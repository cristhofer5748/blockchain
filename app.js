const Block = require('./block')
const BlockChain = require('./blockChain')
const Transations = require('./Transactions')


let nuevaMoneda = new BlockChain()


// console.log('Minando bloque 1.....................................')
// nuevaMoneda.agregarBloque(new Block('02/09/2021', { cantidad: 10 }))
// console.log('Minando bloque 2.....................................')
// nuevaMoneda.agregarBloque(new Block('03/09/2021', { cantidad: 40 }))
// console.log('Minando bloque 3.....................................')
// nuevaMoneda.agregarBloque(new Block('04/09/2021', { cantidad: 100 }))
// console.log('Minando bloque 4.....................................')
// nuevaMoneda.agregarBloque(new Block('05/09/2021', { cantidad: 1000 }))

// console.log(nuevaMoneda.validarChain())
// nuevaMoneda.chain[1].data = { cantidad: 200 }

// console.log(nuevaMoneda.validarChain())

nuevaMoneda.agregarTrasaction(new Transations('Carlos', 'Cristhofer', 100))
nuevaMoneda.agregarTrasaction(new Transations('Juan', 'Alex', 50))

console.log('Comiensa el minado ....................................')
nuevaMoneda.minarTransacccionesPendientes('Carlos')
nuevaMoneda.minarTransacccionesPendientes('Carlos')

console.log('El balance nuevo es ', nuevaMoneda.getBalnceOfAddress('Carlos'))

console.log(JSON.stringify(nuevaMoneda, null, 4))