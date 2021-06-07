let arrayOfUsers;

window.onload = function() {
  getUsers()
}

const getUser = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => console.log(user))
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then((data) => arrayOfUsers = data.results)
    .then(() => displayUsers())
}

const logUsers = () => {
console.log(arrayOfUsers)
}

const displayUsers = () => {
  console.log(arrayOfUsers)
  const users = document.getElementById('users')
 arrayOfUsers.map((user, index) => {
  
    const li = document.createElement('li')
    const img = document.createElement('img')
    // set the source of the image to the users picture thubmnail using dot notation
    img.src = user.picture.thumbnail
    const text = document.createTextNode(`#${index}, Name: ${user.name.title} ${user.name.first} ${user.name.last}`)
    const button = document.createElement('button')
    button.innerText = "Show more info"
    const moreText = document.createTextNode(`
    Gender: ${user.gender},
    Age: ${user.dob.age},
    Phone: ${user.cell},
    Email: ${user.email}
    Address: ${user.location.street.number},
    Street: ${user.location.street.name},
    City: ${user.location.city},
    Country: ${user.location.country}

      `)
    button.addEventListener('click', function() {
      const div = document.createElement('div')
      li.appendChild(div)
      div.appendChild(moreText)
    })
    li.appendChild(img)
   li.appendChild(text)
   li.appendChild(button)
    users.append(li)
  })
}







