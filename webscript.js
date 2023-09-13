form = document.querySelector("form")
firstName = document.querySelector("#first-name")
lastName = document.querySelector("#last-name")


form.addEventListener('submit', (e) => {
    e.preventDefault() 
    card = document.createElement("div")
    card.textContent = `${firstName.value} ${lastName.value}`
    document.body.append(card)
    
    
    
})



