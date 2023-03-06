let eua = document.getElementById('selectCountryEUA');
let br = document.getElementById('selectCountryBR');

let oneText = document.getElementById('oneText');
let twoText = document.getElementById('twoText');
let threeText = document.getElementById('threeText');
let lets = document.getElementById('lets');


let plan = document.getElementById('plan');
let price = document.getElementById('price');
let more = document.getElementById('more');
let enter = document.getElementById('enter');
let newPrice = document.getElementById('new')



// ESTADOS UNIDOS
br.addEventListener('click', function(){
    oneText.innerText = 'Filmes, Séries e muito mais. Sem limites.'
    twoText.innerText = 'Assista onde quiser. Cancele quando quiser.'
    threeText.innerText = 'Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.'

    lets.innerText = 'Vamos lá!'
    enter.innerText = 'Entrar'
    newPrice.innerText = 'NOVO!'
    plan.innerText = 'Planos a partir de'
    more.innerText = 'Saiba mais'
    price.innerText = 'R$18,90.'
})



// BRASILLLLLLLLLLLL
eua.addEventListener('click', function(){
    oneText.innerText = 'Unlimited movies, TV shows, and more.'
    twoText.innerText = 'Watch anywhere. Cancel anytime.'
    threeText.innerText = 'Ready to watch? Enter your email to create or restart your membership.'

    lets.innerText = 'Get Started!'
    enter.innerText = 'Sign In'
    newPrice.innerText = 'NEW!'
    plan.innerText = 'Plans now start at '
    more.innerText = 'Learn More'
    price.innerText = 'BRL18.90.'
})
