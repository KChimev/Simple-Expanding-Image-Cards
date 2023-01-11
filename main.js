const cards=document.querySelectorAll('.card')
console.log(cards)
cards.forEach((card)=>{
    card.addEventListener('mouseover',()=>{
            cards.forEach((other)=>{
            other.removeAttribute("class","active")
            other.setAttribute('class', 'card')
            })
        card.setAttribute('class', 'card active')
    })
})