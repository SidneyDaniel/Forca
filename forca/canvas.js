function desenharCanvas() {
    tela.lineWidth=8
    tela.lineCap="round"
    tela.lineJoin="round"
    tela.strokeStyle="#fff"
    tela.beginPath();
    tela.moveTo(450,400)
    tela.lineTo(700,400)
    tela.stroke()
    tela.closePath()
  }
  
  //              <  DESENHO DA FORCA  >               //

  function desenharLinhas() {
    tela.lineWidth=6
    tela.lineCap="round"
    tela.lineJoin="round"
    tela.strokeStyle = "#fff"
    tela.beginPath()
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
      tela.moveTo(400+(largura*i),500)
      tela.lineTo(450+(largura*i),500)
    }
    tela.stroke()
    tela.closePath()
  }
  
  function desenharForcaMastro(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(500,90)
    tela.lineTo(500,400)
    tela.stroke()
    tela.closePath()
    
  }

  function desenharForcaMastro_2(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(650,90)
    tela.lineTo(500,90)
    tela.stroke()
    tela.closePath()
    
  }

  function desenhaCirculo(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.arc(610, 160, 40, 0, Math.PI * 2, true); // Círculo 
    tela.moveTo(110, 75);
    tela.moveTo(610, 90)
    tela.lineTo(610, 115)
    tela.stroke();
    tela.closePath()
  }
  
  function desenharApoio(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(550,90)
    tela.lineTo(500,200)
    tela.stroke()
    tela.closePath()
  }

  function desenhaTorso(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(610,200)
    tela.lineTo(610,300)
    tela.stroke()
    tela.closePath()
  }

  function desenharBraco(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(610,200)
    tela.lineTo(660,250)
    tela.stroke()
    tela.closePath()
  }

  function desenharBraco_2(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(610, 200)
    tela.lineTo(560, 250)
    tela.stroke()
    tela.closePath()
  }

  function desenharPerna(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(610, 300)
    tela.lineTo(570, 350)
    tela.stroke()
    tela.closePath()
  }

  function desenharPerna_2(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#fff"
    tela.beginPath();
    tela.moveTo(610, 300)
    tela.lineTo(650, 350)
    tela.stroke()
    tela.closePath()
  }

// ===================================================================== //

//===========================Letras Corretas============================//
  function escreverLetraCorreta(index){
      tela.font = "bold 52px Serif"
      tela.lineCap = "round"
      tela.fillStyle = "#fff"
      tela.lineWidth = 6
      let largura= 600/palavraSecreta.length
      tela.fillText(palavraSecreta[index],410 + (largura * index),490)
      
  }
//=========================Letras Incorretas============================//
  function escreverLetraIncorreta(letra, erros){
    tela.font = "bold 40px Serif"
    tela.lineCap = "round"
    tela.fillStyle = "#fff"
    tela.lineWidth = 6
    tela.fillText(letra,320 + (40 *(10 - erros)),610,40 )
  }

  