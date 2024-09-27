const url= 'https//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('grafico-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximaamente${total_pessoas_conectadas} estão conectadas em alguma rede social e passa em média${dados.tempo_media}horas conectadas.`
 
    

}

vizualizarInformacoesGlobais()