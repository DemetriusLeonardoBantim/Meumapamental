const span3 = document.querySelector('.oi h1')
const span4 = document.querySelector('.oi h2')
const span6 = document.querySelector('.oi h3')
const test= document.querySelector('.flex4')


span3.addEventListener('click', () =>{
    test.classList.add('flex3')
    test.classList.remove('flex4')
    test.classList.remove('flex6')
})

span4.addEventListener('click', () =>{
    test.classList.add('flex4')
    test.classList.remove('flex3')
    test.classList.remove('flex6')
})


span6.addEventListener('click', () =>{
    test.classList.add('flex6')
    test.classList.remove('flex3')
    test.classList.remove('flex4')
})