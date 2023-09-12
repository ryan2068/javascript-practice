loginForm = document.querySelector('#loginForm')
myUsername = document.querySelector('#title')
myPassword = document.querySelector('#author')

library = []

let book = function(title, author) {
  this.title = title,
  this.author = author
}



loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  library.push(new book(myUsername.value, myPassword.value))
  console.log(library)
})

card = document.createElement('div')
card.classList.add('library-card')


card.textContent += library
document.body.append(card)
