var info = document.getElementById('info')
var foto = document.getElementById('foto')
var texto = document.getElementById('texto')
var botao = document.getElementById('botao')
var main = document.getElementById('main')


botao.addEventListener('click', clicou)

function clicou(){
    var sorteio = Math.floor(Math.random() * 10) + 1
    foto.src = `imagens//foto${sorteio}.jpg`
    switch(sorteio){
        case 1:
            info.innerText = 'Data: 25/12/2021 14:22\nLocal: Catu - Bahia'
            texto.innerText = 'Uma das nossas primeiras fotos juntos\nps: espelhinho xujo'
            break
        case 2:
            info.innerText = 'Data: 03/01/2022 12:02\nLocal: Vitoria da Conquista - Bahia'
            texto.innerText = 'Fotinha la em casa na sua primeira vem em uma cidade de primeiro mundo\nps: espelho meio xujo'
            break
        case 3:
            info.innerText = 'Data: 23/12/2021 19:39\nLocal: Catu - Bahia'
            texto.innerText = 'Meu primeiro dia na sua casa\nps: tava doentinha meu amor'
            break
        case 4:
            info.innerText = 'Data: 31/12/2021 18:20\nLocal: Vitoria da Conquista - Bahia'
            texto.innerText = 'Faltando menos de 4 horas pro fim do ano e nos na rua\nps: Foto de natal dps do natal' 
            break
        case 5:
            info.innerText = 'Data: 31/12/2021 19:37\nLocal: Vitoria da Conquista - Bahia'
            texto.innerText = 'Chegada em casa depois de um rolezinho de cria\nps: Dia bem legal' 
            break
        case 6:
            info.innerText = 'Data: 22/04/2022 21:19\nLocal: Catu - Bahia'
            texto.innerText = 'Testando filtro do snap\nps: A blusa que sumiu lul'
            break
        case 7:
            info.innerText = 'Data: 01/03/2022 21:06\nLocal: Vitoria da Conquista/ Catu - Bahia'
            texto.innerText = 'Eu trabalhando e vc em aniversario :(\nps: Mundo é injusto mesmo' 
            break
        case 8:
            info.innerText = 'Data: 08/06/2022 23:18\nLocal: Catu - Bahia'
            texto.innerText = 'Já em clima de são joão\nps: Olha a cobra'
            break
        case 9:
            info.innerText = 'Data: 20/04/2022 23:28\nLocal: Catu - Bahia'
            texto.innerText = 'Eu quando descubro que o pão tava envenenado\nps: (emoji rindo com lagrima)*20 '
            break
        case 10:
            info.innerText = 'Data: 07/06/2022 00:09\nLocal: Catu - Bahia'
            texto.innerText = 'Tirando aquele cochilo de leves\nps: ZZzz '
            break     
    }
}
