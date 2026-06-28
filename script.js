let res = document.getElementById("res")
let iniciou = true
let simbolo = ''
let historico = []
let conta = []
let n1 = ''
let n2 = ''
let resultados = 0
function digitar_n(i){
    if (res.innerText.length == 11) {
        alert("o numero nao pode contar mais de 11 caracteres")
        return
    }
    if(iniciou){
        historico.push(Number(i))
        res.innerHTML = `${i}`
        iniciou = false
    }else {
        historico.push(Number(i))
        res.innerHTML += `${i}`
    }conta.push(Number(i))
}

function digitar_s(i) {
    let lista = [ '/', '+', '-', 'x']
    n1 = res.innerText
    if (simbolo.includes(conta[conta.length-1])) {
        return // o return serve para quando alguma informacao estaja 
        // esrrada por culpa do usuario e ele acaba bloqueando a funcao de finalizar
    }
    if (iniciou) {
        alert("invalido!")
        return
    }
    if (i == '/') {
        simbolo = i
        historico = []
        conta.push(i)
        res.innerText += '÷'
        return
    }
    simbolo = i
    historico = []
    conta.push(i)
    res.innerText += conta[conta.length-1]
}

function digitar_b(){
    if (historico.includes('.')) {return}
        res.innerText += '.'
        conta.push('.')
        historico.push('.')
}

function resultado(){
    let n = 0
    if (simbolo == '') {
        alert("conta invalida!")
        return
    }
    while (n < historico.length) {
        n++
        n2 += historico[n-1]
    }switch (simbolo) {
        case '+':
            resultados = Number(n1) + Number(n2)
            break
        case '-':
            resultados = Number(n1) - Number(n2)
            break
        case 'x':
            resultados = Number(n1) * Number(n2)
            break
        case '/':
            resultados = Number(n1) / Number(n2)
            break
    }
    res.innerText = resultados
    simbolo = ''
    n1 = ''
    n2 = ''
    historico = []
    conta = [String(resultados)]
}
function del(){
    let n = 0
    conta.pop(conta.length-1)
    if (conta.length == 0) {
        res.innerText = '00'
        iniciou = true
    }else {
        res.innerText = ''
        while (n < conta.length) {
            res.innerText += conta[n]
            n++
        }
    }
    
}