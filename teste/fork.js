let palavras = ['ALURA', 'FORCA', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMA', 'DESAFIO'];
let tela = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letras = []
let erros = 7;

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
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
    }
  }
  
function iniciaJogo(){
   
    document.getElementById("div-desaparece").style.display = 'none';
    escolherPalavraSecreta()
    

    desenharCanvas()
    desenharLinhas()
    desenharForcaMastro()
    desenharForcaMastro_2()
    desenharApoio()

    // ===Boneco== //
    
    
    // ==========//

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase()

        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
          for(let i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] === letra){
              escreverLetraCorreta(i)
            }
          }
        }
        else{
          adicionarLetraIncorreta(letra)
          escreverLetraIncorreta(letra, erros)
          
        }
      }

    }