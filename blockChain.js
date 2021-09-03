const Block = require('./block')
const Transaction = require('./Transactions')

class BlockChain {
    constructor() {
        this.chain = [this.crearBlockeInicial()]
        this.dificultad = 3
        this.pendingTransactions = []
        this.miningReward = 100
    }

    crearBlockeInicial() {
        return new Block('02/09/2021', 'Bloque Inicial', '0')
    }

    getUltimoBloque() {
        return this.chain[this.chain.length - 1]
    }

    agregarBloque(nuevoBloque) {
        nuevoBloque.hashPrevio = this.getUltimoBloque().hash
        nuevoBloque.minarBloque(this.dificultad)
        this.chain.push(nuevoBloque)
    }

    agregarTrasaction(transaction) {
        this.pendingTransactions.push(transaction)
    }

    minarTransacccionesPendientes(addressMinero) {
        let block = new Block(Date.now(), this.pendingTransactions)
        block.hashPrevio = this.getUltimoBloque().hash
        block.minarBloque(this.dificultad)
        console.log('Se a minado correctamente el bloque')
        this.chain.push(block)
        this.pendingTransactions = [
            new Transaction(null, addressMinero, this.miningReward)
        ]
    }

    getBalnceOfAddress(address) {
        let balance = 0

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount
                }
                if (trans.toAddress === address) {
                    balance += trans.amount
                }
            }
        }

        return balance
    }

    validarChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const bloqueactual = this.chain[i]
            const bloqueAnterior = this.chain[i - 1]
            if (bloqueactual.hash != bloqueactual.calcularHash()) {
                return false
            }
            if (bloqueactual.hashPrevio != bloqueAnterior.hash) {
                return false
            }
            return true
        }
    }
}

module.exports = BlockChain