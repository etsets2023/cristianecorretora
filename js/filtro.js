function filterElements(category){
    const elements = document.querySelectorAll('.box')


elements.forEach((element) => {
    element.classList.remove('mostrar')
    element.classList.add('esconder')
        if(category === 'Todos' || element.classList.contains(category)){
            element.classList.remove('esconder')
            element.classList.add('mostrar')
        }
     })
}
