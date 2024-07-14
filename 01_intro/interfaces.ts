interface User {
    email: string, 
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number):number
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const yash: Admin = {email: "y@y.com", userId: 211, role: "admin", githubToken:"github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "yash10", off: 10) => {
       return 10 
    },
}