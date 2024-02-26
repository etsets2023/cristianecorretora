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








