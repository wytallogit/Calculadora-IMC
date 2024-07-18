function calcular() {
    let sexo = '' //validando o sexo da pessoa
    if (document.getElementById('mas').checked) {
        sexo = 'Masculino'
    } else {
        sexo = 'Feminino'
    }
    /*todo txt tem como objetivo ser usado para ver o lenght pois essa propiedade so é usada em strings*/
    let txtidade = document.getElementById('txtidade')
    let txtalt = document.getElementById('txtalt')
    let txtpes = document.getElementById('txtpes')
    /*declaração dos numeros */
    let idade = Number(txtidade.value)
    let altura = Number(txtalt.value)
    let peso = Number(txtpes.value)
    if (txtidade.value.length == 0 || txtalt.value.length == 0 || txtpes.value.length == 0) { //validação para todos compos preenchidos
        alert('Preencha todos os campos! ')
    } else if(idade < 2 || idade > 100) {
        alert('Idade inválida, digite novamente')
    } else if(altura < 0.80 || altura > 2.50) {
        alert('Atura inválida, digite novamente')
    } else if (peso < 10 || peso > 200) {
        alert('Peso inválido, digite novamente')
    } else {
        function imc(p, a) {
            return calculoImc = p / a**2
        }

        let resultado = imc(peso, altura).toFixed(2)
        let mensagem = ''
        
        if (resultado <= 16.9) {
            mensagem = 'Muito abaixo do peso'
        } else if (resultado <= 18.4) {
            mensagem = 'Abaixo do peso'
        } else if (resultado <= 24.9) {
            mensagem = 'Peso normal'
        } else if (resultado <= 29.9) {
            mensagem = 'Acima do peso'
        } else if (resultado <= 34.9) {
            mensagem = 'Obesidade I'
        } else if (resultado <= 40) {
            mensagem = 'Obesidade II'
        } else {
            mensagem = 'Obedidade III'
        }
        alert(`${resultado} e ${mensagem}`)
    }  

}
