let users = [
    {
        "id": "4",
        "name": "Arayik",
        "surname": "Musheghyan"
    },
    {
        "id": "5",
        "name": "Armen",
        "surname": "Alaverdyan"
    }
]

let newUser = users.filter(user => user.name =="Arayik")
console.log(newUser);



/**
 * 
 * example
   let obj = {"id":"1", "username":"2"}
   const {id, username} = obj
 * 
 */