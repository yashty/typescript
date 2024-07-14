let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let yash: User | Admin = {name: "yash", id: 1565}


// function getDBId(id: number |string){
//     console.log(`DB id is ${id}`);
    
// }

function getDBId(id: number |string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    
}

// array 

const data: (number | string | boolean)[] = ["1", "2", "3",4, true]

let seatAllotment: "asile" | "middle" | "window"