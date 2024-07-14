function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name:string, email: string, isPaid: boolean = false) => {}


addTwo(5)
getUpper("yash")

signUpUser("yash", "yash@lco.dev", false)
loginUser("h", "h@history.com")

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const Hello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}

function handleError(errmsg: string):void{
    throw new Error (errmsg);
}

export{}