const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\nTotal de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$${(this.calcularTotalAPagar()/100).toFixed(2)}`)
    },
    addProduto: function (produto) {
        let encontrou = false;
        for (let item of this.produtos) {
            if (produto.id === item.id) {
                item.qtd += produto.qtd;
                encontrou = true;
            }
        }
        if (!encontrou) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].precoUnit * this.produtos[i].qtd/100).toFixed(2)}`)
        }
        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$ ${(this.calcularTotalAPagar()/100).toFixed(2)}`);
    },
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (let item of this.produtos) {
            totalItens += item.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (let item of this.produtos) {
            totalAPagar += (item.precoUnit * item.qtd);
        }
        return totalAPagar;
    },
    calcularDesconto: function () {
        let desconto;
        let descontoA = 0;
        let descontoB = 0;
        let totalItens = this.calcularTotalDeItens();
        let totalPagar = this.calcularTotalAPagar();
        if (totalItens > 4) {
            for (let item of this.produtos) {
                if (item.precoUnit < desconto) {
                    descontoA = item.precoUnit;
                }
            }
        } 
        if (totalPagar > 10000) {
            descontoB = totalPagar * 0.1;
            console.log(descontoB);
        }
        if (descontoA > descontoB) {
            desconto = descontoA;
        } else {
            desconto = descontoB;
        }
        console.log(`Desconto: ${desconto}`);
    } 
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

//carrinho.addProduto(novaBermuda)
//carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

//carrinho.addProduto(novoTenis);
//carrinho.imprimirResumo();

carrinho.imprimirDetalhes();
carrinho.calcularDesconto();