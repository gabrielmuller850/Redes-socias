const url= 'https//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    horas =parseInt(dados.)
    minutos =

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('grafico-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximaamente <span>${total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passa em média <span>${dados.tempo_media}</span>horas conectadas.`
 
    const container = document.getElementById('graficos-containe')
    container.appendChild(paragrafo)

}

vizualizarInformacoesGlobais()