// class User{
//     email: string
//     name: string
//     private  readonly city: string = "Solan"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

class User{

    protected _courseCount = 1
 
       readonly city: string = "Solan"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
    ){
        this.email = email;
        this.name = name
    }

    private deleteToken(){
        console.log("Token Deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <= 1){
            throw new Error("Course count should be morre than 1");
        }
        this._courseCount = courseNum
    }

}

class SubUse extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


const yash = new User("Y@y.com", "yash")
// yash.city = "solan"