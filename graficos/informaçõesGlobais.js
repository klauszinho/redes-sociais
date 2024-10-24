async function visualizarInformacoesGlobais () {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement ('p')
paragrafo.classList.add('graficos-container_text')
paragrafo.innerHTML = 'você sabia que o mundo tem
${dados.total_pessoas_mundo} de pessoas e
que aproximadamente ${dados.total_pessoas_conectadas}
estão conectadas em alguma rede social e passam em média
${dados.tempo_medio} horas conectadas.'
}