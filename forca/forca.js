let tela = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letras = []
let erros = 7;
let acertos = 0;

function palavraEscolhida(){
  let palavra = document.querySelector("#adct_word");
  palavraSecreta = palavra.value.toUpperCase();
  console.log(palavraSecreta)
  return palavraSecreta
} 



function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key) ){
       letras.push(key)
       console.log(key)
       console.log(letras)
       return estado
    }
    else{
      estado = true
      letras.push(key)
      console.log(key)
      console.log(letras, "if true")
      return estado
    }
}

  function modalWin(){
    const modal = document.querySelector('#modal1')
    const actualStyle = modal.style.display
    if(actualStyle == 'block'){
      modal.style.display = 'none'

    }else{
      modal.style.display = 'block'
    }
    
}

function modalLose(){
  const modal = document.querySelector('#modal2')
  const actualStyle = modal.style.display
  if(actualStyle == 'block'){
    modal.style.display = 'none'

  }else{
    modal.style.display = 'block'
  }
  
}

  function adicionarLetraIncorreta(){
    erros -= 1;
    if (erros == 6) {
      desenhaCirculo()
    }

    if (erros == 5) {
      desenhaTorso()
    }

    if (erros == 4) {
      desenharBraco()
    }

    if (erros == 3) {
      desenharBraco_2()
    }

    if (erros == 2) {
      desenharPerna()
    }

    if (erros == 1) {
      desenharPerna_2()
      modalLose()
    }
   
  }
  

function iniciaJogo(){
   
    document.getElementById("div-desaparece").style.display = 'none';
    palavraEscolhida()
    
// forca
    desenharCanvas()
    desenharLinhas()
    desenharForcaMastro()
    desenharForcaMastro_2()
    desenharApoio()

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase()

        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
          for(let i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] === letra){
              escreverLetraCorreta(i)
              
              acertos++;
            }
            if (acertos == palavraSecreta.length){
              
             setTimeout(() => {
             modalWin()
             }, 500); 
              return
            }
          }
        }
        else{
          adicionarLetraIncorreta(letra)
          escreverLetraIncorreta(letra, erros)
          
        }
      }

    }

    

