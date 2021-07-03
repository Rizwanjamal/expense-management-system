const currentUser = localStorage.getItem('currentUser')
const parsedUser = currentUser && JSON.parse(currentUser)


document.getElementById('userName').innerText = `Welcome ${parsedUser.username}`