//SCROLL ESQUERDA PRA DIREITA//
const myObserver = new IntersectionObserver ((entries) => {
    // console.log(entries)
    entries.forEach((entry) =>{
        if (entry.isIntersecting == true){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))
//FIM SCROLL ESQUERDA PRA DIREITA//


//DATA ANIME PARA MAIS ELEMENTOS//
const item = document.querySelectorAll('[data-anime');
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    // console.log(windowTop)

    item.forEach(element => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animate')
        } else{
            element.classList.remove('animate')
        }
    })
}

animeScroll()

window.addEventListener('scroll', () =>{
    animeScroll()
})
//FIM DATA ANIME PARA MAIS ELEMENTOS//


//ALTERAR BACKGROUND
//setInterval(function mudarBackground(){   
//    let background = document.querySelector('.principal')
//   background.style.backgroundImage = "url('../img/condominio_eco_vila_talisia_pronto_para_morar1.jpeg')"    
//},9000) 

//setInterval(function mudarBackground2(){
//    let background2 = document.querySelector('.principal')
//    background2.style.backgroundImage = "url('../img/praia_residencia.jpg')"  
//},10000)
//FIM ALTERAR BACKGROUND


setInterval(function alterarBackground() {
    var elemento = document.querySelector('.principal')
    var imagens = [
        'url("../img/condominio_eco_vila_talisia_pronto_para_morar1.jpeg")',
        'url("../img/praia_residencia.jpg")' ,
        //'url("../img/condominio_portais_dos_rubis.png")'
    ];
    var indiceAtual = imagens.indexOf(elemento.style.backgroundImage);

    // Verifica se o índice atual é o último da lista, se for, volta para o início
    if (indiceAtual === imagens.length - 1) {
        indiceAtual = 0;
    } else {
        indiceAtual++;
    }

    // Define a próxima imagem de fundo
    elemento.style.backgroundImage = imagens[indiceAtual];
},5000);




















