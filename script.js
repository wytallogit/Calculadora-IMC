function calcular() {
    let txtidade = document.getElementById('txtidade')
    let txtalt = document.getElementById('txtalt')
    let txtps = document.getElementById('txtpes')


    let sexo = ''
    if (document.getElementById('mas').checked) {
        sexo = 'Masculino'
    } else {
        sexo = 'Feminino'
    }
    
    let idade = Number(txtidade.value)
    let altura = Number(txtalt.value)
    let peso = Number(txtps.value)


}


function Imc(x, y) {
    const calcularImc = x + y
    return calcularImc
}

const resultado = Imc(peso, altura)
alert(resultado)