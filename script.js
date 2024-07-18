function calcular() {
    let sexo = ''
    if (document.getElementById('mas').checked) {
        sexo = 'Masculino'
    } else {
        sexo = 'Feminino'
    }

    let txtidade = document.getElementById('txtidade')
    let txtalt = document.getElementById('txtalt')
    let txtpes = document.getElementById('txtpes')
    let idade = Number(txtidade.value)
    let altura = Number(txtalt.value)
    let peso = Number(txtpes.value)
    if (txtidade.value.length == 0 || txtalt.value.length == 0 || txtpes.value.length == 0) {
        alert('Preencha todos os campos! ')
    } else if(idade < 2 || idade > 100) {
        alert('Idade inválida, digite novamente')
    } else if(altura < 0.80 || altura > 2.50) {
        alert('Atura inválida, digite novamente')
    } else if (peso < 10 || peso > 200) {
        alert('Peso inválido, digite novamente')
    } else {
        function imc(p, a) {
            let calculoImc = p / a**2
            return calculoImc
        }

        let resultado = imc(peso, altura)
        let mensagem = ''
        
        if (resultado <= 16.9) {
            mensagem = 'Muito abaixo do peso'
        } else if (resultado <= 18,4) {
            mensagem = 'Abaixo do peso'
        } else if (resultado <= 24.9) {
            mensagem = 'Peso normal'
        } else if (resultado <= 29.9) {
            mensagem = 'Acima do peso'
        } else if (resultado <= 34,9) {
            mensagem = 'Obesidade I'
        } else if (resultado <= 40) {
            mensagem = 'Obesidade II'
        } else {
            mensagem = 'Obedidade III'
        }

        alert(mensagem)
    }

}
