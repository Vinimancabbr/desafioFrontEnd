var widthN = screen.width
var heightN = screen.height

//função que altera o texto e altera o estilo do botão
function Escolha(a) {
/*esse switch case determina que a array b vai ser todos os valores que não 
serão alterados (isso faz quando você selecionar um o outro perde a seleção)*/   
switch (a) {
    case 1: var b = [ 2, 3, 4, 5]
    break;
    case 2: var b = [1, 3, 4, 5]
    break;
    case 3: var b = [1, 2, 4, 5]
    break;
    case 4: var b = [1, 2, 3, 5]
    break;
    case 5: var b = [1, 2, 3, 4]
    break
}
//Mudança do texto
    document.getElementById('Res').innerText = `You selected ${a} of 5`;
//Mundança do botão selecionado
    document.getElementById(`Numero${a}`).style.backgroundColor = 'var(--hsl-Orange)'
    document.getElementById(`Numero${a}`).style.color = 'var(--hsl-White)'
//Retorno ao padrão dos outros botões
    document.getElementById(`Numero${b[0]}`).style.backgroundColor = 'var(--hsl-MediumBlue)'
    document.getElementById(`Numero${b[0]}`).style.color = 'var(--hsl-MediumGrey)'
    document.getElementById(`Numero${b[1]}`).style.backgroundColor = 'var(--hsl-MediumBlue)'
    document.getElementById(`Numero${b[1]}`).style.color = 'var(--hsl-MediumGrey)'
    document.getElementById(`Numero${b[2]}`).style.backgroundColor = 'var(--hsl-MediumBlue)'
    document.getElementById(`Numero${b[2]}`).style.color = 'var(--hsl-MediumGrey)'
    document.getElementById(`Numero${b[3]}`).style.backgroundColor = 'var(--hsl-MediumBlue)'
    document.getElementById(`Numero${b[3]}`).style.color = 'var(--hsl-MediumGrey)'
    }
        
     
//função que altera a pagina atual
function Revelar() {
        document.getElementsByClassName('main')[0].style.display = "none";
        document.getElementsByClassName('Result')[0].style.display = "initial";
    }









