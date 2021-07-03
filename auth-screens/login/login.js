let login = (e) => {
  console.log('event:', e)
  e.preventDefault()

  const loginForm = document.getElementById('loginForm')

  loginForm.classList.add('was-validated')
  
  if (!loginForm.checkValidity()) {
    return
  }
  
  const email = document.getElementById('exampleInputEmail1').value
  const password = document.getElementById('exampleInputPassword1').value

  let allUsers = localStorage.getItem('allUsers')
  let parsedUsers = allUsers && JSON.parse(allUsers)

  const currentUser = parsedUsers.find(user => user.email == email && user.password == password)
  console.log('currentUser :', currentUser)

  if (currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }).then((value) => {
      location.href = '../../dashboard/dashboard.html'
    });

  } else {
    swal("Bad job!", "You clicked the button!", "error");
  }
}