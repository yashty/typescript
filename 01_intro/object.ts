// const User = {
//     name: "yash",
//     email: "yash@ysh.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "yash", isPaid: false, email:"y@y.com"}
// createUser(newUser)



// function createCourse(): {name:string, price: number}{
//     return{name:"reactjs", price:399}
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name:" ", email:" ", isActive: true}
// }

// createUser({name:" ", email:" ", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}


let myUser: User ={
    _id: "12345",
    name: "y",
    email: "y@y.com",
    isActive: false
}


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type carddetails = cardNumber & cardDate & {
    cvv: number
}

export{}