var bolos = []

function cadastrar() {
    var bolo = []
    var nome = document.getElementById("tipoNome").value
    var tamanho = document.getElementById("diametro").value
    var preco = document.getElementById("preco").value

    document.querySelector("#idOut").innerHTML = "Nome: " + nome + " - Tamanho: " + tamanho + " cm" + " - Preço: R$ " + preco

    bolo.push(nome)
    bolo.push(tamanho)
    bolo.push(preco)

    var precoCm2 = calcularPrecoCm2(preco, tamanho)
    bolo.push(precoCm2)

    bolos.push(bolo)
}

function calcularPrecoCm2(preco, tamanho) {
    var area = 3.14 * Math.pow((tamanho / 2), 2)
    var precoCm2 = preco / area
    return precoCm2
}

function exibirRel() {

    bolos.sort(function (a, b) {
        if (a[3] > b[3]) {
            return 1
        }
        if (b[3] > a[3]) {
            return -1
        }
        return 0
    })

    bolos[0].push("Melhor CB")
    for (let i = 0; i < bolos.length - 1; i++) {
        var precoCm2A = bolos[i][3]
        var precoCm2B = bolos[i + 1][3]

        var precoCm2 = ((precoCm2B / precoCm2A) - 1) * 100

        bolos[i + 1].push(precoCm2)
    }

    var tbodyRel = document.getElementById("tboIdLinha")
    for (let i = 0; i < bolos.length; i++) {
        var linha = montaTr(bolos[i])
        tbodyRel.appendChild(linha)
    }
}

function montaTr(bolo) {
    let boloTr = document.createElement("tr")
    boloTr.classList.add("tdNomeData")

    console.log(bolo[3]);
    console.log(bolo[3].toFixed(2));

    boloTr.appendChild(montaTd(bolo[0], "tdNome"))
    boloTr.appendChild(montaTd(bolo[1], "tdTamanho"))
    boloTr.appendChild(montaTd(bolo[2], "tdPreco"))
    boloTr.appendChild(montaTd(bolo[3].toFixed(5), "tdValor"))

    if (isNaN(bolo[4])) {
        boloTr.appendChild(montaTd(bolo[4], "tdDiferenca"))
    } else {
        boloTr.appendChild(montaTd(bolo[4].toFixed(2), "tdDiferenca"))
    }

    return boloTr
}

function montaTd(dado, classe) {
    let boloTd = document.createElement("td")
    boloTd.classList.add(classe)

    boloTd.textContent = dado

    return boloTd
}