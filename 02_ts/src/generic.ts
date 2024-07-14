const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T{
    //do some database aperations
    const myIndex = 3
    return products[3]
}

const getMoreSearchProducts = <T,>(products: T[]):T => {
    const myIndex = 4
    return products[4]
}

interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object{
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    authoe: string,
    subject: String
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}