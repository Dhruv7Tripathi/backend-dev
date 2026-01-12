function login() {
  return new Promises((resolve, reject) => {
    setTimeout(() => {
      console.log("login")
      resolve()
    }, 2000)
  })
}


function userDetail() {
  return new Promises((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

login().then(() => {
  return userDetail()
}).then(() => {
  console.log("all task done")
}).catch(() => {
  console.log("error")
})