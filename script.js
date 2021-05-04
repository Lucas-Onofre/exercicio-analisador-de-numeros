let num = document.querySelector('input#n1')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let val = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        res.innerHTML = '[ERRO] Valor inválido ou já encontrado na lista. Verifique e tente novamente.'
        res.style.color = 'red'
        res.style.fontSize = '14px'
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(val.length == 0){
        res.innerHTML = '[ERRO] Adicione valores antes de finalizar.'
        res.style.color = 'red'
        res.style.fontSize = '14px'
    }
    else{
        res.style.color = 'black'
        res.style.fontSize = '20px'
        let total = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0
        for(let i in val){
            soma += val[i]
            if(val[i] > maior){
                maior = val[i]
            }
            else if(val[i] < menor){
                menor = val[i]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}