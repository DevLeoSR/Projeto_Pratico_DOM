let contador = 0;
let jogador = 'O';
const ativa= []
const campo = document.querySelectorAll('.campo')
const reinicia = document.querySelector('.reiniciar')
const jogadorX =document.querySelector('#jogadorX')
const jogadorO =document.querySelector('#jogadorO')
const h1 =document.querySelector('#titulo')

const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const c4 = document.querySelector('#c4')
const c5 = document.querySelector('#c5')
const c6 = document.querySelector('#c6')
const c7 = document.querySelector('#c7')
const c8 = document.querySelector('#c8')
const c9 = document.querySelector('#c9')

document.addEventListener('load',ativar())

function ativar() {
  campo.forEach((elemento, i)=> {
    elemento.addEventListener('click', ativa[i] = (e)=>{
      if(!e.target.innerText) e.target.innerText = marcador()
    })
})
}

reinicia.addEventListener('click',()=>{
  campo.forEach((elemento)=>{
    elemento.innerText = "";
  })
  ativar()
  h1.innerText = 'Jogo da velha'
})

function remover() {
  campo.forEach((elemento, i)=>{
    elemento.removeEventListener('click',ativa[i])
  })  
}

function switchPlayer(){
  if (jogador ==='O'){
    jogadorX.classList.add('player');
    jogadorO.classList.remove('player')
  }

  if(jogador ==='X'){
    jogadorX.classList.remove('player');
    jogadorO.classList.add('player')
  }

}

function marcador() {
  jogador = (contador % 2 === 0)? 'O':'X';
  contador++
  switchPlayer()
  return jogador
};

jogadorX.addEventListener('click',()=>{
  let nome = prompt('Cadastre o nome do jogador X') + ' - X'
  jogadorX.innerText = nome
})
jogadorO.addEventListener('click',()=>{
  let nome = 'O - ' + prompt('Cadastre o nome do jogador O')  
  jogadorO.innerText = nome
})


document.addEventListener('click',()=>{
  setTimeout(() => {
    validar()
  }, 10);
})

function validar() {
  if (c1.innerText && c1.innerText===c2.innerText && c1.innerText===c3.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c4.innerText && c4.innerText===c5.innerText && c4.innerText===c6.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c7.innerText && c7.innerText===c8.innerText && c7.innerText===c9.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c1.innerText && c1.innerText===c4.innerText && c1.innerText===c7.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c2.innerText && c2.innerText===c5.innerText && c2.innerText===c8.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c3.innerText && c3.innerText===c6.innerText && c6.innerText===c9.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c1.innerText && c1.innerText===c5.innerText && c1.innerText===c9.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
  if (c7.innerText && c7.innerText===c5.innerText && c7.innerText===c3.innerText) {
    remover()
    h1.innerText='O jogador - '+ jogador + ' - venceu'
  };
}

