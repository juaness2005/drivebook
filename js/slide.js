var radio = document.querySelector('.manual-btn')
var cont = 1
var interval

document.getElementById('radio1').checked = true

function iniciarSlide() {
    interval = setInterval(() => {
        proximaImg()
    }, 3000)
}

function pararSlide() {
    clearInterval(interval)
}

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

// Inicia o slide ao carregar a página
iniciarSlide()

// Adiciona eventos para pausar e retomar o slide (desktop e mobile)
var slider = document.querySelector('.slider') // Substitua '.slider' pelo seletor do contêiner do slide

// Eventos para desktop
slider.addEventListener('mouseenter', pararSlide)
slider.addEventListener('mouseleave', iniciarSlide)

// Eventos para dispositivos móveis
slider.addEventListener('touchstart', pararSlide)
slider.addEventListener('touchend', iniciarSlide)
