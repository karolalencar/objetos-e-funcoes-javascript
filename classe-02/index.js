const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            this.statusCarro();
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            this.statusCarro();
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade += 10;
            this.statusCarro();
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            this.statusCarro();
        }
    },
    statusCarro: function () {
        let status = "";
        if (this.ligado) {
            status = "ligado";
        } else {
            status = "desligado";
        }
        console.log(`Carro ${status}. Velocidade: ${this.velocidade}`)
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();