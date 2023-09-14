form = document.querySelector("form")
firstName = document.querySelector("#first-name")
lastName = document.querySelector("#last-name")

cardContainer = document.createElement("div")
cardContainer.classList.add("card-container")
document.body.appendChild(cardContainer)



form.addEventListener('submit', (e) => {
    e.preventDefault() 
    card = document.createElement("div")
    card.classList.add("card")
    card.textContent = harryPotter.info()
    cardContainer.appendChild(card)
})

library = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pages}`
    }
}

harryPotter = new Book('harry potter', 'JK Rowling','272')

library.push(harryPotter)






