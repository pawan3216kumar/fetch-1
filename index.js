let form = document.getElementById("form")
let name = document.getElementById("name").value 
let age = document.getElementById("age").value
let submit = document.getElementById("submit").value



form.addEventListener("submit" , (event) => {
    event.preventDefault()
    
    
    let name  = event.target[0].value
    let age = event.target[1].value

    let obj = {
        name,
        age,
    }

    console.log(obj)
    localStorage.setItem(name , age)

    console.log(`The age at ${name} is ${localStorage.getItem(name)}`)
   

    
})

