const contaBancaria = {
    nome: "Kico",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        const addDeposito = {
            tipo: "Depósito",
            valor: valor
        };
        this.historicos.push(addDeposito);
        return `Depósito de R$${valor/100} realizado para o cliente: ${this.nome}`;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
           return `Saldo insuficiente para o saque de: ${this.nome}`;
        } else {
            this.saldo -= valor;
            const subValor = {
                tipo: "Saque",
                valor: valor
            };
            this.historicos.push(subValor);
            return `Saque de R$${valor/100} realizado para o cliente: ${this.nome}`;
        }
        
    },
    extrato: function () {
        let string = `Extrato de ${this.nome} - Saldo: R$${this.saldo/100}\nHistórico:`;
        for (let item of this.historicos) {
            string += `\n${item.tipo} de R$${item.valor/100}`;
        }
        return string;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());



