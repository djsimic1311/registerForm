let username = document.querySelector("[type = text]")
let email = document.querySelector("[type = email]")
let [pass, confirmPass] = document.querySelectorAll("[type = password]")
let submit = document.querySelector("[type = submit]")
let error = document.getElementById("error")
const form = document.getElementById("form")

const isEmpty = (value) => value === ""

submit.addEventListener( "click" , button => {
    const x = []
    if (isEmpty(username.value)) {
        x.push('username')
        username.classList.add("border-danger")
        setTimeout(() => {
            username.classList.remove("border-danger")
        }, 3000);
    }
    if (isEmpty(email.value)) {
        x.push('email')
        email.classList.add("border-danger")
        setTimeout(() => {
            email.classList.remove("border-danger")
        }, 3000);
    }
    if (isEmpty(pass.value)) {
        x.push('password')
        pass.classList.add("border-danger")
        setTimeout(() => {
            pass.classList.remove("border-danger")
        }, 3000);
    }
    if (confirmPass.value !== pass.value) {
        error.innerHTML = "please confirm your password"
        confirmPass.classList.add("border-danger")
        setTimeout(() => {
            confirmPass.classList.remove("border-danger")
        }, 3000);
    }
    if (x.length > 0) alert(`please fill the folowing fields: ${x.join(', ')}`)
    console.log({username:username.value, email:email.value, pass:pass.value})
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(
        "EMAIL: " + email.value,
        "USERNAME: " + username.value,
        "PASSWORD: " + pass.value,
        "CONFIRM PASS: " + confirmPass.value
    )
})