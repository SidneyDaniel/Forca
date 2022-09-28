function desenharCanvas() {
    tela.lineWidth=8
    tela.lineCap="round"
    tela.lineJoin="round"
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#0A3871"
    tela.fillRect(0,0,1200,800)
    tela.beginPath();
    tela.moveTo(650,500)
    tela.lineTo(900,500)
    tela.stroke()
    tela.closePath()
  }
  
  //              <  DESENHO DA FORCA  >               //

  function desenharLinhas() {
    tela.lineWidth=6
    tela.lineCap="round"
    tela.lineJoin="round"
    tela.strokeStyle = "#0A3871"
    tela.beginPath()
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
      tela.moveTo(500+(largura*i),640)
      tela.lineTo(550+(largura*i),640)
    }
    tela.stroke()
    tela.closePath()
  }
  
  function desenharForcaMastro(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(700,190)
    tela.lineTo(700,500)
    tela.stroke()
    tela.closePath()
    
  }

  function desenharForcaMastro_2(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(850,190)
    tela.lineTo(700,190)
    tela.stroke()
    tela.closePath()
    
  }

  function desenhaCirculo(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.arc(810, 260, 40, 0, Math.PI * 2, true); // Círculo 
    tela.moveTo(110, 75);

    tela.moveTo(810, 190)
    tela.lineTo(810, 215)
    tela.stroke();
    tela.closePath()
  }
  
  function desenharApoio(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(750,190)
    tela.lineTo(700,300)
    tela.stroke()
    tela.closePath()
  }

  function desenhaTorso(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(810,300)
    tela.lineTo(810,400)
    tela.stroke()
    tela.closePath()
  }

  function desenharBraco(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(810,300)
    tela.lineTo(860,350)
    tela.stroke()
    tela.closePath()
  }

  function desenharBraco_2(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(810, 300)
    tela.lineTo(760, 350)
    tela.stroke()
    tela.closePath()
  }

  function desenharPerna(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(810, 400)
    tela.lineTo(770, 450)
    tela.stroke()
    tela.closePath()
  }

  function desenharPerna_2(){
    tela.lineWidth=8
    tela.fillStyle= "#F3F5FC"
    tela.strokeStyle = "#000"
    tela.beginPath();
    tela.moveTo(810, 400)
    tela.lineTo(850, 450)
    tela.stroke()
    tela.closePath()
  }

// ===================================================================== //


  function escreverLetraCorreta(index){
      tela.font = "bold 52px Serif"
      tela.lineCap = "round"
      tela.fillStyle = "#0A3871"
      tela.lineWidth = 6
      let largura= 600/palavraSecreta.length
      tela.fillText(palavraSecreta[index],505 + (largura * index),620)
      
  }
  
  function escreverLetraIncorreta(letra, erros){
    tela.font = "bold 40px Inter"
    tela.lineCap = "round"
    tela.fillStyle = "#0A3871"
    tela.lineWidth = 6
    tela.fillText(letra,420 + (40 *(10 - erros)),720,40 )
  }

  