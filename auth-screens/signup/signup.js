let signup = (e) => {
  console.log('event:', e)
  e.preventDefault()
  const email = document.getElementById('exampleInputEmail1').value
  const password = document.getElementById('exampleInputPassword1').value
  const confirmPassword = document.getElementById('exampleInputPassword2').value
  const username = document.getElementById('username').value
  if (!email || !password || !confirmPassword || !username) {
    return alert('Please enter all the fields')
  }

  const userData = {
    email,
    password,
    username
  }

  var users = localStorage.getItem("allUsers")
  var parsedUsers = users && JSON.parse(users)
  
  parsedUsers && parsedUsers.push(userData)
  let dataToStore = parsedUsers ? parsedUsers : [userData]
  console.log('data to store :', dataToStore);
  localStorage.setItem("allUsers", JSON.stringify(dataToStore))
}