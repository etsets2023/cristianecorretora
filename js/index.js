
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


//ALTERAR BACKGROUND
setInterval(function mudarBackground(){   
    let background = document.querySelector('.principal')
   background.style.backgroundImage = "url('../img/condominio_eco_vila_talisia_pronto_para_morar1.jpeg')"    
},9000) 

setInterval(function mudarBackground2(){
    let background2 = document.querySelector('.principal')
    background2.style.backgroundImage = "url('../img/praia_residencia.jpg')"  
},10000)


















